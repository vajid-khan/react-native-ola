import React from 'react';
import {
    Text,
    View,
    Animated,
    TouchableOpacity,
    TouchableWithoutFeedback
} from 'react-native';

import styles from './style';
import { connect } from 'react-redux';
import Icon from '../../../ui/icon/Icon';
import SnackBar from '../../../ui/snack/snackbar';
import * as actions from '../../../store/actions/index';
import { validateAddress } from '../../../utils/FormValidation';

class Booking extends React.Component {

    state = {
        error: false,
        message: '',
    }

    componentWillMount() {
        this.animatedValue = new Animated.Value(1);
    }

    componentDidUpdate() {
        const toValue = this.props.visible;

        Animated.spring(this.animatedValue, {
            toValue: toValue,
            timing: 100
        }).start();
    }

    _handleShowGeoSuggest = (type) => {

        let address = this.props.address[type];
        let previous_selected_state = this.props.address.selected_address_type;

        if (type == previous_selected_state) {
            this.props.navigation.navigate('locationPicker', {
                setMapRegion: this.props.changeMapRegion
            });

        } else if (address && address.coordinate && address.coordinate.latitude) {
            this.props.changeMapRegion(address.coordinate, false);

        } else {
            this.props.navigation.navigate('locationPicker', {
                setMapRegion: this.props.changeMapRegion
            });
        }

        this.props.changeSelectedAddressType({ selected_address_type: type });

    }

    _handleFormSubmit = () => {
        let error = validateAddress(this.props.address);

        if (error.hasError) {
            this.setState({ error: true, message: error.message });
            return;
        }

        this.props.navigation.navigate('selectCab');
    }

    _handleSetUserCurrentLocation = () => {
        this.props.changeSelectedAddressType({ selected_address_type: 'pickup' });
        this.props.setCurrentLocation();
    }

    render() {

        const animatedStyle = {
            opacity: this.animatedValue.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 1],
                extrapolate: 'clamp'
            }),
        }

        return (
            <React.Fragment>
                {
                    this.state.error && <SnackBar
                        timeOut={3000}
                        message={this.state.message}
                        timeOutCallBack={() => this.setState({ error: false })}
                    />
                }
                <Animated.View style={[styles.addressContainer, animatedStyle]}>
                    <TouchableWithoutFeedback
                        style={styles.address}
                        onPress={() => this._handleShowGeoSuggest('pickup')}
                    >
                        <View style={[
                            styles.addressBox,
                            this.props.address.selected_address_type == 'pickup' ? styles.selectedAddressBox : {}
                        ]}>
                            <View style={[styles.addressIcon, { backgroundColor: 'green' }]} />
                            <Text
                                numberOfLines={1}
                                style={styles.addressText}
                            >
                                {this.props.address.pickup.address}
                            </Text>
                        </View>
                    </TouchableWithoutFeedback>

                    <View style={{ marginTop: '5%' }}>
                        <TouchableWithoutFeedback
                            style={styles.address}
                            onPress={() => this._handleShowGeoSuggest('drop')}
                        >
                            <View style={[
                                styles.addressBox,
                                this.props.address.selected_address_type == 'drop' ? styles.selectedAddressBox : {}
                            ]}>
                                <View style={[styles.addressIcon, { backgroundColor: 'red' }]} />
                                <Text
                                    numberOfLines={1}
                                    style={styles.addressText}
                                >
                                    {this.props.address.drop.address}
                                </Text>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </Animated.View>

                <Animated.View style={[
                    styles.myLocation, animatedStyle
                ]}>

                    <TouchableOpacity
                        onPress={this._handleSetUserCurrentLocation}
                    >
                        <Icon
                            size={22}
                            name='faLocationArrow'
                        />
                    </TouchableOpacity>
                </Animated.View>

                <Animated.View style={[
                    styles.mapButtons, animatedStyle
                ]}>

                    <TouchableOpacity
                        onPress={this._handleFormSubmit}
                        style={styles.searchBtn}
                    >
                        <Icon
                            name="faArrowRight"
                            color="white"
                            size={20}
                        />
                    </TouchableOpacity>
                </Animated.View>

            </React.Fragment>

        )
    }

}

const mapStateToProps = state => {
    return {
        address: {
            pickup: state.booking.pickup,
            drop: state.booking.drop,
            selected_address_type: state.booking.selected_address_type,
        }
    }
}

const mapDispatchToProps = dispatch => {
    return {
        saveBookingAddress: payload => dispatch(actions.saveBookingAddress(payload)),
        changeSelectedAddressType: payload => dispatch(actions.changeSelectedAddressType(payload)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Booking);