import { NavigationContainer } from "@react-navigation/native"
import React, { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import TabNavigation from "./TabNavigation"
import { AuthScreen, DiscoverScreen } from "./StackNavigation"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

const Stack = createNativeStackNavigator()
const Navigation = () => {
  const { userInfo, userToken } = useContext(AuthContext)

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {userToken !== null ? (
          <>
            <Stack.Screen
              name="TabNavigation"
              component={TabNavigation}
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
