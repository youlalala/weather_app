import { StatusBar } from 'expo-status-bar';
import {Alert} from "react-native";
import React from "react";
import Loading from "./Loading";
import Weather from "./Weather";
import * as Location from 'expo-location';
import axios from 'axios';


const API_KEY = "1ef5313fa9a42693dfa5f86ce6ed3f5f";

export default class extends React.Component{

  state = {
    isLoading: true
  };

  //API로부터 날씨정보 얻기
  getWeatehr = async(latitude, longitude) => {
    const { 
      data: {
        main : {temp},
        weather
      } 
    } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );
    this.setState({
      isLoading: false, 
      condition: weather[0].main,
      temp
    });
  };


  //위치정보얻기
  getLocation = async() => {
    try{
      await Location.requestPermissionsAsync();
      const {
        coords: {latitude, longitude}
      } = await Location.getCurrentPositionAsync();
      // console.log(latitude, longitude);
      this.getWeatehr(latitude, longitude);
    }catch(error) {
      Alert.alert("Can't find you.", "So sad");
    }
  }

  //브라우저와 상호작용
  componentDidMount() {
    this.getLocation();
  }

  //render : 화면에 보고자 하는 내용 반환(Class Component에 반드시 정의)
  render() {
    const { isLoading, temp, condition } = this.state;
    return isLoading ? <Loading/> : <Weather temp={Math.round(temp)} condition={condition} />;
  }
}