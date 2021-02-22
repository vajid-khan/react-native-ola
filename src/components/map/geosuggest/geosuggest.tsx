import React, {
    useState
} from 'react';

import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ActivityIndicator,
} from 'react-native';

import { connect } from 'react-redux';
import Icon from '../../../ui/icon/Icon';
import { GOOGLE_API_KEY } from '../../../env';
import TopBar from '../../../ui/topbar/TopBar';
import * as actions from '../../../store/actions/index';
import { getCoordinateFromPlaceID } from '../../../utils/location';
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const geosuggest = props => {

    const [isLoading, setLoading] = useState(false);

    _handleAddressSelected = address => {
        setLoading(true);
        getCoordinateFromPlaceID(address.item.place_id)
            .then(response => {
                if (response.status == 'success') {
                    props.saveAddress({ address: response.address, coordinate: response.coordinate });
                    props.navigation.state.params.setMapRegion(response.coordinate);
                }
            })
            .then(() => {
                setLoading(false);
                props.navigation.navigate('Map');
            });
    }

    return (
        <View style={styles.container}>

            <TopBar
                renderRightButton
                rightButton={isLoading ? <ActivityIndicator /> : null}
            />

            <GooglePlacesAutocomplete
                debounce={200}
                placeholder="Search Place"
                minLength={2}
                autoFocus={true}
                returnKeyType={"search"}
                keyboardAppearance={"light"}
                listViewDisplayed="auto"
                renderItem={row => <AddressItem address={row} addressSelected={_handleAddressSelected} />}
                getDefaultValue={() => ""}
                query={{
                    components: "country:IN",
                    key: GOOGLE_API_KEY,
                    language: "en"
                    //   types: "(cities)" // default: 'geocode'
                }}
                styles={{
                    textInputContainer: styles.addressBox,
                    textInput: styles.addressField,
                }}
            />
        </View>
    );
}

const AddressItem = ({ address, addressSelected }) => {
    return (
        <TouchableOpacity style={styles.addressItemContainer}
            onPress={() => { addressSelected(address) }}
            key={address.item.place_id}
        >
            <View style={styles.addressItemIcon}>
                <Icon name="faLocationArrow" />
            </View>
            <View style={styles.addressTextContainer}>
                <Text style={styles.addressTitle}
                    numberOfLines={1}
                >
                    {address.item.structured_formatting.main_text}
                </Text>
                <Text style={styles.addressText}
                    numberOfLines={1}
                >
                    {address.item.description}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    addressBox: {
        height: 85,
        borderTopWidth: 0,
        borderBottomWidth: 0,
        paddingVertical: 10,
        backgroundColor: '#fff',
    },
    addressField: {
        height: 50,
        fontSize: 20,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#000',
    },
    addressItemContainer: {
        flex: 1,
        padding: 10,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#d3d3d3',
    },
    addressItemIcon: {
        flex: 1,
        justifyContent: "center"
    },
    addressTextContainer: {
        flex: 9
    },
    addressTitle: {
        fontSize: 18,
    },
    addressText: {

    }
})

const mapDispatchToProps = dispatch => {
    return {
        saveAddress: payload => dispatch(actions.saveBookingAddress(payload))
    }
}

export default connect(null, mapDispatchToProps)(geosuggest);
