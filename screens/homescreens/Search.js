import React from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import { useNavigation } from "@react-navigation/native"
import { useLayoutEffect } from "react"
import {
  Icon,
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

const Search = () => {
  // const navigation = useNavigation()

  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerShown: false,
  //   })
  // }, [])
  return (
    <NativeBaseProvider>
      <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View backgroundColor="#fff">
            <View mx={5}>
              <Text fontSize="4xl">Search</Text>

              <Input
                mt={5}
                w={{
                  base: "100%",
                  md: "25%",
                }}
                size="2xl"
                borderColor="#DB147F"
                placeholder="Bạn sắp đến đâu"
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
            </View>

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
          </View>
        </ScrollView>
      </SafeAreaView>
    </NativeBaseProvider>
  )
}

export default Search
