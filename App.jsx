import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/components/HomeScreen';
import SettingsScreen from './src/components/SettingsScreen';
import { CustomHomeIcon, CustomProfileIcon, CustomSearchIcon, CustomRatingIcon, CustomCategoryIcon } from './src/components/CustomIcons';
import Search from './src/components/Search';
import Rating from './src/components/Rating';
import Category from './src/components/Category';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconComponent;

            if (route.name === 'Home') {
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
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Rating" component={Rating} />
        <Tab.Screen name="Category" component={Category} />
        <Tab.Screen name="Profile" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;