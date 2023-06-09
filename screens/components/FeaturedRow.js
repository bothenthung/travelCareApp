import React from "react"
import { NativeBaseProvider, ScrollView, Text, VStack, View } from "native-base"
import { SafeAreaView } from "react-native-safe-area-context"
import { ArrowRightIcon } from "react-native-heroicons/outline"
import HotelCard from "./LocationCard"
import { AxiosContext } from "../../context/AxiosContext"
import { useContext } from "react"
import { useEffect } from "react"
import { useState } from "react"
import { TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native"
import axios from "axios"

const FeaturedRow = ({ id, title, description }) => {
  const navigation = useNavigation()
  const { getLocations } = useContext(AxiosContext)
  const [locations, setLocations] = useState([])

  const { getReviewByLocationId } = useContext(AxiosContext)
  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const data = await getLocations()
        setLocations(data.data)
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
            {locations && locations.length > 0 ? (
              locations
                .filter((location) => location.isHotel === false)
                .map((location) => (
                  <TouchableOpacity
                    key={location.id}
                    activeOpacity={0.8}
                    onPress={() => {
                      navigation.navigate("LocationScreen", {
                        description: location?.description,
                        name: location?.name,
                        rate: location?.rating,
                        imgUrl: location?.imageUrlLocations,
                        categoryLocation: location?.categories,
                        streetAddressLocation: location?.address?.streetAddress,
                        countryLocation: location?.address?.country?.name,
                        provinceLocation: location?.address?.province?.name,
                        districtLocation: location?.address?.district?.name,
                        wardLocation: location?.address?.ward?.name,
                        locationId: location?.id,
                      })
                    }}
                  >
                    <HotelCard
                      title={location.name}
                      description={location.description || ""}
                      price={0}
                      rate={location.rating}
                      imgUrl={location.locationImages?.[0]?.imageUrl}
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

export default FeaturedRow
