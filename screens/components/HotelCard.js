import React from "react"

import { TouchableOpacity } from "react-native"
import { Image, View, Text, Box, NativeBaseProvider } from "native-base"
import { MapPinIcon, StarIcon } from "react-native-heroicons/outline"
import { useNavigation } from "@react-navigation/native"

const HotelCard = ({ title, description, rate, imgUrl }) => {
  const navigation = useNavigation()
  const truncateDescription = (text, maxLength) => {
    if (text && text.length > maxLength) {
      return text.substring(0, 40) + "..."
    } else {
      return text
    }
  }

  return (
    <NativeBaseProvider>
      <Box backgroundColor={"#fff"} ml={4} w={250}>
        <Image
          alt={"Avatar"}
          source={
            imgUrl ? { uri: imgUrl } : require("../../assets/travelcare.jpg")
          }
          h={150}
          w={250}
          rounded={"sm"}
        />
        <View>
          <View>
            <Text fontWeight={"bold"} fontSize={"xl"} flexWrap={"wrap"}>
              {title}
            </Text>
            <View flexDirection={"row"} alignItems={"center"}>
              <StarIcon />
              <Text> {rate}</Text>
            </View>
            <View flexDirection={"row"} alignItems={"center"}>
              <Text pr={5} w={250}>
                {truncateDescription(description, 2)}{" "}
              </Text>
            </View>
          </View>
        </View>
      </Box>
    </NativeBaseProvider>
  )
}

export default HotelCard
