import React from "react"
import { SafeAreaView } from "react-native-safe-area-context"

import {
  Button,
  IconButton,
  Image,
  NativeBaseProvider,
  ScrollView,
  Text,
  View,
} from "native-base"
import { PlusCircleIcon } from "react-native-heroicons/outline"

const Evaluate = ({ navigation }) => {
  return (
    <NativeBaseProvider>
      <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View mx={4}>
            <Text fontSize="4xl" flex="1">
              Review
            </Text>
            <View flexDirection={"row"} alignItems={"center"} mt={3} mb={3}>
              <Image
                source={require("../../assets/favicon.png")}
                rounded={"full"}
                borderColor="rgb(50, 164, 252)"
                borderWidth={3}
                alt={"Avatar"}
                h={60}
                w={60}
                mr={5}
              ></Image>
              <View mb={2}>
                <Text fontSize={22}>Nguyễn Văn Thịnh</Text>
                <Text>0 đóng góp</Text>
              </View>
            </View>
            <View flexDirection={"row"}>
              <Button
                mr={5}
                backgroundColor={"#fff"}
                borderRadius={22}
                borderColor={"#DB147F"}
                borderWidth={2}
              >
                <Text>Write a review</Text>
              </Button>
              <Button
                backgroundColor={"#fff"}
                borderRadius={50}
                borderColor={"#DB147F"}
                borderWidth={2}
              >
                <Text>Upload photos</Text>
              </Button>
            </View>
          </View>

          <View>
            <Image
              source={require("../../assets/image7.png")}
              mt={5}
              alt={"Avatar"}
            ></Image>
            <Text
              color={"#fffd"}
              fontWeight="bold"
              fontSize={30}
              ml={4}
              mr={20}
              position={"absolute"}
              top={20}
            >
              We want you to write a review
            </Text>
            <PlusCircleIcon
              size={80}
              position={"absolute"}
              top={430}
              style={{ marginLeft: 300 }}
              color={"#32A4FC"}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </NativeBaseProvider>
  )
}

export default Evaluate
