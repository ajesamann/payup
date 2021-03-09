//react
import React from 'react';
//navigation
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './navigation/StackNavigator'
//components
import NotificationPopup from './components/NotificationPopup'
//redux
import { connect } from 'react-redux';

const App = (props) => {
	return(
		<NavigationContainer>
			<StackNavigator lang={props.lang}/>
			{props.alert.show ? <NotificationPopup /> : null}
		</NavigationContainer>
	)
}

const mapStateToProps = (state) => {
	const { alert } = state
	return { alert }
};

export default connect(mapStateToProps)(App);