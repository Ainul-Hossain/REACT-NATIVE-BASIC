import React from 'react';
import { View, StyleSheet} from "react-native";
import CurrentWeather from './src/screens/CurrentWeather';
import UpcomingWeather from './src/screens/UpcomingWeather';


const App = () =>{
	console.log('This is from App..');

	return (
		<View style={styles.container}>
			{/* <CurrentWeather/> */}
			<UpcomingWeather/>
			{/* <OurChild message="This is the test message!"/> */}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// flexDirection: 'row'
	}
})

export default App;