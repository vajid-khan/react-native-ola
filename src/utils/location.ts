import axios from 'axios';
import { GOOGLE_API_KEY } from '../env';

export const getAddressFromCoordinate = ({ latitude, longitude})=> {

    const res = axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&sensor=true&key=${GOOGLE_API_KEY}`)
        .then(res => res.data)
        .then(data => {
            const address = data.results[0];
            return {
                status: 'success',
                address: address.formatted_address
            }
        })
        .catch(error => {
            return {
                status:'error'
            }
        });
    return res;
}

export const getCoordinateFromPlaceID = placeid => {
    return axios.get(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeid}&key=${GOOGLE_API_KEY}`)
        .then(res => res.data)
        .then(data => {
            console.log(data);
            return {
                status: 'success',
                address: data.result.formatted_address,
                coordinate: {
                    latitude: data.result.geometry.location.lat,
                    longitude: data.result.geometry.location.lng,
                }
            }
        })
        .catch( error => {
            return {
                status: 'error'
            }
        })
}
