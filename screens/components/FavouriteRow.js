import React from "react"
import { NativeBaseProvider, ScrollView, Text, VStack, View } from "native-base"
import { SafeAreaView } from "react-native-safe-area-context"
import { ArrowRightIcon } from "react-native-heroicons/outline"

import FavouriteCard from "./FavouriteCard"

const FavouriteRow = ({ id, title, description }) => {
  return (
    <VStack>
      <View>
        <View flexDirection={"row"} alignItems={"center"} px={4}>
          <Text fontSize={"xl"} flex={1} fontWeight={"bold"}>
            {title}
          </Text>
          <ArrowRightIcon />
        </View>

        <Text px={4}>{description}</Text>

        <View>
          <View>
            <ScrollView
              horizontal
              px={"4"}
              showsHorizontalScrollIndicator={false}
            >
              <FavouriteCard
                id={123}
                imgUrl="https://www.journeyera.com/wp-content/uploads/2019/11/WHERE-TO-STAY-PAPUA-NEW-GUINEA-a-RESORTS-1Vanimo-Surf-Lodge-1-2.jpg "
                title="Resort Da Nang"
                rating={4.5}
                genre="Đà Nẵng, Việt Nam"
                address="123 Ton Duc Thang"
                short_decription="This is a short decription"
              ></FavouriteCard>
              <FavouriteCard
                id={123}
                imgUrl="https://www.journeyera.com/wp-content/uploads/2019/11/WHERE-TO-STAY-PAPUA-NEW-GUINEA-a-RESORTS-1Vanimo-Surf-Lodge-1-2.jpg "
                title="Resort Da Nang"
                rating={4.5}
                genre="Đà Nẵng, Việt Nam"
                address="123 Ton Duc Thang"
                short_decription="This is a short decription"
              ></FavouriteCard>
              <FavouriteCard
                id={123}
                imgUrl="https://www.journeyera.com/wp-content/uploads/2019/11/WHERE-TO-STAY-PAPUA-NEW-GUINEA-a-RESORTS-1Vanimo-Surf-Lodge-1-2.jpg "
                title="Resort Da Nang"
                rating={4.5}
                genre="Đà Nẵng, Việt Nam"
                address="123 Ton Duc Thang"
                short_decription="This is a short decription"
              ></FavouriteCard>
            </ScrollView>
          </View>
        </View>
      </View>
    </VStack>
  )
}

export default FavouriteRow
