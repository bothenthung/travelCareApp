import React from "react"
import { SafeAreaView } from "react-native-safe-area-context"

import {
  Box,
  Button,
  Image,
  NativeBaseProvider,
  ScrollView,
  Text,
  View,
} from "native-base"
import {
  MapPinIcon,
  PencilSquareIcon,
  PhoneIcon,
} from "react-native-heroicons/solid"
import ReviewCol from "./components/ReviewCol"
import { TouchableOpacity } from "react-native"

const Profile = ({ navigation }) => {
  return (
    <NativeBaseProvider>
      <SafeAreaView flex="1">
        <ScrollView>
          <View backgroundColor={"#fff"}>
            <View mx={4} mt={1} mb={4}>
              <View flexDirection={"row"} alignItems={"center"} mb={4}>
                <Text fontSize="4xl" flex="1">
                  Tài Khoản
                </Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate("EditProfile")}
                >
                  <PencilSquareIcon size={30} color={"#32A4FC"} />
                </TouchableOpacity>
              </View>
              <View flexDirection={"row"} alignItems={"center"}>
                <Image
                  source={require("../assets/favicon.png")}
                  rounded={"full"}
                  borderColor="rgb(50, 164, 252)"
                  borderWidth={3}
                  alt={"Avatar"}
                  h={60}
                  w={60}
                  ml={4}
                  mr={5}
                ></Image>
                <View mb={2}>
                  <Text fontSize={22}>Nguyễn Văn Thịnh</Text>
                  <Text>Đã tham gia vào 2023</Text>
                  <Text>0 đóng góp</Text>
                </View>
              </View>
              <Box h={0.5} backgroundColor={"#DB147F"} mb={5} />
              <View>
                <View flexDirection={"row"} alignItems={"center"} mb={2}>
                  <MapPinIcon size={25} />
                  <Text ml={3}>Đến từ Quảng Nam, Việt Nam</Text>
                </View>
                <View flexDirection={"row"} alignItems={"center"} mb={2}>
                  <PhoneIcon size={25} />
                  <Text ml={3}>0795989044</Text>
                </View>
              </View>
              <Box h={0.5} backgroundColor={"#DB147F"} mb={5} />
              <View mb={2}>
                <Text fontSize={"xl"} fontWeight={"bold"} mb={1}>
                  Review
                </Text>
                <Text textAlign={"center"} mb={2}>
                  Bạn chưa có bài đăng nào
                </Text>
                <Button backgroundColor={"#32A4FC"} shadow={"3"}>
                  <Text color={"#fff"} fontSize={20}>
                    Tạo bài đăng
                  </Text>
                </Button>
              </View>
              <Box h={0.5} backgroundColor={"#DB147F"} mb={5} />
              <ReviewCol />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </NativeBaseProvider>
  )
}

export default Profile
