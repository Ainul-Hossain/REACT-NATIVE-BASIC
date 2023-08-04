import React from 'react';
import { SafeAreaView, StyleSheet, Text, FlatList, View, StatusBar, ImageBackground} from 'react-native';
import {Feather} from '@expo/vector-icons';

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

const Item = (props)=>{
  const {dt_txt, min, max, condition} = props;

  return (
    <View style={styles.item}>
      <Feather name={'sun'} size={50} color={'white'}/>
      <Text style={styles.date}>{dt_txt}</Text>
      <Text style={styles.temp}>{min}</Text>
      <Text style={styles.temp}>{max}</Text>
    </View>
  )
}

const UpcomingWeather = () => {
  const renderItem = ({item})=>{
    return <Item  condition={item.weather[0].main} dt_txt={item.dt_txt} min={item.main.temp_min} max={item.main.temp_max}/>
  }
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={require("../../assets/upcoming-weather.jpg")} style={styles.image} >
        <Text>Upcoming Weather</Text>
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

  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 2,
    backgroundColor: 'pink'
  }, 

  temp:{
    color: 'white',
    fontSize: 20
  }, 

  date: {
    color: 'white',
    fontSize: 15
  }, 

  image:{
    flex: 1
  }
})

export default UpcomingWeather;
