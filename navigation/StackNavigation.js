import React, { useEffect } from "react"

import Search from "../screens/homescreens/Search"
import Planning from "../screens/homescreens/planningscreens/Planning"
import Review from "../screens/homescreens/Review"
import Profile from "../screens/homescreens/profilescreens/Profile"
import EditProfile from "../screens/homescreens/profilescreens/EditProfile"
import Discover from "../screens/homescreens/Discover"
import SignIn from "../screens/auth/SignIn"
import SignUp from "../screens/auth/SignUp"
import RecoverAccount from "../screens/auth/RecoverAccount"

import { createNativeStackNavigator } from "@react-navigation/native-stack"

const Stack = createNativeStackNavigator()

const AuthScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SignInScreen"
        component={SignIn}
        options={{ headerShown: false, tabBarLabel: "" }}
      />
      <Stack.Screen
        name="RecoverAccountScreen"
        component={RecoverAccount}
        options={{ headerShown: false, tabBarLabel: "" }}
      />
      <Stack.Screen
        name="SignUpScreen"
        component={SignUp}
        options={{ headerShown: false, tabBarLabel: "" }}
      />
    </Stack.Navigator>
  )
}
const DiscoverScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="DiscoverScreen"
        component={Discover}
        options={{ headerShown: false, tabBarLabel: "" }}
      />
    </Stack.Navigator>
  )
}
const SearchScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SearchScreen"
        component={Search}
        options={{ headerShown: false, tabBarLabel: "" }}
      />
    </Stack.Navigator>
  )
}
const PlanningScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PlanningScreen"
        component={Planning}
        options={{ headerShown: false, tabBarLabel: "" }}
      />
    </Stack.Navigator>
  )
}
const ReviewScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ReviewScreen"
        component={Review}
        options={{ headerShown: false, tabBarLabel: "" }}
      />
    </Stack.Navigator>
  )
}
const ProfileScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProfileScreen"
        component={Profile}
        options={{ headerShown: false, tabBarLabel: "" }}
      />
      <Stack.Screen
        name="EditProfileScreen"
        component={EditProfile}
        options={{ headerShown: false, tabBarLabel: "" }}
      />
    </Stack.Navigator>
  )
}

export {
  DiscoverScreen,
  SearchScreen,
  ReviewScreen,
  PlanningScreen,
  ProfileScreen,
  AuthScreen,
}
