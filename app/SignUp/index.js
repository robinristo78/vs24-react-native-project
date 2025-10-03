import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";
import AuthHeader from "../../components/AuthHeader";
import Input from "../../components/Input";

const SignUp = () => {
    return (
        <View style={styles.container}>
            <AuthHeader title="Sign Up"/>
            <Input label="Name" placeholder="John Doe" />
            <Input label="Email" placeholder="example@example.com" />
            <Input isPassword label="Password" placeholder="******" />
        </View>
    )
}

export default SignUp;