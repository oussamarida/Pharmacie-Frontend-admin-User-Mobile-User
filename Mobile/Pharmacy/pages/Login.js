import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import Icon from "react-native-vector-icons/Entypo";


export default function Homee({ navigation }) {
  
  const Go = () => {
    navigation.navigate("Pharmacy")
  }
  
  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ImageBackground style={styles.background} source={require("../assets/images/Test.png")} >
        <TouchableOpacity style={styles.button} onPress={Go}>
        <Icon name="chevron-right" style={styles.icon}></Icon>
        </TouchableOpacity>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor:'#A0F482',
    paddingBottom: "20%",
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    paddingTop: "170%",
  },
  button: {
    height: "55%",
    width: "30%",
    backgroundColor: "#107A3D",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    marginLeft:"34%",
    marginTop: 20,
  },
  icon: {
    color: "white",
    fontSize: 90,
    fontWeight:"bold",
  }
});
