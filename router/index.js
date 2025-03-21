
import React, { useState, useEffect, useCallback, useContext } from "react";

import { Ionicons } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage";

import AuthScreen from "../btngay3-4/AuthScreen";
import SignUp from "../btngay3-4/SignUp";
import ForgotPassword from "../btngay3-4/ForgotPassword";

import Explorer from "../btngay3-4/Explorer";
import Account from "../btngay3-4/Account";

import FoodDetail from "../btngay3-4/FoodDetail";
import EditProfile from "../btngay3-4/EditProfile";


import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { UserContext } from "../btngay3-4/UserContext";
import { NavigationContainer } from "@react-navigation/native";

const AuthStack = createStackNavigator();
const AuthStackNavigator = () => {
    return (
        <AuthStack.Navigator initialRouteName="AuthScreen" screenOptions={{ headerShown: false }}>
            <AuthStack.Screen name="AuthScreen" component={AuthScreen} />
            <AuthStack.Screen name="SignUp" component={SignUp} />
            <AuthStack.Screen name="ForgotPassword" component={ForgotPassword} />
        </AuthStack.Navigator>
    )
};

const MainTab = createBottomTabNavigator();
const MainTabNavigator = () => {
    return (
        <MainTab.Navigator initialRouteName="Explorer"

            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === "Explorer") {
                        iconName = focused ? "compass" : "compass-outline";
                    } else if (route.name === "Account") {
                        iconName = focused ? "person" : "person-outline";
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: "orange",
                tabBarInactiveTintColor: "gray",
            })}
        >
            <MainTab.Screen name="Explorer" component={Explorer} />
            <MainTab.Screen name="Account" component={Account} />
        </MainTab.Navigator>
    )
}

const MainStack = createStackNavigator();
const MainStackNavigator = () => {
    return (
        <MainStack.Navigator screenOptions={{ headerShown: false }}>
            <MainStack.Screen name="MainTabNavigator" component={MainTabNavigator} />
            <MainStack.Screen name="FoodDetail" component={FoodDetail} />
            <MainStack.Screen name="EditProfile" component={EditProfile} />
        </MainStack.Navigator>
    )
}

const LOGIN_KEY = "user_logged_in";

export default function RootRouter() {
    const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);
    const [restoring, setIsRestoring] = useState(true);

    const getLoggedInStatus = useCallback(async () => {
        try {
            const loggedInState = await AsyncStorage.getItem(LOGIN_KEY);
            console.log("🔹 Trạng thái lưu trong AsyncStorage:", loggedInState);
            setIsLoggedIn(loggedInState ? JSON.parse(loggedInState) : false);
        } catch (e) {
            console.error("Lỗi lấy trạng thái đăng nhập", e);
        } finally {
            setIsRestoring(false);
        }
    }, [setIsLoggedIn]);

    const cacheLoggedInStatus = useCallback(async (loggedInState) => {
        try {
            await AsyncStorage.setItem(LOGIN_KEY, JSON.stringify(loggedInState));
        } catch (e) {
            console.error("Lỗi lưu trạng thái đăng nhập", e);
        }
    }, []);
    useEffect(() => {
        getLoggedInStatus();
    }, [getLoggedInStatus]);

    useEffect(() => {
        if (isLoggedIn !== null) {
            cacheLoggedInStatus(isLoggedIn);
        }
    }, [isLoggedIn, cacheLoggedInStatus]);

    return (
        <NavigationContainer>
            {restoring ? null : isLoggedIn ? <MainStackNavigator /> : <AuthStackNavigator />}
        </NavigationContainer>
    )
}

