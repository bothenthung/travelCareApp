import React, { useEffect } from "react"
import { View, Text, NativeBaseProvider, Image, ScrollView } from "native-base"
import { SafeAreaView } from "react-native-safe-area-context"
import FeaturedRow from "../components/FeaturedRow"
import { TouchableOpacity } from "react-native"
import FavouriteRow from "../components/FavouriteRow"

export default function Discover() {
  useEffect(() => {
    console.log("Discover")
  }, [])
  return (
    useEffect(() => {
      console.log("Discover 2")
    }, []),
    (
      <NativeBaseProvider>
        <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View backgroundColor={"rgb(59,229,168)"}>
              <View marginX={5} mt={1} mb={4}>
                <View flexDirection="row" alignItems="center">
                  <Text fontSize="4xl" flex="1">
                    Discover
                  </Text>
                  <Image
                    source={require("../../assets/favicon.png")}
                    rounded={"full"}
                    borderColor="rgb(50, 164, 252)"
                    borderWidth={3}
                    alt={"Avatar"}
                  ></Image>
                </View>

                <View mt={4}>
                  <View flexDirection={"row"}>
                    <TouchableOpacity
                      onPress={() => {
                        console.log("Khách sạn")
                      }}
                      style={{
                        flex: 1,
                        height: 48,
                        marginRight: 4,
                        borderRadius: 10,
                        display: "flex",
                        backgroundColor: "rgb(50, 164, 252)",
                        alignItems: "flex-start",
                        justifyContent: "center",
                      }}
                    >
                      <Text
                        fontSize={"xl"}
                        color={"#fff"}
                        fontWeight={"bold"}
                        ml={5}
                      >
                        Khách sạn
                      </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      onPress={() => {
                        console.log("Hoạt động")
                      }}
                      style={{
                        flex: 1,
                        height: 48,
                        marginLeft: 4,
                        display: "flex",
                        backgroundColor: "rgb(50, 164, 252)",
                        borderRadius: 10,
                        justifyContent: "center",
                        alignItems: "flex-start",
                      }}
                    >
                      <Text
                        fontSize={"xl"}
                        color={"#fff"}
                        fontWeight={"bold"}
                        ml={5}
                      >
                        Hoạt động
                      </Text>
                    </TouchableOpacity>
                  </View>

                  <View flexDirection={"row"}>
                    <TouchableOpacity
                      onPress={() => {
                        console.log("Nhà hàng")
                      }}
                      style={{
                        flex: 1,
                        height: 48,
                        borderRadius: 10,
                        display: "flex",
                        backgroundColor: "rgb(50, 164, 252)",
                        alignItems: "flex-start",
                        justifyContent: "center",
                        marginTop: 8,
                      }}
                    >
                      <Text
                        fontSize={"xl"}
                        color={"#fff"}
                        fontWeight={"bold"}
                        ml={5}
                      >
                        Nhà hàng
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>

            <View>
              <FeaturedRow
                title={"Featured"}
                description={"The special places with the highest rating !!!"}
              ></FeaturedRow>
            </View>
            <View mt={4}>
              <FavouriteRow title={"Favourite"} />
            </View>
          </ScrollView>
        </SafeAreaView>
      </NativeBaseProvider>
    )
  )
}
