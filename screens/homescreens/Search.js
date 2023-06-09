import React, { useEffect, useState } from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import { useNavigation } from "@react-navigation/native"

import {
  Icon,
  Image,
  Input,
  NativeBaseProvider,
  ScrollView,
  Text,
  VStack,
  View,
} from "native-base"
import { HomeIcon, MagnifyingGlassIcon } from "react-native-heroicons/solid"
import { AdjustmentsHorizontalIcon } from "react-native-heroicons/outline"
import RecentSearchRow from "../components/RecentSearchRow"
import FavouriteRow from "../components/FavouriteRow"
import FeaturedRow from "../components/FeaturedRow"
import axios from "axios"
import { BASE_URL } from "../../config"
import { FlatList, TouchableOpacity } from "react-native"

const Search = ({ navigation }) => {
  const [search, setSearch] = useState()
  const [location, setLocation] = useState([])

  // `${BASE_URL}/review/get-reviews-by-location/${locationId}?search=${result}`

  const getLocationsBySearch = async (search) => {
    try {
      const response = await axios.get(
        `${BASE_URL}/locations/?search=${search}`
      )
      const locations = response.data.data
      setLocation(locations)
      return locations
    } catch (error) {
      console.log(`get locations by search error: ${error}`)
      return []
    }
  }

  return (
    <NativeBaseProvider>
      <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
        <View mb={10}>
          <View mx={5}>
            <Text fontSize="4xl" fontWeight={"medium"} mt={8}>
              Search
            </Text>
          </View>
          <FlatList
            data={location}
            keyExtractor={(item) => item.id}
            ListHeaderComponent={
              <Input
                onChangeText={(prev) => getLocationsBySearch(prev)}
                w={{
                  base: "100%",
                  md: "25%",
                }}
                size="2xl"
                borderColor="#DB147F"
                placeholder="Search something..."
                borderRadius={25}
                InputLeftElement={
                  <Icon
                    as={<MagnifyingGlassIcon />}
                    size="7"
                    ml="2"
                    color="muted.400"
                  />
                }
                InputRightElement={
                  <Icon
                    as={<AdjustmentsHorizontalIcon />}
                    size="7"
                    mr="5"
                    color="muted.400"
                  />
                }
              />
            }
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("LocationScreenSearch", {
                    description: item?.description,
                    name: item?.name,
                    rate: item?.rating,
                    imgUrl: item?.imageUrlLocations,
                    categoryLocation: item?.categories,
                    streetAddressLocation: item?.address?.streetAddress,
                    countryLocation: item?.address?.country?.name,
                    provinceLocation: item?.address?.province?.name,
                    districtLocation: item?.address?.district?.name,
                    wardLocation: item?.address?.ward?.name,
                    locationId: item?.id,
                  })
                }}
              >
                <View ml={5} mt={5} flexDirection={"row"}>
                  <Image
                    alt="location image"
                    source={
                      item?.locationImages?.[0]?.imageUrl
                        ? { uri: item.locationImages[0].imageUrl }
                        : require("../../assets/travelcare.jpg")
                    }
                    style={{ width: 65, height: 65 }}
                  />
                  <View ml={4}>
                    <Text fontSize={17} fontWeight={"bold"}>
                      {item.name}
                    </Text>
                    <Text flexWrap={"wrap"} fontSize={12} pr={20}>
                      {item.address?.streetAddress}, {item.address?.ward?.name},
                      {item.address?.district?.name},{" "}
                      {item.address?.province?.name},
                      {item.address?.country?.name}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <Text mx={4} fontSize={"xl"} fontWeight={"bold"} my={3}>
              Tìm kiếm gần đây
            </Text>
            <RecentSearchRow />
          </View>
          <View>
            <FeaturedRow title={"Trải nghiệm hàng đầu"} />
          </View>
          <View mt={4}>
            <FavouriteRow title={"Favourite"} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </NativeBaseProvider>
  )
}

export default Search
