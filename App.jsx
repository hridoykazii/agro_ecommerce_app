import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from './src/components/HomeScreen';
import SettingsScreen from './src/components/SettingsScreen';
import { CustomHomeIcon, CustomProfileIcon, CustomSearchIcon, CustomRatingIcon, CustomCategoryIcon } from './src/components/CustomIcons';
import Search from './src/components/Search';
import Rating from './src/components/Rating';
import Category from './src/components/Category';
import LoginPage from './src/components/LoginPage';
import ForgetPass from './src/components/ForgetPass';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconComponent;

          if (route.name === 'HomeTab') {
            iconComponent = <CustomHomeIcon focused={focused} size={size} color={color} />;
          } else if (route.name === 'Profile') {
            iconComponent = <CustomProfileIcon focused={focused} size={size} color={color} />;
          } else if (route.name === 'Search') {
            iconComponent = <CustomSearchIcon focused={focused} size={size} color={color} />;
          } else if (route.name === 'Rating') {
            iconComponent = <CustomRatingIcon focused={focused} size={size} color={color} />;
          } else if (route.name === 'Category') {
            iconComponent = <CustomCategoryIcon focused={focused} size={size} color={color} />;
          }

          return iconComponent;
        },
      })}
    >
      <Tab.Screen name="HomeTab" component={HomeScreen} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Rating" component={Rating} />
      <Tab.Screen name="Category" component={Category} />
      <Tab.Screen name="Profile" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
        })}
        initialRouteName="HomeStack"
      >
        <Stack.Screen name="HomeStack" component={TabNavigator} />
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="ForgetPass" component={ForgetPass} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
