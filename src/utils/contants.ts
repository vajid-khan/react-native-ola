import { Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window');


const LATITUDE_DELTA = 0.0922;
const ASPECT_RATIO = width / height;

export const MAP_ZOOM_LEVEL = {
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LATITUDE_DELTA * ASPECT_RATIO,
}