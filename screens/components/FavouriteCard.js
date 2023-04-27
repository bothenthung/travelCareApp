import React, { useState } from "react"
import { StyledComponent } from "nativewind"
import { TouchableOpacity } from "react-native"
import { Image, View, Text, Button, Box, IconButton, Icon } from "native-base"

// AS outline  from "react-native-heroicons/outline"
// AS solid  from "react-native-heroicons/solid"
import {
  HeartIcon as HeartIconSolid,
  StarIcon as StarIconSolid,
} from "react-native-heroicons/solid"

import {
  HeartIcon as HeartIconOutLine,
  StarIcon as StarIconOutline,
} from "react-native-heroicons/outline"

const FavouriteCard = ({
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
  const [isHeart, setIsHeart] = useState(false)

  const handleFavorite = () => {
    if (isHeart) {
      console.log("Huy bo yeu thich")
    } else {
      console.log("Yeu thich")
    }
    setIsHeart(!isHeart)
  }
  return (
    <StyledComponent
      component={TouchableOpacity}
      onPress={() => {
        console.log("Nhấn vào card")
      }}
    >
      <Box backgroundColor={"#fff"} mr={3}>
        <Box
          style={{
            borderColor: "#fff",
            borderWidth: 2,
            borderRadius: 50,
            position: "absolute",
            top: 10,
            right: 10,
            zIndex: 1,
          }}
        >
          <IconButton
            onPress={() => {
              setIsHeart(!isHeart)
              handleFavorite()
            }}
            borderRadius={50}
            size={7}
            icon={
              <Icon
                as={isHeart ? HeartIconSolid : HeartIconOutLine}
                name="trai tim cua toi"
                color={isHeart ? "red.400" : "#fff"}
              />
            }
          />
        </Box>
        <Image
          zIndex={0}
          alt={"Avatar"}
          source={{
            uri: imgUrl,
          }}
          h={200}
          w={250}
          rounded={"sm"}
        />
        <View flexDirection={"row"} alignItems={"center"}>
          <View flex={1}>
            <Text fontWeight={"bold"} fontSize={"xl"} pt={1}>
              {title}
            </Text>
            <Text>• {genre}</Text>
          </View>
          <Box
            backgroundColor="#DB147F"
            h={8}
            flexDirection={"row"}
            borderRadius={15}
            alignItems={"center"}
            w={59}
          >
            <StarIconSolid
              size={22}
              style={{
                marginLeft: 2,
                color: "yellow",
                marginRight: 3,
              }}
            />
            <Text color={"#fff"} mr={2}>
              {rating}
            </Text>
          </Box>
        </View>
      </Box>
    </StyledComponent>
  )
}

export default FavouriteCard
