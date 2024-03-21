import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./HomeScreen";
import LoginPage from "./LoginPage";
import ForgetPass from "./ForgetPass";

// Create a stack navigator
const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
        })}
        initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="ForgetPass" component={ForgetPass} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
