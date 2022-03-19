import React from "react";
import { TouchableOpacity, StyleSheet, Text, Dimensions } from "react-native";

const buttonWidth = Dimensions.get("window").width / 4;

const Button = ({ onPress, value, theme }) => {
    const buttonStyles = [styles.button];
    const textStyles = [styles.buttonText];

    if (theme === "secondary") {
        buttonStyles.push(styles.secondaryTheme);
        textStyles.push(styles.buttonTextSecondary);
    } else if (theme === "accent") {
        buttonStyles.push(styles.accentTheme);
    }
    return (
        <TouchableOpacity onPress={onPress} style={buttonStyles}>
            <Text style={textStyles}>{value}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonText: {
        color: "white",
        fontSize: 25,
    },
    buttonTextSecondary: {
        color: "#060606",
    },
    button: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#333333",
        height: Math.floor(buttonWidth - 10),
        borderRadius: Math.floor(buttonWidth),
        margin: 5,
    },
    secondaryTheme: {
        backgroundColor: "#a6a6a6",
    },
    accentTheme: {
        backgroundColor: "#f09a36",
    },
});

export default Button;
