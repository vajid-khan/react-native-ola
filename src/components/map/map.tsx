import React from 'react';
import {
    View,
    Image,
    StatusBar,
    StyleSheet,
} from 'react-native';

import { connect } from 'react-redux';
import BookingForm from '../booking/form/form';
import * as actions from '../../store/actions/index';
import { MAP_ZOOM_LEVEL } from '../../utils/contants';
import SplashScreen from 'react-native-splash-screen';
import Geolocation from '@react-native-community/geolocation';
import { getAddressFromCoordinate } from '../../utils/location';
import DrawerToggleButton from '../../routes/drawer/drawerButton';
import { requestLocationPermission } from '../../utils/permission'
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

class Map extends React.Component {

    state = {
        is_dragging: false,
        refetch_address_from_region: true,
        region: {
            latitude: 0,
            longitude: 0,
            ...MAP_ZOOM_LEVEL
        }
    }

    _handleRegionChangeStart = () => {
        this.setState({ is_dragging: true });
    }

    _handleRegionChange = region => {

        this.setState({ is_dragging: false });

        if (this.state.refetch_address_from_region === false) {
            /*
            map region change is caused by selecting address from form
            no need to refetch address
            */
            return;
        }

        getAddressFromCoordinate(region)
            .then(response => {
                if (response.status == 'success') {
                    this.props.saveBookingAddress({
                        address: response.address,
                        coordinate: {
                            latitude: region.latitude,
                            longitude: region.longitude
                        }
                    })
                }
            })
            .then(() => {
                this.setState({
                    refetch_address_from_region: true,
                    region: region
                });
            });
    }

    _setCurrentLocation = () => {
        requestLocationPermission()
            .then(permission => {
                if (permission != 'granted') {
                    return;
                }

                Geolocation.getCurrentPosition(position => {
                    let location = position.coords;
                    const new_region = { ...this.state.region };
                    new_region.latitude = location.latitude;
                    new_region.longitude = location.longitude;

                    this._animateMapToRegion(new_region);
                    this.setState({ region: new_region, is_dragging: false });
                    this.props.changeSelectedAddressType({ selected_address_type: 'pickup' });

                }, error => {
                    this.props.navigation.navigate('locationError')
                }, {
                    // timeout:5000,
                    // maximumAge:5000,
                    // enableHighAccuracy: true,
                });

            });
    }

    _animateMapToRegion = (region, reFetchAddressFromRegion = true) => {
        this.setState({
            refetch_address_from_region: reFetchAddressFromRegion
        }, () => {
            this.mapView.animateToRegion({
                ...region,
                ...MAP_ZOOM_LEVEL
            });
        })

    }

    componentDidMount() {
        this._setCurrentLocation();
    }

    _renderMarkers = () => {
        const markers = [];

        if (this.props.pickup.coordinate.latitude && !this.state.is_dragging) {
            markers.push(
                <Marker
                    key="pickup"
                    pinColor='green'
                    coordinate={{
                        latitude: this.props.pickup.coordinate.latitude,
                        longitude: this.props.pickup.coordinate.longitude
                    }}
                />
            )
        }

        if (this.props.drop.coordinate.latitude && !this.state.is_dragging) {
            markers.push(
                <Marker
                    key="drop"
                    pinColor='red'
                    coordinate={{
                        latitude: this.props.drop.coordinate.latitude,
                        longitude: this.props.drop.coordinate.longitude
                    }}
                />
            )
        }

        return markers;
    }

    render() {
        return (
            <View style={{
                flex: 1
            }}>

                <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />

                <MapView
                    showsUserLocation
                    style={styles.map}
                    showsIndoors={false}
                    rotateEnabled={false}
                    provider={PROVIDER_GOOGLE}
                    showsMyLocationButton={false}
                    showsIndoorLevelPicker={false}
                    initialRegion={this.state.region}
                    ref={(ref) => this.mapView = ref}
                    onMapReady={() => SplashScreen.hide()}
                    onPanDrag={this._handleRegionChangeStart}
                    onRegionChangeComplete={this._handleRegionChange}
                >
                    {this._renderMarkers()}

                </MapView>

                <DrawerToggleButton
                    navigation={this.props.navigation}
                />

                <View style={styles.centerMarker}>
                    <Image
                        style={styles.centerMarkerImg}
                        source={require('../../assets/images/map/car_map.png')}
                    />
                </View>

                <BookingForm
                    visible={!this.state.is_dragging}
                    navigation={this.props.navigation}
                    changeMapRegion={this._animateMapToRegion}
                    setCurrentLocation={this._setCurrentLocation}
                />

            </View>
        )
    }

}

const styles = StyleSheet.create({
    map: {
        height: '100%',
        width: '100%'
    },
    centerMarker: {
        position: 'absolute',
        left: '50%',
        top: '50%',
        marginTop: -38,
        marginLeft: -20
    },
    centerMarkerImg: {
        width: 40,
        height: 40
    },

});

const mapStateToProps = state => {
    return {
        drop: state.booking.drop,
        pickup: state.booking.pickup,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        saveBookingAddress: payload => dispatch(actions.saveBookingAddress(payload)),
        changeSelectedAddressType: payload => dispatch(actions.changeSelectedAddressType(payload)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Map);