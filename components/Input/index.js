import React, { useState } from "react";
import { TextInput, View, Text, Pressable, Image } from "react-native";
import styles from "./styles";
import colors from "@/utils/colors";

const Input = ({label, placeholder, isPassword}) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const onEyePress = () => {
        setIsPasswordVisible(!isPasswordVisible);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.inputContainer}>
                <TextInput secureTextEntry={isPassword && !isPasswordVisible} placeholder={placeholder} placeholderTextColor={colors.silver} style={styles.input} />
                {
                    isPassword ? (
                        <Pressable onPress={onEyePress}>
                            <Image style={styles.eye} source={isPasswordVisible ? require('../../assets/images/eye.png') : require('../../assets/images/noEye.png')} />
                        </Pressable>
                    ) : null
                }
                
            </View>
        </View>
    );
}


export default Input;