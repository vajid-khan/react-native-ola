import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from 'redux';

//reducers
import authReducer from './reducers/authReducer'
import bookingReducer from './reducers/BookingReducer';

const rootReducers = combineReducers({
    auth: authReducer,
    booking: bookingReducer,
}
)

const Store = createStore(rootReducers,
);


export default Store;