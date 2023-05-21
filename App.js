import React, { useContext, useState } from "react"
import { NavigationContainer } from "@react-navigation/native"
import { NativeBaseProvider } from "native-base"

import TabNavigation from "./navigation/TabNavigation"
import { AuthScreen } from "./navigation/StackNavigation"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { AuthContext, AuthProvider } from "./context/AuthContext"
import Spinner from "react-native-loading-spinner-overlay/lib"
import Navigation from "./navigation/Navigation"

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NativeBaseProvider>
      <AuthProvider>
        <Navigation />
      </AuthProvider>
    </NativeBaseProvider>
  )
}
