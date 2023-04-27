import React from "react"
import { NativeBaseProvider, ScrollView, Text, VStack, View } from "native-base"
import { SafeAreaView } from "react-native-safe-area-context"
import { ArrowRightIcon } from "react-native-heroicons/outline"
import HotelCard from "./HotelCard"

const FeaturedRow = ({ id, title, description }) => {
  return (
    <VStack>
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
            <ScrollView
              horizontal
              px={"4"}
              showsHorizontalScrollIndicator={false}
            >
              <HotelCard
                id={123}
                imgUrl="https://images.squarespace-cdn.com/content/v1/5aadf482aa49a1d810879b88/1626698419120-J7CH9BPMB2YI728SLFPN/1.jpg "
                title="Furama Da Nang"
                rating={4.5}
                genre="Japanese"
                address="123 Ton Duc Thang"
                short_decription="This is a short decription"
              ></HotelCard>
              <HotelCard
                id={123}
                imgUrl="https://images.squarespace-cdn.com/content/v1/5aadf482aa49a1d810879b88/1626698419120-J7CH9BPMB2YI728SLFPN/1.jpg "
                title="Furama Da Nang"
                rating={4.5}
                genre="Japanese"
                address="123 Ton Duc Thang"
                short_decription="This is a short decription"
              ></HotelCard>
              <HotelCard
                id={123}
                imgUrl="https://images.squarespace-cdn.com/content/v1/5aadf482aa49a1d810879b88/1626698419120-J7CH9BPMB2YI728SLFPN/1.jpg "
                title="Furama Da Nang"
                rating={4.5}
                genre="Japanese"
                address="123 Ton Duc Thang"
                short_decription="This is a short decription"
              ></HotelCard>
            </ScrollView>
          </View>
        </View>
      </View>
    </VStack>
  )
}

export default FeaturedRow
