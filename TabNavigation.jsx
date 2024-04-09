import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text} from 'react-native';
import HomeScreen from '../HomeScreen/Home';
import BookingScreen from '../BookingScreen/Booking';
import RoutesScreen from '../RoutesScreen/Routes';
import ProfileScreen from '../ProfileScreen/Profile';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import LoginScreen from '../LoginScreen/Login';
import RegisterScreen from '../RegisterScreen/Register';
import SettingsScreen from '../ProfileScreen/Settings';
import NotificationScreen from '../ProfileScreen/Notification';
import PersonalScreen from '../ProfileScreen/Personal';
import DatabaseScreen from '../DatabaseScreen/Firestore';
import MyRidesScreen from '../ProfileScreen/MyRides';
import RouteScreen from '../RoutesScreen/Routes';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'green',
        tabBarInactiveTintColor: 'gray',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: ({color}) => (
            <Text style={{color: color, fontSize: 12, marginTop: -7}}>
              Home
            </Text>
          ),
          tabBarIcon: ({color, size}) => (
            <FontAwesome5 name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Booking"
        component={BookingScreen}
        options={{
          tabBarLabel: ({color}) => (
            <Text style={{color: color, fontSize: 12, marginTop: -7}}>
              Book
            </Text>
          ),
          tabBarIcon: ({color, size}) => (
            <FontAwesome5 name="calendar-alt" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="MyRides"
        component={MyRidesScreen}
        options={{
          tabBarLabel: ({color}) => (
            <Text style={{color: color, fontSize: 12, marginTop: -7}}>
              MyRides
            </Text>
          ),
          tabBarIcon: ({color, size}) => (
            <FontAwesome5 name="ticket-alt" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: ({color}) => (
            <Text style={{color: color, fontSize: 12, marginTop: -7}}>
              Profile
            </Text>
          ),
          tabBarIcon: ({color, size}) => (
            <FontAwesome5 name="user" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function AuthStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default function AppNavigation() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Auth"
        component={AuthStackNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Main"
        component={MainTabNavigator}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Routes"
        component={RoutesScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Notification"
        component={NotificationScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Personal"
        component={PersonalScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Book"
        component={BookingScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
