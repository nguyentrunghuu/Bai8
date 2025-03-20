import React from "react";
import { View, Text, StyleSheet } from "react-native";

const HomeScreen = ({ route }) => {
  const { phone } = route.params || {}; // Nhận số điện thoại từ navigation

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chào mừng!</Text>
      <Text style={styles.subtitle}>Số điện thoại của bạn:</Text>
      <Text style={styles.phone}>{phone || "Không có số điện thoại"}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: "#666",
  },
  phone: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#007BFF",
    marginTop: 10,
  },
});

export default HomeScreen;