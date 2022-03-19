import { StyleSheet, Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
    },
    result: {
        flex: 1,
        marginTop: 40,
        paddingLeft: 20,
        paddingRight: 20,
        alignItems: "flex-end",
        justifyContent: "center",
    },
    resultText: {
        fontSize: screenWidth * 0.15,
        fontWeight: "bold",
        color: "white",
    },
    calculation: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
        alignItems: "flex-end",
        justifyContent: "center",
    },
    calculationText: {
        fontSize: screenWidth * 0.13,
        fontWeight: "bold",
        color: "white",
    },
});

export default styles;
