import React, { useState } from "react";
import { Text, View } from "react-native";
import Button from "./components/Button";
import Row from "./components/Row";
import styles from "./AppStyles";

export default function App() {
    const [calculate, setCalculate] = useState(0);
    const [result, setResult] = useState("");
    const operations = ["%", "*", "/", "+", "-"];

    const handleNumbersPress = (value) => {
        if (calculate == 0) {
            setCalculate(value);
            return;
        }
        setCalculate(calculate.toString().concat(value));
    };
    const handleOperationsPress = (value) => {
        if (value === "AC") {
            setCalculate("0");
            setResult("");
            return;
        }
        if (value === "DEL") {
            setCalculate(
                calculate.toString().substring(0, calculate.length - 1)
            );
            return;
        }
        if (operations.includes(calculate.toString().split("").pop())) {
            return;
        }

        setCalculate(calculate + value);
    };
    const handleCalculation = () => {
        if (operations.includes(calculate.toString().split("").pop())) {
            setCalculate(
                calculate.toString().substring(0, calculate.length - 1)
            );
            return;
        }
        setResult(Math.round(eval(calculate) * 10000) / 10000);
    };

    return (
        <View style={styles.container}>
            <View style={styles.result}>
                <Text style={styles.resultText}>{result}</Text>
            </View>
            <View style={styles.calculation}>
                <Text style={styles.calculationText}>{calculate}</Text>
            </View>
            <View style={styles.buttons}>
                <View style={styles.numbers}>
                    <Row>
                        <Button
                            value="AC"
                            theme="secondary"
                            onPress={() => handleOperationsPress("AC")}
                        ></Button>
                        <Button
                            value="DEL"
                            theme="secondary"
                            onPress={() => handleOperationsPress("DEL")}
                        ></Button>
                        <Button
                            value="%"
                            theme="secondary"
                            onPress={() => handleOperationsPress("%")}
                        ></Button>
                        <Button
                            value="*"
                            theme="accent"
                            onPress={() => handleOperationsPress("*")}
                        ></Button>
                    </Row>
                    <Row>
                        <Button
                            value="1"
                            onPress={() => handleNumbersPress(1)}
                        ></Button>
                        <Button
                            value="2"
                            onPress={() => handleNumbersPress(2)}
                        ></Button>
                        <Button
                            value="3"
                            onPress={() => handleNumbersPress(3)}
                        ></Button>
                        <Button
                            value="/"
                            theme="accent"
                            onPress={() => handleOperationsPress("/")}
                        ></Button>
                    </Row>
                    <Row>
                        <Button
                            value="4"
                            onPress={() => handleNumbersPress(4)}
                        ></Button>
                        <Button
                            value="5"
                            onPress={() => handleNumbersPress(5)}
                        ></Button>
                        <Button
                            value="6"
                            onPress={() => handleNumbersPress(6)}
                        ></Button>
                        <Button
                            value="+"
                            theme="accent"
                            onPress={() => handleOperationsPress("+")}
                        ></Button>
                    </Row>
                    <Row>
                        <Button
                            value="7"
                            onPress={() => handleNumbersPress(7)}
                        ></Button>
                        <Button
                            value="8"
                            onPress={() => handleNumbersPress(8)}
                        ></Button>
                        <Button
                            value="9"
                            onPress={() => handleNumbersPress(9)}
                        ></Button>
                        <Button
                            value="-"
                            theme="accent"
                            onPress={() => handleOperationsPress("-")}
                        ></Button>
                    </Row>
                    <Row>
                        <Button
                            value="0"
                            size="double"
                            onPress={() => handleNumbersPress(0)}
                        ></Button>
                        <Button
                            value="."
                            onPress={() => handleOperationsPress(".")}
                        ></Button>
                        <Button
                            value="="
                            theme="accent"
                            onPress={() => handleCalculation()}
                        ></Button>
                    </Row>
                </View>
            </View>
        </View>
    );
}
