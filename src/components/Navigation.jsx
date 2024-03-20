import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import LoginPage from './LoginPage'; 

// Create a stack navigator
const Stack = createStackNavigator();

const Navigation = () => {
    return (
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="LoginPage" component={LoginPage} /> 
            </Stack.Navigator>
        // <NavigationContainer>
        // </NavigationContainer>
    );
};

export default Navigation;
