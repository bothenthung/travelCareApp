import {
  Button,
  Image,
  Input,
  NativeBaseProvider,
  ScrollView,
  Text,
  View,
} from "native-base"
import React from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import { AxiosContext } from "../../context/AxiosContext"
import { Dropdown } from "react-native-element-dropdown"
import { useContext, useState, useEffect } from "react"
import { StyleSheet, TouchableOpacity, Platform, Modal } from "react-native"
import DateTimePicker from "@react-native-community/datetimepicker"
import { Rating } from "react-native-ratings"
import { AuthContext } from "../../context/AuthContext"
import { ArrowUturnLeftIcon, PhotoIcon } from "react-native-heroicons/solid"
import * as ImagePicker from "expo-image-picker"
import axios from "axios"
import { BASE_URL } from "../../config"
const AddReview = ({ route, navigation }) => {
  const { userToken } = useContext(AuthContext)
  const { getTripType, tripTypes } = useContext(AxiosContext)
  const [tripType, setTripType] = useState()
  const [date, setDate] = useState(new Date())
  const [selectDate, setSelectDate] = useState()
  const [title, setTitle] = useState()
  const [content, setContent] = useState()
  const [rating, setRating] = useState(3)
  const [imagesUrl, setImagesUrl] = useState([])
  const { namelocation, locationIDs } = route.params

  const [isModalOpen, setIsModalOpen] = useState(false)
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

  const [showPicker, setShowPicker] = useState(false)

  const toggleDatepicker = () => {
    setShowPicker(!showPicker)
  }
  const formartDate = (rawDate) => {
    let date = new Date(rawDate)
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    let day = date.getDate() + 1
    let time = date.getTime()
    month = month < 10 ? `0${month}` : month
    day = day < 10 ? `0${day}` : day

    return `${day}-${month}-${year}:${time}`
  }

  const onChange = ({ type }, selectedDate) => {
    if (type == "set") {
      const currentDate = selectedDate
      setDate(currentDate)

      if (Platform.OS === "android") {
        toggleDatepicker()
        setSelectDate(currentDate.toDateString())
      }
    } else {
      toggleDatepicker()
    }
  }

  const confirmIOSDate = () => {
    setSelectDate(date.toDateString())
    toggleDatepicker()
  }
  const showDate = () => {
    console.log(date)
  }

  useEffect(() => {
    const fetchData = async () => {
      await getTripType()
    }
    fetchData()
  }, [])
  const addReview = async () => {
    try {
      const formData = new FormData()
      formData.append("locationId", locationIDs)
      formData.append("title", title)
      formData.append("content", content)
      formData.append("rating", rating)
      formData.append("tripTime", date.toISOString())
      formData.append("tripTypeId", tripType)

      imagesUrl.forEach((imageUrl, index) => {
        formData.append("images", {
          uri: imageUrl,
          name: `reviewImage_${index}.jpg`,
          type: "image/jpeg",
        })
      })

      const token = await userToken
      const response = await axios
        .post(`${BASE_URL}/review/create-review`, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
            accept: "*/*",
          },
        })
        .catch((error) => {
          console.log(error.response.data)
        })

      let reviewInfo = response.data
    } catch (error) {
      console.log(`addLocation error ${error}`)
    }
  }

  return (
    <NativeBaseProvider>
      <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
        <View mx={4} mb={10} mt={8}>
          <Text fontSize={"2xl"}>
            Write a few lines of review about {namelocation}
          </Text>
        </View>
        <ScrollView>
          <View mx={4}>
            <Input
              borderRadius={5}
              borderWidth={3}
              placeholder="Title"
              fontSize={16}
              mb={"20px"}
              height={"12"}
              value={title}
              onChangeText={(prev) => {
                setTitle(prev)
              }}
              borderColor={"rgba(180, 180, 180, 1)"}
            ></Input>
            <Input
              borderRadius={5}
              borderWidth={3}
              placeholder="Content"
              fontSize={16}
              mb={"20px"}
              height={"12"}
              value={content}
              onChangeText={(prev) => {
                setContent(prev)
              }}
              borderColor={"rgba(180, 180, 180, 1)"}
            ></Input>
            <Dropdown
              style={styles.dropdown}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={tripTypes}
              search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder="Trip Type"
              searchPlaceholder="Search..."
              onChange={(item) => setTripType(item.value)}
            />
            {!showPicker && (
              <TouchableOpacity onPress={toggleDatepicker}>
                <Input
                  h={12}
                  borderWidth={3}
                  w={"full"}
                  placeholder="Thu Jun 02 2023"
                  value={selectDate}
                  editable={false}
                  onPressIn={toggleDatepicker}
                  borderColor={"#b4b4b4"}
                />
              </TouchableOpacity>
            )}
            {showPicker && (
              <DateTimePicker
                style={{ height: 120, marginTop: -10 }}
                defa
                mode="date"
                display="spinner"
                value={date}
                onChange={onChange}
                maximumDate={new Date()}
              />
            )}

            {showPicker && (
              <View flexDirection={"row"} justifyContent={"space-around"}>
                <TouchableOpacity onPress={toggleDatepicker}>
                  <View>
                    <Text>Cancel</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={confirmIOSDate}>
                  <View>
                    <Text>Confirm</Text>
                  </View>
                </TouchableOpacity>
              </View>
            )}
            <Rating
              showRating
              onFinishRating={(value) => setRating(value)}
              style={{ paddingVertical: 10 }}
              jumpValue={0.5}
              fractions={1}
            />
            <Button
              backgroundColor={"#32A4FC"}
              shadow={"3"}
              onPress={handleOpenModal}
              mb={"20px"}
            >
              <Text color={"#fff"} fontSize={20}>
                Upload Image
              </Text>
            </Button>
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
              onPress={() => {
                addReview()
                navigation.navigate("DiscoverScreen")
              }}
            >
              <Text color={"#fff"} fontSize={20}>
                Add Review
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
export default AddReview
