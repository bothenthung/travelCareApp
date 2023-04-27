import { HStack, ScrollView, Text, View } from "native-base"
import React from "react"
import { TouchableOpacity } from "react-native"

const RecentSearchRow = () => {
  return (
    <View mb={5}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <HStack space={2} ml={4}>
          <TouchableOpacity
            onPress={() => {
              console.log("Khách sạn")
            }}
            style={{
              flex: 1,
              height: 40,
              paddingHorizontal: 10,
              backgroundColor: "#fff",
              alignItems: "flex-start",
              justifyContent: "center",
              borderColor: "#DB147F",
              borderWidth: 1,
              borderRadius: 25,
            }}
          >
            <Text fontSize={15} color={"#DB147F"}>
              Nhà hàng gần đây
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              console.log("Khách sạn")
            }}
            style={{
              flex: 1,
              height: 40,
              paddingHorizontal: 10,
              backgroundColor: "#fff",
              alignItems: "flex-start",
              justifyContent: "center",
              borderColor: "#DB147F",
              borderWidth: 1,
              borderRadius: 25,
            }}
          >
            <Text fontSize={15} color={"#DB147F"}>
              Có gì đặc biệt không my fen!!!
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              console.log("Khách sạn")
            }}
            style={{
              flex: 1,
              height: 40,
              paddingHorizontal: 10,
              backgroundColor: "#fff",
              alignItems: "flex-start",
              justifyContent: "center",
              borderColor: "#DB147F",
              borderWidth: 1,
              borderRadius: 25,
            }}
          >
            <Text fontSize={15} color={"#DB147F"}>
              Có rất nhiều nha
            </Text>
          </TouchableOpacity>
        </HStack>
      </ScrollView>
    </View>
  )
}

export default RecentSearchRow
