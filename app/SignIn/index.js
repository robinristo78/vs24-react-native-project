import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import styles from "./styles";
import AuthHeader from "@/components/AuthHeader";
import Input from "@/components/Input";
import Checkbox from "@/components/Checkbox";
import Button from "@/components/Button";
import Separator from "@/components/Separator";
import GoogleLogin from "@/components/GoogleLogin";

const SignUp = () => {
    const router = useRouter();
    const [checked, setChecked] = useState(false);

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <AuthHeader title="Sign In" onBackPress={() => router.push('./Splash')}/>
                <Input label="Email" placeholder="example@example.com" />
                <Input isPassword label="Password" placeholder="******" />
                <Button style={styles.button} title="Sign In" />
                <Separator text="Or sign in with" />
                <GoogleLogin />
            <Text style={styles.footer}>Don't have an account? <Pressable style={styles.footerLink} onPress={() => router.push('./SignUp')}>Sign Up</Pressable> </Text>
            </View>
        </SafeAreaView>
    )
}

export default SignUp;