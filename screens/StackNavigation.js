import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import Discover from "./Discover"
import Search from "./Search"
import Planning from "./Planning"
import Review from "./Review"
import Profile from "./Profile"
import EditProfile from "./EditProfile"
const Stack = createStackNavigator()

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
        name="EditProfile"
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
}
