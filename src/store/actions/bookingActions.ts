import * as actionTypes from '../actionTypes';

export const saveBookingAddress = payload => {    
    return {
        address: payload.address,
        coordinate: payload.coordinate,
        type: actionTypes.SAVE_BOOKING_ADDRESS,
    }
}

export const changeSelectedAddressType = payload => {
    return {
        type: actionTypes.CHANGE_SELECTED_ADDRESS_TYPE,
        selected_address_type: payload.selected_address_type
    }
}