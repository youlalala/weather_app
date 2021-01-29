import React from "react";
import { StyleSheet, Text, View, StatusBar } from 'react-native';

export default function Loading(){
    return (
    <View style={styles.container}>
        <StatusBar barStyle="dark-content"/>
        <Text style={styles.Load}>Loading ... </Text>
        <Text style={styles.text}>Welcome ulala weather info</Text>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        paddingHorizontal: 30,
        paddingVertical: 100,
        backgroundColor: "#302b63"
    },

    Load: {
        color: "#fcf9a7",
        fontSize: 40
    },

    text: {
        color: "#fcf9a7",
        fontSize: 15
        
    }

});