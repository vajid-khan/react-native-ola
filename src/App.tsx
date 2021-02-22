import React from 'react';
import Navigation from './routes/navigation';
import { Provider } from 'react-redux';
import store from './store/store';

export default class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<Navigation />
			</Provider>
		);
	}
}