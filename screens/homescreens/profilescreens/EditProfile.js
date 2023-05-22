import {
  ChevronLeftIcon,
  NativeBaseProvider,
  ScrollView,
  Text,
  View,
} from "native-base"
import React from "react"
import { TouchableOpacity } from "react-native"
import { ChevronDoubleLeftIcon } from "react-native-heroicons/solid"
import { SafeAreaView } from "react-native-safe-area-context"

const EditProfile = ({ navigation }) => {
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
          </View>
        </ScrollView>
      </SafeAreaView>
    </NativeBaseProvider>
  )
}

export default EditProfile
