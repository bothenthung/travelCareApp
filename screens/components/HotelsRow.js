import React from "react"
import { NativeBaseProvider, ScrollView, Text, VStack, View } from "native-base"
import { SafeAreaView } from "react-native-safe-area-context"
import { ArrowRightIcon } from "react-native-heroicons/outline"

import { AxiosContext } from "../../context/AxiosContext"
import { useContext } from "react"
import { useEffect } from "react"
import { useState } from "react"
import { TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native"
import axios from "axios"
import HotelCard from "./HotelCard"

const HotelsRow = ({ id, title, description }) => {
  const navigation = useNavigation()
  const { getHotels } = useContext(AxiosContext)
  const [hotels, setHotels] = useState([])

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const data = await getHotels()
        setHotels(data.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchLocations()
  }, [])

  return (
    <View>
      <View flexDirection={"row"} alignItems={"center"} px={4} mt={3}>
        <Text fontSize={"xl"} flex={1} fontWeight={"bold"}>
          {title}
        </Text>
        <ArrowRightIcon />
      </View>

      <Text px={4} mb={1}>
        {description}
      </Text>

      <View>
        <View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {hotels && hotels.length > 0 ? (
              hotels.map((hotel) => (
                <TouchableOpacity key={hotel.id} activeOpacity={0.8}>
                  <HotelCard
                    title={hotel.location?.name}
                    description={hotel.location?.description}
                    price={0}
                    rate={hotel.location?.rating}
                    imgUrl={hotel?.location?.locationImages?.[0]?.imageUrl}
                  />
                </TouchableOpacity>
              ))
            ) : (
              <Text fontWeight={"bold"} fontSize={20}>
                There are some problems, please wait a moment
              </Text>
            )}
          </ScrollView>
        </View>
      </View>
    </View>
  )
}

export default HotelsRow
