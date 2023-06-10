import {
  Button,
  ChevronLeftIcon,
  Input,
  NativeBaseProvider,
  ScrollView,
  View,
  Text,
  Image,
  Radio,
} from "native-base"
import * as ImagePicker from "expo-image-picker"
import React from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import { TouchableOpacity, StyleSheet, Modal } from "react-native"
import { useEffect, useState, useContext } from "react"
import { AxiosContext } from "../../context/AxiosContext"
import { Dropdown } from "react-native-element-dropdown"
import { AuthContext } from "../../context/AuthContext"
import axios from "axios"
import { BASE_URL } from "../../config"
import {
  ArrowUturnLeftIcon,
  CheckCircleIcon,
  PhotoIcon,
} from "react-native-heroicons/solid"

const AddLocationScreen = ({ navigation }) => {
  const {
    getCountries,
    getProvinces,
    getDistricts,
    getWards,
    provinces,
    countries,
    districts,
    wards,
    getCategories,
    categories,
  } = useContext(AxiosContext)

  const { userInfo } = useContext(AuthContext)

  const [isModalOpen, setIsModalOpen] = useState(false)

  const { userToken } = useContext(AuthContext)
  const [locationName, setLocationName] = useState()
  const [category, setCategory] = useState()
  const [countryId, setCountryId] = useState()
  const [provinceId, setProvinceId] = useState()
  const [districtId, setDistrictId] = useState()
  const [wardId, setWardId] = useState()
  const [streetAddress, setStreetAddress] = useState()
  const [description, setDescription] = useState()
  const [imagesUrl, setImagesUrl] = useState([])
  const [isHotel, setIsHotel] = useState(false)
  useEffect(() => {
    const fetchData = async () => {
      await getCountries()
      await getCategories()
    }
    fetchData()
  }, [])
  const addLocation = async () => {
    try {
      const formData = new FormData()
      formData.append("name", locationName)
      formData.append("categories", category)
      formData.append("countryId", countryId)
      formData.append("provinceId", provinceId)
      formData.append("districtId", districtId)
      formData.append("wardId", wardId)
      formData.append("streetAddress", streetAddress)
      formData.append("description", description)
      formData.append("isHotel", String(isHotel))
      imagesUrl.forEach((imageUrl, index) => {
        formData.append("images", {
          uri: imageUrl,
          name: `profileImage_${index}.jpg`,
          type: "image/jpeg",
        })
      })

      const token = await userToken
      const response = await axios.post(`${BASE_URL}/locations`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
          accept: "*/*",
        },
      })

      let locationInfo = response.data
      console.log(locationInfo)
    } catch (error) {
      console.log(`addLocation error ${error}`)
    }
  }
  const handleOpenModal = () => {
    setIsModalOpen(true)
  }
  const handleCloseModal = () => {
    setIsModalOpen(false)
  }
  const handleSelectImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsMultipleSelection: true,
    })

    if (!result.canceled) {
      const selectedAsset = result.assets.map((img) => img.uri)
      setImagesUrl(selectedAsset)
    }
  }

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
                  onPress={() => navigation.navigate("DiscoverScreen")}
                >
                  <ChevronLeftIcon />
                </TouchableOpacity>
                <View flex={1}>
                  <Text fontSize={"md"} textAlign={"center"} mr={5}>
                    Add location
                  </Text>
                </View>
              </View>
            </View>
            <Input
              borderRadius={5}
              borderWidth={3}
              placeholder="Location Name"
              fontSize={16}
              mb={"20px"}
              height={"12"}
              onChangeText={(text) => setLocationName(text)}
              borderColor={"rgba(180, 180, 180, 1)"}
            ></Input>
            <Dropdown
              style={styles.dropdown}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={categories}
              search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder="Categories"
              searchPlaceholder="Search..."
              onChange={(item) => setCategory(item.value)}
            />
            <Dropdown
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
              onChange={(item) => {
                setCountryId(item.value)
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
              onChange={(item) => {
                setProvinceId(item.value)
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
              onFocus={() => {}}
              onChange={(item) => {
                setDistrictId(item.value)
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
              onChange={(item) => {
                setWardId(item.value)
              }}
            />
            <Input
              borderRadius={5}
              borderWidth={3}
              placeholder="Street Address"
              fontSize={16}
              mb={"20px"}
              height={"12"}
              onChangeText={(text) => setStreetAddress(text)}
              borderColor={"rgba(180, 180, 180, 1)"}
            ></Input>
            <Input
              borderRadius={5}
              borderWidth={3}
              placeholder="Description"
              fontSize={16}
              mb={"20px"}
              height={"12"}
              onChangeText={(text) => setDescription(text)}
              borderColor={"rgba(180, 180, 180, 1)"}
            ></Input>
            <TouchableOpacity onPress={handleOpenModal}>
              <View
                h={12}
                borderColor={"rgba(180, 180, 180, 1)"}
                borderWidth={3}
                borderRadius={5}
                justifyContent={"center"}
              >
                <Text
                  ml={"12px"}
                  color={"rgba(180, 180, 180, 1)"}
                  fontSize={16}
                >
                  Upload Image
                </Text>
              </View>
            </TouchableOpacity>
            <Text mb={"20px"} fontSize={15}>
              Image selected x{imagesUrl.length}
            </Text>

            <Modal visible={isModalOpen} animationType="fade">
              <View style={{ flex: 1, backgroundColor: "black" }}>
                <Image
                  source={imagesUrl ? { uri: imagesUrl[0] } : null}
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
                </View>
              </View>
            </Modal>
            <Button
              backgroundColor={"#32A4FC"}
              shadow={"3"}
              onPress={addLocation}
            >
              <Text color={"#fff"} fontSize={20}>
                Add Location
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
export default AddLocationScreen
