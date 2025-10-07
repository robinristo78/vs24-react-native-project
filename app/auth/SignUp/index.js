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
                <AuthHeader title="Sign Up" onBackPress={() => router.push('./Splash')}/>
                <Input label="Name" placeholder="John Doe" />
                <Input label="Email" placeholder="example@example.com" />
                <Input isPassword label="Password" placeholder="******" />
                <View style={styles.agreeRow}>
                    <Checkbox checked={checked} onCheck={setChecked} />
                    <Text style={styles.agreeText}>I agree with <Text style={styles.agreeTextBold}>Terms</Text> & <Text style={styles.agreeTextBold}>Privacy</Text></Text>
                </View>
                <Button style={styles.button} title="Sign Up" onPress={() => router.push('./SignIn')} />
                <Separator text="Or sign up with" />
                <GoogleLogin />
                <Text style={styles.footer}>Already have an account? <Pressable style={styles.footerLink} onPress={() => router.push('./SignIn')}>Sign In</Pressable> </Text>
            </View>
        </SafeAreaView>
    )
}

export default SignUp;