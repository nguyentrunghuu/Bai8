import React, { useContext } from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { UserContext } from "./UserContext";

const Account = ({ navigation }) => {
    const { isLoggedIn, logout } = useContext(UserContext);

    if (!isLoggedIn) {
        navigation.replace("SignInScreen"); // Điều hướng khi chưa đăng nhập
        return null;
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Account</Text>
            <View style={styles.content}>
                <Image
                    source={{ uri: "https://imagedelivery.net/ZeGtsGSjuQe1P3UP_zk3fQ/ede24b65-497e-4940-ea90-06cc2757a200/storedata" }}
                    style={styles.avatar}
                />
                <Text style={styles.name}>NGUYEN TRUNG HUU</Text>
                <Text style={styles.job}>Mobile Developer</Text>
                <Text style={styles.exp}>
                    I have above years of experience in native mobile app development, now I am learning React Native.
                </Text>
                <View style={styles.buttonContainer}>
                    <Button title="Sign Out" onPress={logout} color="orange" />
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#e0e0e0",
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        paddingVertical: 16,
        paddingHorizontal: 16,
        backgroundColor: "#f1f1f1",
        width: "100%",
        marginBottom: 10,
    },
    content: {
        flex: 1,
        borderRadius: 10,
        padding: 20,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
    },
    name: {
        fontSize: 25,
        fontWeight: "600",
        marginBottom: 5,
        color: "black",
    },
    job: {
        fontSize: 16,
        color: "blue",
        marginBottom: 10,
    },
    exp: {
        fontSize: 14,
        textAlign: "center",
        color: "#444",
        marginBottom: 20,
    },
    buttonContainer: {
        width: "30%",
        borderRadius: 5,
        overflow: "hidden",
    },
});

export default Account;
