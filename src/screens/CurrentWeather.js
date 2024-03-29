import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import RowText from '../components/RowText';

const CurrentWeather = () => {
	console.log('This is from CurrentWeather component...');
	const { wrapper, container, temp, feels, highLowWrapper, highLow, bodyWrapper, description, message} = styles;
	return (
		<SafeAreaView style={wrapper}>
			<View style={container}>
				<Feather name="sun" size={100} color="black" />
				<Text style={temp}>6</Text>
				<Text style={feels}>Feels like 5</Text>

				<RowText messageOne={'High: 8'} messageTwo={'Low: 6'} containerStyles={highLowWrapper} messageOneStyles={highLow} messageTwoStyles={highLow} />
			</View>

			<RowText messageOne= {`It's sunny`} messageTwo={`It's perfect t-shirt weather...`} messageOneStyles={description} messageTwoStyles={message} containerStyles={bodyWrapper} />
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	wrapper: {
		backgroundColor: 'pink',
		flex: 1,
		// backgroundColor: 'red'
	},

	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
		// flexDirection: 'row'
	},

	temp: {
		color: 'black',
		fontSize: 48
	},

	feels: {
		color: 'black',
		fontSize: 48
	},

	highLow: {
		color: 'black',
		fontSize: 20,
		marginLeft: 6
	},

	highLowWrapper: {
		flexDirection: 'row'
	},

	bodyWrapper: {
		justifyContent: 'flex-end',
		alignItems: 'flex-start',
		paddingLeft: 25,
		marginBottom: 40
	},

	description: {
		fontSize: 48
	},

	message: {
		fontSize: 30
	}
})

export default CurrentWeather;