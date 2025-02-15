import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const getTbIcons = (routeName, focused, color, size) => {
  let iconName;
  if (routeName === 'Home') {
    iconName = focused ? 'home' : 'home-outline';
  } else if (routeName === 'Categories') {
    iconName = focused ? 'grid' : 'grid-outline';
  } else if (routeName === 'Account') {
    iconName = focused ? 'person' : 'person-outline';
  } else if (routeName === 'Cart') {
    iconName = focused ? 'cart' : 'cart-outline';
  }
  return <Icon name={iconName} size={size} color={color} />;
};

export default getTbIcons;
