import { createStackNavigator } from "@react-navigation/stack"
import React from "react"

import EditProfile from "./EditProfile"
import { NativeBaseProvider } from "native-base"
import { NavigationContainer } from "@react-navigation/native"

const Stack = createStackNavigator()

export default function MainScreens() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="EditProfile" component={EditProfile} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  )
}
