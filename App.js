import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './src/components/Tabs';

const App = () => {
	console.log('This is from App..');

	return (
		<NavigationContainer>
			<Tabs/>
		</NavigationContainer>
	)
}


export default App;