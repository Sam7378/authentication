import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text, View} from 'react-native';
import Home from '../modules/Home';
import Categories from '../modules/categories';
import Account from '../modules/account';
import Cart from '../modules/cart';
import {NavigationContainer} from '@react-navigation/native';
// import iconBar from '../TabIcon';

// const Tab = createBottomTabNavigator();
const MainNavigator = () => {
  return (
    <View>
      <Text>main</Text>
    </View>
    // <NavigationContainer>
    //   <Tab.Navigator
    //   // screenOptions={({route}) => ({
    //   //   tabBarIcon: ({focused, color, size}) =>
    //   //     iconBar(route.name, focused, color, size),
    //   //   tabBarActiveTintColor: 'tomato',
    //   //   tabBarInactiveTintColor: 'gray',
    //   //   headerShown: false,
    //   //   tabBarHideOnKeyboard: true,
    //   //   lazy: true,
    //   //   tabBarStyle: {
    //   //     paddingTop: Platform.OS === 'android' ? 0 : 10,
    //   //     height: Platform.OS === 'ios' ? 60 : 50,
    //   //     backgroundColor: 'blue',
    //   //   },
    //   // })}
    //   >
    //     <Tab.Screen name="Home" component={Home} />
    //     <Tab.Screen name="Categories" component={Categories} />
    //     <Tab.Screen name="Account" component={Account} />
    //     <Tab.Screen name="Cart" component={Cart} />
    //   </Tab.Navigator>
    // </NavigationContainer>
  );
};

export default MainNavigator;
