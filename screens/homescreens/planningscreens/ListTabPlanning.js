import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { FlatList, ScrollView, Text, View } from "native-base"
import React, { useState } from "react"
import { MapPinIcon, RocketLaunchIcon } from "react-native-heroicons/solid"

const Tab = createMaterialTopTabNavigator()

const TripComponent = () => {
  return (
    <View style={{ width: "100%", height: "100%" }} backgroundColor={"white"}>
      <View>
        <View flexDirection={"row"} mt={5} alignItems={"center"}>
          <MapPinIcon style={{ marginRight: 10 }} color={"#333"} />
          <Text flexWrap={"wrap"} fontSize={"18"}>
            Lưu các địa điểm bạn muốn ghé thăm
          </Text>
        </View>
        <View alignItems={"center"} flexDirection={"row"} mt={8}>
          <RocketLaunchIcon style={{ marginRight: 10 }} color={"#333"} />
          <Text flexWrap={"wrap"} fontSize={"18"}>
            Xem các mục đã lưu trên bản đồ
          </Text>
        </View>
        <View alignItems={"center"} flexDirection={"row"} mt={8}>
          <MapPinIcon style={{ marginRight: 10 }} color={"#333"} />
          <Text fontSize={"18"} flexWrap={"wrap"} pr={10}>
            Theo dõi chú thích, liên kết và hơn thế nữa
          </Text>
        </View>
        <View alignItems={"center"} flexDirection={"row"} mt={8}>
          <MapPinIcon style={{ marginRight: 10 }} color={"#333"} />
          <Text fontSize={"18"} flexWrap={"wrap"}>
            Chia sẻ và cộng tác trong kế hoạch của bạn
          </Text>
        </View>
      </View>
    </View>
  )
}

const MyTravelPlansComponent = () => {
  return (
    <View style={{ width: "100%", height: "100%" }} backgroundColor={"white"}>
      <Text fontSize={16} fontWeight={"medium"}>
        Chưa có mục nào được lưu
      </Text>
      <Text>Địa điểm bạn lưu sẽ xuất hiện tại đây.</Text>
    </View>
  )
}

const ListTabPlanning = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: { fontSize: 12 },
        tabBarIndicatorStyle: { backgroundColor: "#DB147F" },
        tabBarActiveTintColor: "#DB147F",
        tabBarLabelStyle: { fontWeight: "bold" },
      }}
    >
      <Tab.Screen name="Trip" component={TripComponent} />
      <Tab.Screen name="My Travle Plans" component={MyTravelPlansComponent} />
    </Tab.Navigator>
  )
}

export default ListTabPlanning
