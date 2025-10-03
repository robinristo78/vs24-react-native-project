import React from "react";
import { Text, View, Image, Pressable } from "react-native";
import { useRouter } from "expo-router";

import styles from "./styles";
import Button from "../../components/Button";

const Splash = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
        <Image resizeMode="contain" style={styles.image} source={require('../../assets/images/100501.png')} />

        <View style={styles.titleContainer}>
          <Text style={styles.title}>You'll Find</Text>
          <Text style={[styles.title, styles.innerTitle]}>All you need</Text> 
          <Text style={styles.title}>Here!</Text>
        </View>
        
        <Button title="Sign Up" onPress={() => router.push('./SignUp')}/>

        <Pressable>
          <Text style={styles.footerText}>Sign In</Text>
        </Pressable>

        {/* <Button title="Sign In" /> */}
    </View>
  );
}

export default Splash;
