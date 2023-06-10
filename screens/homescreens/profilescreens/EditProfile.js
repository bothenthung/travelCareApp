import {
  ChevronLeftIcon,
  Input,
  NativeBaseProvider,
  ScrollView,
  Text,
  View,
  Pressable,
  Button,
  Icon,
} from "native-base"
import React, { useContext, useEffect } from "react"
import { useState } from "react"
import { TouchableOpacity, StyleSheet } from "react-native"
import { Dropdown } from "react-native-element-dropdown"
import { SafeAreaView } from "react-native-safe-area-context"
import { AxiosContext } from "../../../context/AxiosContext"
import axios from "axios"
import { BASE_URL } from "../../../config"
import { AuthContext } from "../../../context/AuthContext"
import { MapPinIcon, PhoneIcon, UserIcon } from "react-native-heroicons/solid"
import * as ImagePicker from "expo-image-picker"

const EditProfile = ({ navigation }) => {
  const [countryId, setCountry] = useState(null)
  const [provinceId, setProvince] = useState(null)
  const [districtId, setDistrict] = useState(null)
  const [wardId, setWard] = useState(null)
  const [userInformation, setuserInformation] = useState({})
  const {
    getCountries,
    getProvinces,
    getDistricts,
    getWards,
    provinces,
    countries,
    districts,
    wards,
    getUser,
  } = useContext(AxiosContext)
  const { userToken } = useContext(AuthContext)

  const pickImage = async () => {
    try {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync()
      if (status !== "granted") {
        console.log("Permission denied")
        return
      }
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        quality: 1,
      })
      if (!result.cancelled) {
        console.log(result.uri)
      }
    } catch (error) {
      console.log("Error picking image:", error)
    }
  }
  const updateProfile = async () => {
    try {
      const response = await axios.patch(
        `${BASE_URL}/user/update-user`,
        {
          firstName: userInformation.firstName,
          lastName: userInformation.lastName,
          phoneNumber: userInformation.phoneNumber,
          countryId: userInformation?.address?.country?.id,
          provinceId: userInformation?.address?.province?.id,
          districtId: userInformation?.address?.district?.id,
          wardId: userInformation?.address?.ward?.id,
          streetAddress: userInformation?.address?.streetAddress,
        },
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      )
      console.log("Thông tin đã được cập nhật thành công!")
    } catch (error) {
      console.log(`Lỗi khi cập nhật thông tin: ${error}`)
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const UserInfo = await getUser()
      await getCountries()
      await getProvinces(UserInfo?.address?.country?.id)
      await getDistricts(UserInfo?.address?.province?.id)
      await getWards(UserInfo?.address?.district?.id)
      setuserInformation(UserInfo)
      setCountry(UserInfo?.address?.country?.id)
      setProvince(UserInfo?.address?.province?.id)
      setDistrict(UserInfo?.address?.district?.id)
      setWard(UserInfo?.address?.ward?.id)
    }

    fetchData()
  }, [])
  return (
    <NativeBaseProvider>
      <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
        <ScrollView>
          <View mx={5}>
            <View>
              <View
                flexDirection={"row"}
                alignItems={"center"}
                mb={8}
                justifyContent={"center"}
              >
                <TouchableOpacity
                  onPress={() => navigation.navigate("ProfileScreen")}
                >
                  <ChevronLeftIcon />
                </TouchableOpacity>
                <View flex={1}>
                  <Text fontSize={"md"} textAlign={"center"} mr={5}>
                    Edit Profile
                  </Text>
                </View>
              </View>
            </View>

            <Input
              InputLeftElement={
                <Icon as={<UserIcon />} ml={2} color={"#DB147F"} />
              }
              borderRadius={5}
              borderWidth={3}
              placeholder="First Name"
              fontSize={16}
              mb={"20px"}
              height={"12"}
              value={userInformation.firstName}
              onChangeText={(firstName) => {
                setuserInformation((prev) => {
                  return { ...prev, firstName }
                })
              }}
              borderColor={"rgba(180, 180, 180, 1)"}
            ></Input>

            <Input
              InputLeftElement={
                <Icon as={<UserIcon />} ml={2} color={"#DB147F"} />
              }
              borderRadius={5}
              borderWidth={3}
              placeholder="Last Name"
              fontSize={16}
              mb={"20px"}
              height={"12"}
              value={userInformation.lastName}
              onChangeText={(lastName) =>
                setuserInformation((prev) => {
                  return { ...prev, lastName }
                })
              }
              borderColor={"rgba(180, 180, 180, 1)"}
            ></Input>

            <Input
              InputLeftElement={
                <Icon as={<PhoneIcon />} ml={2} color={"#DB147F"} />
              }
              borderRadius={5}
              borderWidth={3}
              placeholder="Phone number"
              fontSize={16}
              mb={"20px"}
              height={"12"}
              value={userInformation.phoneNumber}
              onChangeText={(phoneNumber) =>
                setuserInformation((prev) => {
                  return { ...prev, phoneNumber }
                })
              }
              borderColor={"rgba(180, 180, 180, 1)"}
            ></Input>

            <Dropdown
              renderLeftIcon={() => {
                ;<UserIcon />
              }}
              style={styles.dropdown}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={countries}
              search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder="Country"
              searchPlaceholder="Search..."
              value={countryId}
              onChange={(item) => {
                setuserInformation((prev) => {
                  return {
                    ...prev,
                    address: {
                      ...prev?.address,
                      country: {
                        id: item.value,
                      },
                    },
                  }
                })
                getProvinces(item.value)
              }}
            />

            <Dropdown
              style={styles.dropdown}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={provinces}
              search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder="Province"
              searchPlaceholder="Search..."
              value={provinceId}
              onFocus={() => {}}
              onChange={(item) => {
                setuserInformation((prev) => {
                  return {
                    ...prev,
                    address: {
                      ...prev?.address,
                      province: {
                        id: item.value,
                      },
                    },
                  }
                })
                setDistrict(null)
                setWard(null)
                getDistricts(item.value)
              }}
            />
            <Dropdown
              style={styles.dropdown}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={districts}
              search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder="District"
              searchPlaceholder="Search..."
              value={districtId}
              onFocus={() => {}}
              onChange={(item) => {
                setuserInformation((prev) => {
                  return {
                    ...prev,
                    address: {
                      ...prev?.address,
                      district: {
                        id: item.value,
                      },
                    },
                  }
                })
                setWard(null)
                getWards(item.value)
              }}
            />

            <Dropdown
              style={styles.dropdown}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={wards}
              search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder="Ward"
              searchPlaceholder="Search..."
              value={wardId}
              onChange={(item) => {
                setuserInformation((prev) => {
                  return {
                    ...prev,
                    address: {
                      ...prev?.address,
                      ward: {
                        id: item.value,
                      },
                    },
                  }
                })
              }}
            />

            <Input
              InputLeftElement={
                <Icon as={<MapPinIcon />} ml={2} color={"#DB147F"} />
              }
              borderRadius={5}
              borderWidth={3}
              placeholder="Street Address"
              fontSize={16}
              mb={"20px"}
              height={"12"}
              value={userInformation?.address?.streetAddress}
              onChangeText={(streetAddress) => {
                setuserInformation((prev) => ({
                  ...prev,
                  address: {
                    ...prev?.address,
                    streetAddress: streetAddress,
                  },
                }))
              }}
              borderColor={"rgba(180, 180, 180, 1)"}
            ></Input>
            <Button
              backgroundColor={"#32A4FC"}
              shadow={"3"}
              onPress={() => {
                updateProfile()
                navigation.navigate("ProfileScreen")
              }}
            >
              <Text color={"#fff"} fontSize={20}>
                Update profile
              </Text>
            </Button>
          </View>
        </ScrollView>
      </SafeAreaView>
    </NativeBaseProvider>
  )
}

const styles = StyleSheet.create({
  dropdown: {
    opacity: 1,
    marginBottom: 20,
    height: 50,
    borderWidth: 3,
    borderRadius: 5,
    width: "100%",

    borderColor: "rgba(180, 180, 180, 1)",
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
    marginLeft: 10,
    color: "rgba(180, 180, 180, 1)",
  },
  selectedTextStyle: {
    fontSize: 16,
    marginLeft: 10,
  },
  iconStyle: {
    width: 30,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
})
export default EditProfile
