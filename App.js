//react
import React from 'react';
//navigation
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './navigation/StackNavigator'
//components
import AlertPopup from './components/AlertPopup'
//redux
import { connect } from 'react-redux';

const App = (props) => {
	const showAlert = (color, msg) => {
		props.dispatch({
			type: 'ALERT_ON',
			payload: msg,
			color: color
		});
	}

	return(
		<NavigationContainer>
			<StackNavigator showAlert={showAlert} lang={props.lang}/>
			{props.alert.show ? <AlertPopup /> : null}
		</NavigationContainer>
	)
}

const mapStateToProps = (state) => {
	const { alert } = state
	return { alert }
};

export default connect(mapStateToProps)(App);