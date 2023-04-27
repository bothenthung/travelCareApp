import React from "react"
import { StyledComponent } from "nativewind"
import { TouchableOpacity } from "react-native"
import { Image, View, Text, Button, Box } from "native-base"
import { MapIcon, MapPinIcon, StarIcon } from "react-native-heroicons/outline"

const HotelCard = ({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  short_decription,
  dishes,
  long,
  lat,
}) => {
  return (
    <StyledComponent component={TouchableOpacity}>
      <Box backgroundColor={"#fff"} mr={3}>
        <Image
          alt={"Avatar"}
          source={{
            uri: imgUrl,
          }}
          h={150}
          w={250}
          rounded={"sm"}
        />
        <View>
          <View>
            <Text fontWeight={"bold"} fontSize={"xl"} pt={1}>
              {title}
            </Text>
            <View flexDirection={"row"} alignItems={"center"}>
              <StarIcon />
              <Text>
                {rating} • {genre}
              </Text>
            </View>
            <View flexDirection={"row"} alignItems={"center"}>
              <MapPinIcon />
              <Text>Nearby • {address}</Text>
            </View>
          </View>
        </View>
      </Box>
    </StyledComponent>
  )
}

export default HotelCard
