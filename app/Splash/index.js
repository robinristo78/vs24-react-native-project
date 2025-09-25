import React from "react";
import { Text, View, Image } from "react-native";
import styles from "./styles";
import Button from "../../components/Button";

const Splash = () => {
  return (
    <View style={styles.container}>
        <Image resizeMode="contain" style={styles.image} source={require('../../assets/images/100501.png')} />
        <Text style={styles.title}>You'll Find</Text>
        <Text style={[styles.title, styles.innerTitle]}>All you need</Text> 
        <Text style={styles.title}>Here!</Text>

        <Button title="Sign Up" />
    </View>
  );
}

export default Splash;
