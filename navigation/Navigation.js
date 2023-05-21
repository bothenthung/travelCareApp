import { NavigationContainer } from "@react-navigation/native"
import React, { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import TabNavigation from "./TabNavigation"
import { AuthScreen, DiscoverScreen } from "./StackNavigation"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import Search from "../screens/homescreens/Search"
const Stack = createNativeStackNavigator()
const Navigation = () => {
  const { userInfo } = useContext(AuthContext)
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {userInfo.tokens ? (
          <>
            <Stack.Screen
              name="DiscoverScreen"
              component={DiscoverScreen}
              options={{ headerShown: false, tabBarLabel: "" }}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="AuthScreen"
              component={AuthScreen}
              options={{ headerShown: false, tabBarLabel: "" }}
            ></Stack.Screen>
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation
