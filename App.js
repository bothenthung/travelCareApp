import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { NativeBaseProvider } from "native-base"
import { createStackNavigator } from "@react-navigation/stack"
import TabNavigation from "./screens/TabNavigation"

const Stack = createStackNavigator()

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <TabNavigation />
      </NavigationContainer>
    </NativeBaseProvider>
  )
}
