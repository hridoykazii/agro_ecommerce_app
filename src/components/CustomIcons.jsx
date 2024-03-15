import React from 'react';
import { Image } from 'react-native';

const CustomHomeIcon = ({ focused, size, color }) => {
  const iconColor = focused ? '#3A5242' : 'gray'; // Adjust color based on focus state
  return <Image source={require('../../assets/icons/Home.png')} style={{ width: size, height: size, tintColor: iconColor }} />;
};

const CustomProfileIcon = ({ focused, size, color }) => {
  const iconColor = focused ? '#3A5242' : 'gray'; // Adjust color based on focus state
  return <Image source={require('../../assets/icons/profile.png')} style={{ width: size, height: size, tintColor: iconColor }} />;
};
const CustomSearchIcon = ({ focused, size, color }) => {
  const iconColor = focused ? '#3A5242' : 'gray'; // Adjust color based on focus state
  return <Image source={require('../../assets/icons/Scarch.png')} style={{ width: size, height: size, tintColor: iconColor }} />;
};
const CustomRatingIcon = ({ focused, size, color }) => {
  const iconColor = focused ? '#3A5242' : 'gray'; // Adjust color based on focus state
  return <Image source={require('../../assets/icons/top-Rated.png')} style={{ width: size, height: size, tintColor: iconColor }} />;
};
const CustomCategoryIcon = ({ focused, size, color }) => {
  const iconColor = focused ? '#3A5242' : 'gray'; // Adjust color based on focus state
  return <Image source={require('../../assets/icons/Catagory.png')} style={{ width: size, height: size, tintColor: iconColor }} />;
};

export { CustomHomeIcon, CustomProfileIcon, CustomSearchIcon, CustomRatingIcon, CustomCategoryIcon };
