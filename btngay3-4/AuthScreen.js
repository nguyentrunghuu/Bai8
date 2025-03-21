
import React, { useState, useEffect, useContext } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { UserContext } from "./UserContext";

const InputField = ({ label, placeholder, value, onChangeText, secureTextEntry = false }) => (
  <View style={styles.inputField}>
    <Text style={styles.label}>{label}</Text>
    <TextInput style={styles.input} placeholder={placeholder} value={value} onChangeText={onChangeText} secureTextEntry={secureTextEntry} />
  </View>
);

const SocialLoginButtons = () => (
  <View>
    <Text style={styles.orText}>Or sign in with</Text>
    <View style={styles.socialContainer}>
      <TouchableOpacity style={[styles.socialButton, styles.googleButton]} onPress={() => console.log("Google Sign In")}>
        <FontAwesome name="google" size={24} color="white" />
        <Text style={styles.socialText}>Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.socialButton, styles.facebookButton]} onPress={() => console.log("Facebook Sign In")}>
        <FontAwesome name="facebook" size={24} color="white" />
        <Text style={styles.socialText}>Facebook</Text>
      </TouchableOpacity>
    </View>

  </View>
);

const AuthScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);


  useEffect(() => {
    setIsDisabled(email.length < 3 || password.length < 3);
  }, [email, password]);

  const { login } = useContext(UserContext);

  const handleAuth = () => {
    login();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign in</Text>
      <InputField label="Email ID" placeholder="Enter your email here!" value={email} onChangeText={setEmail} />
      <InputField label="Password" placeholder="Enter your password here!" value={password} onChangeText={setPassword} />
      <TouchableOpacity style={styles.forgotPasswordSection} onPress={() => navigation.navigate("ForgotPassword")}>
        <Text style={styles.forgotPassword}>Forgot password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, isDisabled && styles.buttonDisabled]} onPress={handleAuth} disabled={isDisabled}>
        <Text style={styles.buttonText}>Sign in</Text>
      </TouchableOpacity>
      <SocialLoginButtons />
      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Not yet a member?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <Text style={styles.signupLink}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  label: { fontSize: 18, alignSelf: "flex-start", marginBottom: 15, fontWeight: 500 },
  forgotPasswordSection: { alignSelf: "flex-end" },
  forgotPassword: { fontSize: 14, fontWeight: "bold", alignSelf: "flex-end", color: "orange", marginBottom: 10 },
  inputField: { width: "100%" },
  input: { width: "100%", height: 50, borderWidth: 1, borderColor: "gray", borderRadius: 10, paddingHorizontal: 15, marginBottom: 10 },
  button: { backgroundColor: "orange", padding: 15, borderRadius: 10, width: "100%", alignItems: "center" },
  buttonDisabled: { backgroundColor: "gray" },
  orText: { fontSize: 15, fontWeight: "bold", marginTop: 20, alignSelf: "center" },
  socialContainer: { flexDirection: "row", marginTop: 20 },
  socialButton: { flexDirection: "row", alignItems: "center", justifyContent: "center", padding: 15, borderRadius: 5, marginHorizontal: 10, width: "45%" },
  googleButton: { backgroundColor: "#DB4437" },
  facebookButton: { backgroundColor: "#4267B2" },
  buttonText: { color: "white", fontSize: 16, fontWeight: "bold" },
  socialText: { color: "white", fontSize: 16, fontWeight: "bold", marginLeft: 10 },
  link: { marginLeft: 5, color: "blue", fontWeight: "bold" },
  switchAuthButton: { marginTop: 20 },
  switchAuthContainer: { flexDirection: "row", alignItems: "center" },
  switchAuthText: { fontSize: 16, color: "gray" },
  signupContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  signupText: {
    fontSize: 16,
    color: "gray",
    marginRight: 5,
  },
  signupLink: {
    fontSize: 16,
    fontWeight: "bold",
    color: "orange",
  },

});

export default AuthScreen;
