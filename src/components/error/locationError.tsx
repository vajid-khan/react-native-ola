import React, {
    useState
} from 'react';

import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import Icon from '../../ui/icon/Icon';
import SnackBar from '../../ui/snack/snackbar';
import RNAndroidLocationEnabler from 'react-native-android-location-enabler';

export default locatonError = props => {

    const [error, setError] = useState(false);

    const promptLocationChange = () => {
        RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({ interval: 10000, fastInterval: 5000 })
            .then(data => {
                setError(false);
                props.navigation.navigate('Map');
                // The user has accepted to enable the location services
                // data can be :
                //  - "already-enabled" if the location services has been already enabled
                //  - "enabled" if user has clicked on OK button in the popup
            }).catch(err => {
                // The user has not accepted to enable the location services or something went wrong during the process
                // "err" : { "code" : "ERR00|ERR01|ERR02", "message" : "message"}
                // codes : 
                //  - ERR00 : The user has clicked on Cancel button in the popup
                //  - ERR01 : If the Settings change are unavailable
                //  - ERR02 : If the popup has failed to open
                setError(true);
            });
    }

    return (
        <View style={styles.container}>
            {
                error &&
                <SnackBar
                    timeOut={3000}
                    message="Location permission is required"
                    timeOutCallBack={() => setError(false)}
                />
            }
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={require('../../assets/images/location-error.png')}
                />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={promptLocationChange}
                    style={styles.button}
                >
                    <Icon
                        color='white'
                        name="faArrowRight"
                        style={styles.icon}
                    />
                    <Text style={styles.buttonText}>
                        Turn on locaton
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    imageContainer: {
        flex: 9.6,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 200,
        height: 200,
    },
    buttonContainer: {
        flex: 0.4,
        margin: 15,
        padding: 15,
        borderRadius: 5,
        flexDirection: 'row',
        backgroundColor: 'green',
    },
    button: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    icon: {
        fontSize: 25,
        color: 'white',
        alignSelf: 'center'
    },
    buttonText: {
        alignSelf: 'center',
        marginLeft: 10,
        fontSize: 25,
        color: 'white'
    }
});