import React, { useContext, useState } from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import * as ImagePicker from "expo-image-picker"
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
  ArrowUturnLeftIcon,
  CheckCircleIcon,
  MapPinIcon,
  PencilSquareIcon,
  PhoneIcon,
  PhotoIcon,
} from "react-native-heroicons/solid"
import ReviewCol from "../../components/ReviewCol"
import { Modal, TouchableOpacity } from "react-native"
import { AuthContext } from "../../../context/AuthContext"
import { BASE_URL } from "../../../config"
import axios from "axios"

const Profile = ({ navigation }) => {
  const { logout, userInfo } = useContext(AuthContext)
  const { axiosInstance, userToken } = useContext(AuthContext)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }
  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  const handleSaveImage = async () => {
    try {
      const formData = new FormData()
      formData.append("image", {
        uri: selectedImage,
        name: "profileImage.jpg",
        type: "image/jpeg",
      })

      const token = await userToken
      const response = await axios.patch(
        `${BASE_URL}/user/update-profile-image`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
            accept: "application/json",
          },
        }
      )

      console.log("Lưu ảnh thành công")
    } catch (error) {
      console.error("Lỗi khi lưu ảnh", error)
    }
  }

  const handleSelectImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync()

    if (!result.canceled) {
      const selectedAsset = result.assets[0]
      setSelectedImage(selectedAsset.uri)
    }
  }

  return (
    <NativeBaseProvider>
      <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View mx={4} mb={4} backgroundColor={"#fff"}>
            <View flexDirection={"row"} alignItems={"center"} mb={4} mt={8}>
              <Text fontSize="4xl" flex="1" fontWeight={"medium"}>
                Profile
              </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate("EditProfileScreen")}
              >
                <PencilSquareIcon size={30} color={"#32A4FC"} />
              </TouchableOpacity>
            </View>
            <View flexDirection={"row"} alignItems={"center"} mb={"8"}>
              <TouchableOpacity onPress={handleOpenModal}>
                <Image
                  source={{
                    uri: selectedImage || userInfo.user.profileImageUrl,
                  }}
                  rounded={"full"}
                  borderColor="rgb(50, 164, 252)"
                  borderWidth={3}
                  alt={"Avatar"}
                  h={60}
                  w={60}
                  ml={4}
                  mr={5}
                ></Image>
              </TouchableOpacity>
              <Modal visible={isModalOpen} animationType="fade">
                <View style={{ flex: 1, backgroundColor: "black" }}>
                  <Image
                    source={{
                      uri: userInfo.user.profileImageUrl,
                    }}
                    style={{ flex: 1 }}
                    resizeMode="contain"
                    alt={"Avatar"}
                  />
                  <View
                    style={{
                      position: "absolute",
                      bottom: 35,
                      left: 20,
                      right: 20,
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <TouchableOpacity onPress={handleCloseModal}>
                      <ArrowUturnLeftIcon
                        name="close-circle"
                        size={40}
                        color="white"
                      />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleSelectImage}>
                      <PhotoIcon name="save" size={40} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleSaveImage}>
                      <CheckCircleIcon name="save" size={40} color="white" />
                    </TouchableOpacity>
                  </View>
                </View>
              </Modal>
              <View mb={2}>
                <Text fontSize={22}>
                  {userInfo.user.firstName} {userInfo.user.lastName}
                </Text>
              </View>
            </View>

            <View>
              <View flexDirection={"row"} alignItems={"center"} mb={2}></View>
              <View flexDirection={"row"} alignItems={"center"} mb={2}>
                <PhoneIcon size={25} />
                <Text ml={3}>{userInfo.user.phoneNumber}</Text>
              </View>
            </View>
            <Box h={0.5} backgroundColor={"#DB147F"} mb={2} />
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
            <View flex={1} h={200}></View>
            <Button
              backgroundColor={"#32A4FC"}
              shadow={"3"}
              mt={8}
              onPress={() => {
                logout()
              }}
            >
              <Text color={"#fff"} fontSize={20}>
                Đăng xuất
              </Text>
            </Button>
          </View>
        </ScrollView>
      </SafeAreaView>
    </NativeBaseProvider>
  )
}

export default Profile
