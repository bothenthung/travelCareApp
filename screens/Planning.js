import React from "react"
import { SafeAreaView } from "react-native-safe-area-context"

import { NativeBaseProvider, ScrollView, Text, View } from "native-base"

import Trip from "./components/Trip"
import Saved from "./components/Saved"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

const Planning = () => {
  const Tab = createBottomTabNavigator()
  return (
    <NativeBaseProvider>
      <SafeAreaView>
        <ScrollView>
          <View mx={4}>
            <Text fontSize="4xl" flex="1">
              Planning
            </Text>
            <View h={300} w={200}></View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </NativeBaseProvider>
  )
}

export default Planning
