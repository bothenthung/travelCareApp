import {
  Button,
  ChevronLeftIcon,
  Icon,
  Input,
  NativeBaseProvider,
  Pressable,
  ScrollView,
  Spinner,
  Text,
  View,
} from "native-base"
import React, { useContext, useState } from "react"
import { TouchableOpacity } from "react-native"
import { EyeIcon, EyeSlashIcon } from "react-native-heroicons/solid"

import { SafeAreaView } from "react-native-safe-area-context"
import { AuthContext } from "../../context/AuthContext"

const SignUp = ({ navigation }) => {
  const [show, setShow] = React.useState(false)
  const [showcf, setShowcf] = React.useState(false)

  const [username, setUsername] = useState(null)
  const [password, setPassword] = useState(null)
  const [email, setEmail] = useState(null)
  const [firstName, setfirstName] = useState(null)
  const [lastName, setlastName] = useState(null)

  const { isLoading, register } = useContext(AuthContext)

  return (
    <NativeBaseProvider>
      <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
        <ScrollView>
          <View mx={5}>
            <View
              flexDirection={"row"}
              alignItems={"center"}
              justifyContent={"center"}
              mb={8}
            >
              <TouchableOpacity
                onPress={() => navigation.navigate("SignInScreen")}
              >
                <ChevronLeftIcon />
              </TouchableOpacity>
              <View flex={1}>
                <Text fontSize={"md"} textAlign={"center"}>
                  Fill in the information
                </Text>
              </View>
            </View>

            <Input
              borderRadius={5}
              borderWidth={3}
              placeholder="First Name"
              fontSize={16}
              mb={4}
              height={"12"}
              value={firstName}
              onChangeText={(text) => setfirstName(text)}
            ></Input>
            <Input
              borderRadius={5}
              borderWidth={3}
              placeholder="Last Name"
              fontSize={16}
              mb={4}
              height={"12"}
              value={lastName}
              onChangeText={(text) => setlastName(text)}
            ></Input>
            <Input
              borderRadius={5}
              borderWidth={3}
              placeholder="Email"
              fontSize={16}
              mb={4}
              height={"12"}
              value={email}
              onChangeText={(text) => setEmail(text)}
            ></Input>
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
              borderWidth={3}
              fontSize={16}
              mb={4}
              height={"12"}
              type={show ? "text" : "password"}
              value={password}
              onChangeText={(text) => setPassword(text)}
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
            {/* <Input
              borderRadius={5}
              borderWidth={3}
              fontSize={16}
              mb={4}
              height={"12"}
              type={showcf ? "text" : "password"}
              value={password}
              onChangeText={(text) => setPassword(text)}
              InputRightElement={
                <Pressable onPress={() => setShowcf(!showcf)}>
                  <Icon
                    as={showcf ? <EyeIcon /> : <EyeSlashIcon />}
                    size={5}
                    mr="2"
                    color="muted.400"
                  />
                </Pressable>
              }
              placeholder="Confirm password"
            ></Input> */}
            <Button
              backgroundColor={"#32A4FC"}
              shadow={"3"}
              borderRadius={9}
              my={3}
              onPress={() => {
                register(username, email, password, firstName, lastName)
              }}
            >
              <Text color={"#fff"} fontSize={20}>
                Sign Up
              </Text>
            </Button>
          </View>
        </ScrollView>
      </SafeAreaView>
    </NativeBaseProvider>
  )
}

export default SignUp
