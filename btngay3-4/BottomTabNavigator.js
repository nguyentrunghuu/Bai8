// import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Ionicons } from 'react-native-vector-icons';
// import Explorer from './Explorer';
// import Account from './Account';

// const Tab = createBottomTabNavigator();

// const BottomTabNavigator = () => {
//     return (
//         <Tab.Navigator
//             screenOptions={({ route }) => ({
//                 headerShown: false,
//                 tabBarIcon: ({ focused, color, size }) => {
//                     let iconName;

//                     if (route.name === 'Explorer') {
//                         iconName = focused ? 'compass' : 'compass-outline';
//                     } else if (route.name === 'Account') {
//                         iconName = focused ? 'person' : 'person-outline';
//                     }

//                     return <Ionicons name={iconName} size={size} color={color} />;
//                 },
//                 tabBarActiveTintColor: 'orange',
//                 tabBarInactiveTintColor: 'gray',
//             })}
//         >
//             <Tab.Screen name="Explorer" component={Explorer} />
//             <Tab.Screen name="Account" component={Account} />
//         </Tab.Navigator>
//     );
// };

// export default BottomTabNavigator;
