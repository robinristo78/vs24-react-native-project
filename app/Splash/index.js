import React from "react";
import { Text, View, Image, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import styles from "./styles";
import Button from "@/components/Button";

export const screenOptions = {
  headerShown: false, // hides the top header
};

const Splash = () => {
  const router = useRouter();

  return (
    <SafeAreaView>
      <View style={styles.container}>
          <Image resizeMode="contain" style={styles.image} source={require('../../assets/images/100501.png')} />

          <View style={styles.titleContainer}>
            <Text style={styles.title}>You'll Find</Text>
            <Text style={[styles.title, styles.innerTitle]}>All you need</Text> 
            <Text style={styles.title}>Here!</Text>
          </View>
          
          <Button title="Sign Up" onPress={() => router.push('./SignUp')}/>

          <Pressable onPress={() => router.push('./SignIn')}>
            <Text style={styles.footerText}>Sign In</Text>
          </Pressable>

          {/* <Button title="Sign In" /> */}
      </View>
    </SafeAreaView>
  );
}

export default Splash;
