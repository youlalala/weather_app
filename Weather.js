import React from "react";
import {View, Text, StyleSheet, StatusBar} from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Haze: {
        iconName:"weather-hail",
        gradient: ["#bdc3c7", "#2c3e50"],
        title: "Haze",
        subtitle: "Just don't go outside."
        
    },
    Thunderstorm: {
        iconName: "weather-lightning",
        gradient: ["#1d4350", "#a43931"],
        title: "Thunderstorm",
        subtitle: "Don't be surprised."
    }, 
    Drizzle: {
        iconName: "weather-rainy",
        gradient: ["#abbaab", "#ffffff"],
        title: "Drizzl",
        subtitle: "Take an umbrella."
    }, 
    Rain: {
        iconName: "weather-pouring",
        gradient: ["#4b79a1","#283e51"],
        title: "Rain",
        subtitle: "The sky is crying.."
    }, 
    Snow: {
        iconName: "weather-snowy-heavy",
        gradient: ["#b993d6","#8ca6db"],
        title: "Snow",
        subtitle: "Do you want to build a snowman~?"
    }, 
    Atmosphere: {
        iconName: "weather-hail",
        gradient: ["#bdc3c7", "#2c3e50"],
        title: "Atmosphere",
        subtitle: ""
    }, 
    Clear: {
        iconName: "weather-sunny",
        gradient: ["#83a4d4","#b6fbff"],
        title: "SUNNY",
        subtitle: "Go to outside!!!"
    }, 
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#606c88", "#3f4c6b"],
        title: "Clouds",
        subtitle: "you can't see the sun."
    }, 
    Mist: {
        iconName: "weather-hail",
        gradient: ["#bdc3c7", "#2c3e50"],
        title: "Mist",
        subtitle: "My bangs...."
    }, 
    Dust: {
        iconName: "weather-hail",
        gradient: ["#2c3e50", "#bdc3c7"],
        title: "Dust",
        subtitle: "Take a mask!"
    }
};


export default function Weather({ temp, condition}){
    return (
    <LinearGradient
        colors={weatherOptions[condition].gradient}
        style={styles.container}
        >
        <StatusBar barStyle="light-content" />
        <View style={styles.halfContainer}>
            <MaterialCommunityIcons
                size={96} 
                name={weatherOptions[condition].iconName}
                color="white"
            />
            <Text style={styles.temp}>{temp}℃</Text>
        </View>
        <View style={ {...styles.halfContainer, ... styles.textContainer} }>
            <Text style={styles.title}>{weatherOptions[condition].title}</Text>
            <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
        </View>
    </LinearGradient>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm", "Drizzle", "Rain", "Snow", "Atmosphere", "Clear", "Clouds", "Haze", "Mist", "Dust"
    ]).isRequired
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp: {
        fontSize: 36,
        color: "white"
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        color: "white",
        fontSize: 35,
        fontWeight: "300",
        marginBottom: 8
    },
    subtitle: {
        fontSize: 18,
        fontWeight: "600",
        color: "white"
    },
    textContainer: {
        paddingHorizontal: 20,
    }
});