import React, { useEffect, useState } from "react"
import { View, Text, NativeBaseProvider, Image, ScrollView } from "native-base"
import { SafeAreaView } from "react-native-safe-area-context"
import FeaturedRow from "../components/FeaturedRow"
import { TouchableOpacity } from "react-native"
import FavouriteRow from "../components/FavouriteRow"
import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"
import { MapIcon, MapPinIcon } from "react-native-heroicons/solid"
import { useNavigation } from "@react-navigation/native"
import HotelsRow from "../components/HotelsRow"

export default function Discover() {
  const navigation = useNavigation()
  const { userInfo, userToken } = useContext(AuthContext)
  const loadData = () => {}
  const [scrollCount, setScrollCount] = useState(0)
  useEffect(() => {}, [scrollCount])

  const handleScroll = (event) => {
    const { contentOffset } = event.nativeEvent
    if (contentOffset.y === 0) {
      setScrollCount((prevCount) => prevCount + 1)
    }
  }
  return (
    <NativeBaseProvider>
      <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          onScroll={handleScroll}
          scrollEventThrottle={10}
        >
          <View marginX={5} mb={4}>
            <View flexDirection={"row"} alignItems={"center"} mt={8}>
              <Text fontSize="4xl" flex="1" fontWeight={"medium"}>
                Discover
              </Text>
              <Text fontWeight={"bold"}>
                Hi, {userInfo.user.account.username}
              </Text>
            </View>
            <View mt={4}>
              <View flexDirection={"row"}>
                <TouchableOpacity
                  onPress={() => {
                    console.log("Khách sạn")
                  }}
                  style={{
                    flex: 1,
                    height: 50,
                    marginRight: 4,
                    borderRadius: 5,
                    display: "flex",
                    backgroundColor: "#32A4FC",
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
                    Hotel
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    console.log("Hoạt động")
                  }}
                  style={{
                    flex: 1,
                    height: 50,
                    marginLeft: 4,
                    display: "flex",
                    backgroundColor: "#32A4FC",
                    borderRadius: 5,
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
                    Activities
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
                    height: 50,
                    borderRadius: 5,
                    display: "flex",
                    backgroundColor: "#32A4FC",
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
                    Restaurant
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View>
            <FeaturedRow
              scrollCount={scrollCount}
              title={"Locations"}
              description={"The special places with the highest rating !!!"}
            ></FeaturedRow>
            <View
              mt={"25px"}
              mx={8}
              flex={1}
              h={170}
              backgroundColor={"rgb(50, 164, 252)"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Text fontSize={"2xl"} color={"#fff"} fontWeight={"bold"}>
                Is TravelCare
              </Text>
              <Text fontSize={"2xl"} color={"#fff"} fontWeight={"bold"}>
                missing a place?
              </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate("AddLocationScreen")}
              >
                <View
                  backgroundColor={"rgb(50, 164, 252)"}
                  h={"45px"}
                  w={"230px"}
                  borderColor={"#fff"}
                  borderRadius={20}
                  borderWidth={"2"}
                  flexDirection={"row"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <MapPinIcon color={"#fff"} />
                  <Text color={"#fff"} fontSize={"lg"} ml={"3"}>
                    Add a missing place
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <HotelsRow
              title={"Hotels"}
              description={"The special hotels with the highest rating !!!"}
            ></HotelsRow>
          </View>
          <View mt={4}>
            <FavouriteRow title={"Favourite"} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </NativeBaseProvider>
  )
}
