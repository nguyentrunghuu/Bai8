import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import PhoneNumberInput from "./LoginScreen";
import HomeScreen from "./HomeScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="PhoneNumberInput" component={PhoneNumberInput} options={{ title: "Đăng nhập" }} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: "Trang chủ" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;