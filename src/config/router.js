import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {BottomNav} from '../screens';
import {StyleSheet} from 'react-native';
import {COLOR_GREY, COLOR_PRIMARY} from '../styles/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//screen

const Tab = createMaterialBottomTabNavigator();
const StylesTab = StyleSheet.create({
  barStyle: {
    backgroundColor: '#fff',
    elevation: 0,
  },
});
const BottomNavigator = () => (
  <Tab.Navigator
    initialRouteName="Home"
    shifting={false}
    barStyle={StylesTab.barStyle}
    activeColor={COLOR_PRIMARY}
    inactiveColor={COLOR_GREY}>
    <Tab.Screen
      name="Home"
      component={BottomNav.Home}
      options={{
        tabBarIcon: ({color}) => (
          <MaterialCommunityIcons name="home" color={color} size={23} />
        ),
      }}
    />
    <Tab.Screen
      name="Trending"
      component={BottomNav.Trending}
      options={{
        tabBarIcon: ({color}) => (
          <MaterialCommunityIcons name="fire" color={color} size={23} />
        ),
      }}
    />
    <Tab.Screen
      name="Subscription"
      component={BottomNav.Subscription}
      options={{
        tabBarIcon: ({color}) => (
          <MaterialCommunityIcons
            name="youtube-subscription"
            color={color}
            size={23}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Notifications"
      component={BottomNav.Notifications}
      options={{
        tabBarIcon: ({color}) => (
          <MaterialCommunityIcons name="bell" color={color} size={23} />
        ),
      }}
    />
    <Tab.Screen
      name="Collection"
      component={BottomNav.Collection}
      options={{
        tabBarIcon: ({color}) => (
          <MaterialCommunityIcons name="folder" color={color} size={23} />
        ),
      }}
    />
  </Tab.Navigator>
);
const Router = () => (
  <NavigationContainer>
    <BottomNavigator />
  </NavigationContainer>
);

export default Router;
