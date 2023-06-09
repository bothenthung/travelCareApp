import { format } from "date-fns"
import { Box, Image, Text, View } from "native-base"
import React from "react"
import { StarIcon as StarIconSolid } from "react-native-heroicons/solid"

const ReviewCard = ({
  content,
  reviewAt,
  tripTime,
  title,
  rating,
  genre,
  address,
  imgUrl,
  lastName,
  firstName,
}) => {
  const reviewAtDateTime = format(new Date(reviewAt), "MM/yyyy")
  const visitAtDateTime = format(new Date(tripTime), "MM/yyyy")

  return (
    <View mb={6} borderBottomColor={"#DB147F"} borderBottomWidth={1} pb={2}>
      <View>
        <Text fontSize={18} fontWeight={"bold"}>
          {firstName} {lastName}
        </Text>
        <View flexDirection={"row"} alignContent={"center"}>
          {imgUrl.map((imgUrls) => (
            <Image
              key={imgUrls.id}
              alt={"Avatar"}
              source={{
                uri: imgUrls.imageUrl,
              }}
              h={70}
              w={120}
              rounded={"2xl"}
              mr={3}
            />
          ))}
          <View flex={1}>
            <Text fontWeight={"bold"}>{title}</Text>
            <Text>{content}</Text>
          </View>

          <Box
            backgroundColor="#DB147F"
            h={7}
            w={62}
            flexDirection={"row"}
            borderRadius={15}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <StarIconSolid
              size={22}
              style={{
                color: "yellow",
                marginRight: 3,
              }}
            />

            <Text color={"#fff"} fontWeight={"bold"}>
              {rating.toFixed(1)}
            </Text>
          </Box>
        </View>
        <Text>
          Visited {visitAtDateTime} · Written {reviewAtDateTime}
        </Text>
      </View>
    </View>
  )
}

export default ReviewCard
