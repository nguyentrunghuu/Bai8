import React, { useState } from 'react';
// import LoginScreen from './AppReActNative/LoginScreen'; 
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { UserProvider } from './btngay3-4/UserContext';
import RootRouter from './router';

const Stack = createStackNavigator();

const App = () => {
  // return <LoginScreen />;
  // return <Bai2 />;
  // return <NotificationList />;
  // return <BtBuoi5 />
  // return <ValidateForm />
  // return (
  //   <NavigationContainer>
  //     <Stack.Navigator screenOptions={{ headerShown: false }}>
  //       <Stack.Screen name="login" component={ValidateForm}></Stack.Screen>
  //       <Stack.Screen name="home" component={home}></Stack.Screen>
  //     </Stack.Navigator>
  //   </NavigationContainer>
  // )




  return (
    <UserProvider>
      <RootRouter />
    </UserProvider>
  );
};

export default App;