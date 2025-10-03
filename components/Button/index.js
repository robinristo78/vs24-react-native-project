import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "./styles";

const Button = ({title, onPress}) => {


    return (
        <TouchableOpacity activeOpacity={0.75} onPress={onPress} style={styles.container}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    );
}

export default Button;