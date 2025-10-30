import React from "react";
import { Text, View, Image, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Navbar from "@/components/NavBar";

// import styles from "./styles";

const Home = () => {
    return (
        <SafeAreaView>
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    {/* main content */}
                </View>
                <Navbar />
            </View>
        </SafeAreaView>
    );
}

export default Home;