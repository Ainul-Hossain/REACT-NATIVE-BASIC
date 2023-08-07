import React from 'react';
import { SafeAreaView, StyleSheet, Text, FlatList, StatusBar, ImageBackground} from 'react-native';
import ListItem from '../components/ListItem';

const DATA = [
  {
    "dt_txt": "1",
    "main": {
      "temp_min": 296.34,
      "temp_max": 298.24
    },
    "weather": [
      {
        "main": "Clear"
      }
    ]
  },
  {
    "dt_txt": "2",
    "main": {
      "temp_min": 296.34,
      "temp_max": 298.24
    },
    "weather": [
      {
        "main": "Rain"
      }
    ]
  },
  {
    "dt_txt": "4",
    "main": {
      "temp_min": 296.2,
      "temp_max": 296.31
    },
    "weather": [
      {
        "main": "Rain"
      }
    ]
  },
  {
    "dt_txt": "3",
    "main": {
      "temp_min": 292.84,
      "temp_max": 294.94
    },
    "weather": [
      {
        "main": "Clouds"
      }
    ]
  }
]

const UpcomingWeather = () => {
  const renderItem = ({item})=>{
    return <ListItem  condition={item.weather[0].main} dt_txt={item.dt_txt} min={item.main.temp_min} max={item.main.temp_max}/>
  }

  const { container, image } = styles;

  return (
    <SafeAreaView style={container}>
      <ImageBackground source={require("../../assets/upcoming-weather.jpg")} style={image} >
        <Text style= {{textAlign:'center'}}>Upcoming Weather</Text>
        <FlatList data={DATA} renderItem={renderItem} keyExtractor={(item)=>item.dt_txt}/>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0, 
    backgroundColor: 'orange'
  },  

  image:{
    flex: 1
  }
})

export default UpcomingWeather;
