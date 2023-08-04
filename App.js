import React from 'react';
import { View, StyleSheet} from "react-native";
import CurrentWeather from './src/components/CurrentWeather';
import UpcomingWeather from './src/components/UpcomingWeather';


const App = () =>{
	console.log('This is from App..');

	return (
		<View style={styles.container}>
			{/* <CurrentWeather/> */}
			<UpcomingWeather/>
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