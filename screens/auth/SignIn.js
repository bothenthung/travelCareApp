import {
  Button,
  Icon,
  Image,
  Input,
  NativeBaseProvider,
  Pressable,
  ScrollView,
  Text,
  View,
} from "native-base"

import React, { useContext, useState } from "react"
import { TouchableOpacity } from "react-native"
import { EyeIcon, EyeSlashIcon } from "react-native-heroicons/solid"
import { SafeAreaView } from "react-native-safe-area-context"
import { AuthContext } from "../../context/AuthContext"
import Spinner from "react-native-loading-spinner-overlay"

const SignIn = ({ navigation }) => {
  const [username, setUsername] = useState(null)
  const [password, setPassword] = useState(null)
  const { isLoading, login } = useContext(AuthContext)

  const [show, setShow] = React.useState(false)
  return (
    <NativeBaseProvider>
      <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Spinner visible={isLoading} />
          <View mb={10} flexDirection={"row"} ml={6}>
            <Text fontSize={40} color={"#32A4FC"}>
              Travel
            </Text>
            <Text fontSize={40} fontWeight={"bold"} color={"#DB147F"}>
              {" "}
              Care
            </Text>
          </View>
          <Image
            source={require("../../assets/SignIn1.png")}
            alt="Welcome avatar"
            mb={10}
          />

          <View mx={7}>
            <Input
              borderRadius={5}
              borderWidth={3}
              placeholder="Username"
              fontSize={16}
              mb={4}
              height={"12"}
              value={username}
              onChangeText={(text) => setUsername(text)}
            ></Input>
            <Input
              borderRadius={5}
              value={password}
              onChangeText={(text) => setPassword(text)}
              borderWidth={3}
              fontSize={16}
              mb={4}
              height={"12"}
              type={show ? "text" : "password"}
              InputRightElement={
                <Pressable onPress={() => setShow(!show)}>
                  <Icon
                    as={show ? <EyeIcon /> : <EyeSlashIcon />}
                    size={5}
                    mr="2"
                    color="muted.400"
                  />
                </Pressable>
              }
              placeholder="Password"
            ></Input>
            <TouchableOpacity
              onPress={() => navigation.navigate("RecoverAccountScreen")}
            >
              <View alignItems={"flex-end"} mt={3}>
                <Text textDecorationLine={"underline"}>Forgot password?</Text>
              </View>
            </TouchableOpacity>
            <Button
              backgroundColor={"#32A4FC"}
              shadow={"3"}
              borderRadius={9}
              my={5}
              onPress={() => {
                login(username, password)
              }}
            >
              <Text color={"#fff"} fontSize={20}>
                Sign In
              </Text>
            </Button>
            <TouchableOpacity
              onPress={() => navigation.navigate("SignUpScreen")}
            >
              <View alignItems={"center"}>
                <Text fontSize={15} mb={10} textDecorationLine={"underline"}>
                  Sign up now
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </NativeBaseProvider>
  )
}

export default SignIn
