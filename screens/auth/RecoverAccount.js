import { Button, ChevronLeftIcon, Image, Input, Text, View } from "native-base"

import React from "react"
import { TouchableOpacity } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

const RecoverAccount = ({ navigation }) => {
  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <View mx={5}>
        <View>
          <View
            flexDirection={"row"}
            alignItems={"center"}
            mb={8}
            justifyContent={"center"}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate("SignInScreen")}
            >
              <ChevronLeftIcon />
            </TouchableOpacity>
            <View flex={1}>
              <Text fontSize={"md"} textAlign={"center"} mr={5}>
                Recover Account
              </Text>
            </View>
          </View>

          <Image
            source={require("../../assets/recoverscreen.png")}
            alt="Recover Image"
            mb={10}
          />
        </View>
        <View>
          <Input
            borderRadius={5}
            borderWidth={3}
            placeholder="Email"
            fontSize={16}
            mb={4}
            height={"12"}
          ></Input>
          <Button
            backgroundColor={"#32A4FC"}
            shadow={"3"}
            borderRadius={9}
            my={5}
            onPress={() => navigation.navigate("TabNavigation")}
          >
            <Text color={"#fff"} fontSize={20}>
              Get code
            </Text>
          </Button>

          <Input
            borderRadius={5}
            borderWidth={3}
            placeholder="Enter your code"
            fontSize={16}
            mb={4}
            height={"12"}
          ></Input>
          <Input
            borderRadius={5}
            borderWidth={3}
            placeholder="New password"
            fontSize={16}
            mb={4}
            height={"12"}
          ></Input>
          <Input
            borderRadius={5}
            borderWidth={3}
            placeholder="Confirm password"
            fontSize={16}
            mb={4}
            height={"12"}
          ></Input>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default RecoverAccount
