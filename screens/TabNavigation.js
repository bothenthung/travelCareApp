import React from "react"

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import { Text, Box } from "native-base"

import {
  GlobeAsiaAustraliaIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  StarIcon,
  UserIcon,
} from "react-native-heroicons/solid"

import Discover from "./Discover"
import Search from "./Search"
import Planning from "./Planning"
import Evaluate from "./Review"
import Profile from "./Profile"
import {
  DiscoverScreen,
  ReviewScreen,
  PlanningScreen,
  ProfileScreen,
  SearchScreen,
} from "./StackNavigation"

const Tab = createBottomTabNavigator()
const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Discover") {
            return (
              <Box alignItems="center" mt={4}>
                <HomeIcon color={focused ? "#DB147F" : "#AAAAAA"} size={size} />
                <Text color={focused ? "#DB147F" : "#AAAAAA"}>
                  {route.name}
                </Text>
              </Box>
            )
          }

          if (route.name === "Search") {
            iconColor = focused ? "#DB147F" : "#AAAAAA"
            return (
              <Box alignItems="center" mt={4}>
                <MagnifyingGlassIcon
                  color={focused ? "#DB147F" : "#AAAAAA"}
                  size={size}
                />
                <Text color={focused ? "#DB147F" : "#AAAAAA"}>
                  {route.name}
                </Text>
              </Box>
            )
          }
          if (route.name === "Planning") {
            return (
              <Box alignItems="center" mt={4}>
                <GlobeAsiaAustraliaIcon
                  color={focused ? "#DB147F" : "#AAAAAA"}
                  size={size}
                />
                <Text color={focused ? "#DB147F" : "#AAAAAA"}>
                  {route.name}
                </Text>
              </Box>
            )
          }
          if (route.name === "Review") {
            iconColor = focused ? "#DB147F" : "#AAAAAA"
            return (
              <Box alignItems="center" mt={4}>
                <StarIcon color={focused ? "#DB147F" : "#AAAAAA"} size={size} />
                <Text color={focused ? "#DB147F" : "#AAAAAA"}>
                  {route.name}
                </Text>
              </Box>
            )
          }
          if (route.name === "Profile") {
            iconColor = focused ? "#DB147F" : "#AAAAAA"
            return (
              <Box alignItems="center" mt={4}>
                <UserIcon color={focused ? "#DB147F" : "#AAAAAA"} size={size} />
                <Text color={focused ? "#DB147F" : "#AAAAAA"}>
                  {route.name}
                </Text>
              </Box>
            )
          }
        },
      })}
    >
      <Tab.Screen
        name="Discover"
        component={DiscoverScreen}
        options={{
          headerShown: false,
          tabBarLabel: "",
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          headerShown: false,
          tabBarLabel: "",
        }}
      />
      <Tab.Screen
        name="Planning"
        component={PlanningScreen}
        options={{ headerShown: false, tabBarLabel: "" }}
      />
      <Tab.Screen
        name="Review"
        component={ReviewScreen}
        options={{ headerShown: false, tabBarLabel: "" }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerShown: false, tabBarLabel: "" }}
      />
    </Tab.Navigator>
  )
}

export default TabNavigation
