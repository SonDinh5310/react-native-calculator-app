import { StyleSheet } from "react-native";

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
        fontSize: 60,
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
        fontSize: 50,
        fontWeight: "bold",
        color: "white",
    },
});

export default styles;
