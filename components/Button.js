import React from "react";
import { TouchableOpacity, StyleSheet, Text, Dimensions } from "react-native";

const buttonWidth = Dimensions.get("window").width / 4;

const Button = ({ onPress, value, size, theme }) => {
    const buttonStyles = [styles.button];
    const textStyles = [styles.buttonText];

    if (size === "double") {
        buttonStyles.push(styles.double);
    }
    if (theme === "secondary") {
        buttonStyles.push(styles.secondaryTheme);
        textStyles.push(styles.buttonTextSecondary);
    }
    if (theme === "accent") {
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
        fontWeight: "bold",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#333333",
        height: Math.floor(buttonWidth - 10),
        borderRadius: Math.floor(buttonWidth),
        margin: 5,
    },
    double: {
        flex: 0,
        alignItems: "flex-start",
        width: Dimensions.get("window").width / 2 - 10,
        paddingLeft: 40,
    },
    secondaryTheme: {
        backgroundColor: "#a6a6a6",
    },
    accentTheme: {
        backgroundColor: "#f09a36",
    },
});

export default Button;
