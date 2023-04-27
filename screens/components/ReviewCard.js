import { Box, Image, Text, View } from "native-base"
import React from "react"
import { StarIcon as StarIconSolid } from "react-native-heroicons/solid"

const ReviewCard = ({
  daypost,
  decscription,
  raiting,
  name,
  rating,
  genre,
  address,
  imgUrl,
}) => {
  return (
    <View>
      <View mb={1}>
        <View flexDirection={"row"} alignContent={"center"}>
          <Image
            alt={"Avatar"}
            source={{
              uri: imgUrl,
            }}
            h={50}
            w={85}
            rounded={"2xl"}
            mr={3}
          />

          <View flex={1}>
            <Text fontWeight={"bold"}>{name}</Text>
            <Text>Đã viết vào {daypost}</Text>
          </View>

          <Box
            backgroundColor="#DB147F"
            h={8}
            w={59}
            flexDirection={"row"}
            borderRadius={15}
            alignItems={"center"}
          >
            <StarIconSolid
              size={22}
              style={{
                color: "yellow",
                marginRight: 3,
              }}
            />

            <Text color={"#fff"}>{rating}</Text>
          </Box>
        </View>
      </View>
      <Text>{decscription}</Text>
    </View>
  )
}

export default ReviewCard
