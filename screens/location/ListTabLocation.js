import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { ScrollView, Text, View } from "native-base"
import React, { useState } from "react"
import { useRef } from "react"
import { MapPinIcon, RocketLaunchIcon } from "react-native-heroicons/solid"

import { FlatList, Image, Dimensions } from "react-native"
const Tab = createMaterialTopTabNavigator()

const ListTabLocation = ({ route }) => {
  const images = [
    "https://hotelxtoronto.com/_novaimg/4906918-1481330_0_0_2200_1200_2200_1200.rc.jpg",
    "https://thehoughtonhotel.com/wp-content/uploads/2023/02/Houghton-Hotel-3-16-scaled.jpg",
  ]
  const flatListRef = useRef(null)
  const { location } = route.params
  const renderItem = ({ item }) => (
    <View style={{ width: Dimensions.get("window").width }}>
      <Image source={{ uri: item }} style={{ width: "100%", height: 200 }} />
    </View>
  )
  return (
    <View style={{ width: "100%", height: "100%" }} backgroundColor={"white"}>
      <View>
        <FlatList
          ref={flatListRef}
          data={images}
          renderItem={renderItem}
          keyExtractor={(item, index) => String(index)}
          horizontal
          pagingEnabled
          onScrollToIndexFailed={() => {}}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <Text>{location?.name}</Text>
    </View>
  )
}

export default ListTabLocation
