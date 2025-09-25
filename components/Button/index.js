import React from "react";
import { Pressable, Text } from "react-native";
import styles from "./styles";

const Button = ({title}) => {
    return (
        <Pressable style={styles.container}>
            <Text>{title}</Text>
        </Pressable>
    );
}

export default Button;