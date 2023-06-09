import { Image, NativeBaseProvider, ScrollView, Text, View } from "native-base"
import React, { useEffect, useRef, useState } from "react"
import { Dimensions, StyleSheet, TouchableOpacity } from "react-native"
import { MapPinIcon } from "react-native-heroicons/outline"
import { StarIcon } from "react-native-heroicons/solid"
import { SafeAreaView } from "react-native-safe-area-context"
import ReviewCol from "../components/ReviewCol"
import { AxiosContext } from "../../context/AxiosContext"
import { useContext } from "react"

const Location = ({ route, navigation }) => {
  const { getReviewByLocationId } = useContext(AxiosContext)
  const windowWidth = Dimensions.get("window").width
  const {
    name,
    description,
    rate,
    imgUrl,
    categoryLocation,
    streetAddressLocation,
    countryLocation,
    provinceLocation,
    districtLocation,
    wardLocation,
    locationId,
  } = route.params

  const [reviewByLocationId, setReviewByLocationId] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const reviewByLocationId = await getReviewByLocationId(locationId)
      setReviewByLocationId(reviewByLocationId)
    }
    fetchData()
  }, [])

  return (
    <NativeBaseProvider>
      <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
        <ScrollView>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
          >
            {imgUrl.map((url, index) => (
              <Image
                key={index}
                alt="location image"
                source={{ uri: url }}
                style={{ width: windowWidth, height: 300 }}
              />
            ))}
          </ScrollView>
          <View mx={4} mt={2}>
            <View
              flexDirection={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
              flexWrap={"wrap"}
            >
              <Text fontWeight={"bold"} fontSize={"3xl"}>
                {name}
              </Text>
              <View flexDirection={"row"} alignItems={"center"}>
                <StarIcon color={"rgb(255, 224, 71)"} />
                <Text fontSize={20} fontWeight={"bold"}>
                  {" "}
                  {rate.toFixed(1)}
                </Text>
              </View>
            </View>
            <View flexDirection={"row"} flexWrap={"wrap"}>
              {categoryLocation.map((category, index) => (
                <Text key={index} style={styles.categorytext}>
                  #{category.name}{" "}
                </Text>
              ))}
            </View>

            <View
              flexDirection={"row"}
              flexWrap={"wrap"}
              alignItems={"center"}
              mb={3}
            >
              <MapPinIcon color={"#32A4FC"} />
              <Text style={styles.locationaddress}>
                {streetAddressLocation},{" "}
              </Text>
              <Text style={styles.locationaddress}>{wardLocation}, </Text>
              <Text style={styles.locationaddress}>{districtLocation}, </Text>
              <Text style={styles.locationaddress}>{provinceLocation}, </Text>
              <Text style={styles.locationaddress}>{countryLocation}</Text>
            </View>
            <Text mb={5} fontSize={17}>
              {description}
            </Text>
            <Text fontSize={20} fontWeight={"bold"}>
              Contribute
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("AddReview", {
                  locationIDs: locationId,
                })
              }}
            >
              <View
                h={"10"}
                w={130}
                backgroundColor={"#fff"}
                borderWidth={2}
                borderColor={"#32A4FC"}
                borderRadius={20}
                alignItems={"center"}
                justifyContent={"center"}
                mb={3}
              >
                <Text fontWeight={"medium"} fontSize={"md"}>
                  Write a review
                </Text>
              </View>
            </TouchableOpacity>
            <ReviewCol reviewByLocationId={reviewByLocationId} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </NativeBaseProvider>
  )
}

export default Location
const styles = StyleSheet.create({
  locationaddress: {
    fontSize: 10,
  },
  categorytext: {
    fontSize: 17,
    fontWeight: "bold",
  },
})
