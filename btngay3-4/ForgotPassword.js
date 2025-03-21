import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const ForgotPassword = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>ForgotPassword</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
                <Text style={styles.buttonText}>Back</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", alignItems: "center" },
    title: { fontSize: 24, fontWeight: "bold" },
    button: { marginTop: 20, backgroundColor: "red", padding: 15, borderRadius: 8 },
    buttonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});

export default ForgotPassword;