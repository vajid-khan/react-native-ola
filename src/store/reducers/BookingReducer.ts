
import * as actionTypes from '../actionTypes';

const initialState = {
	type: 'One Way',
	date: '',
	pickup: {
		address: 'Pick me up from',
		coordinate: {

		}
	},
	drop: {
		address: 'Drop me at',
		coordinate: {

		}
	},
	selected_address_type: 'pickup',
	user: {

	}
}

const booking = (state = initialState, action) => {

	let newState = { ...state };

	switch (action.type) {


		case actionTypes.SAVE_BOOKING_ADDRESS:

			let newAddress = state.selected_address_type == 'pickup' ? { ...state.pickup } : { ...state.drop };

			newAddress.address = action.address;
			newAddress.coordinate = { ...action.coordinate };
			newState[state.selected_address_type] = newAddress;
			return newState;

		case actionTypes.CHANGE_SELECTED_ADDRESS_TYPE:
			newState.selected_address_type = action.selected_address_type;
			return newState;

		default:
			return newState;

	}

}

export default booking;