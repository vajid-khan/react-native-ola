import { PermissionsAndroid } from 'react-native';

export const requestLocationPermission = async () => {
    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            return 'granted';
        } else {
            return 'denied';
        }
    } catch (err) {
        return 'error';
    }
}