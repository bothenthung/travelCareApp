import {
  Box,
  Button,
  FormControl,
  Link,
  ScrollView,
  Stack,
  Text,
  useToast,
} from "native-base"
import { StyledComponent } from "nativewind"
import { useState } from "react"
import { Image, KeyboardAvoidingView } from "react-native"
import {
  LockClosedIcon,
  UserIcon,
  EyeIcon,
  EyeSlashIcon,
} from "react-native-heroicons/solid"
import { SafeAreaView } from "react-native-safe-area-context"
import CustomInput from "../../components/common/CustomInput"
import Logo from "../../components/common/Logo"
import { Controller, useForm } from "react-hook-form"
import { signIn } from "@/utils/http"
import { setAccessTokenToLocal, setRefreshTokenToLocal } from "@/utils/common"

const SignIn = ({ navigation }) => {
  const toast = useToast()
  const [isShowPassword, setIsShowPassword] = useState(false)
  const { control, handleSubmit } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  })

  const onSubmit = async (data) => {
    try {
      const res = await signIn(data)
      const {
        tokens: { accessToken, refreshToken },
        user,
      } = res
      setAccessTokenToLocal(accessToken)
      setRefreshTokenToLocal(refreshToken)
      navigation.navigate("Home")
    } catch (error) {
      const errorMessage = error?.message || "Something went wrong"
      toast.show({
        render: () => (
          <Box
            bg="red.500"
            px={3}
            py={2}
            rounded="md"
            _text={{ color: "white", fontWeight: "bold" }}
          >
            {errorMessage}
          </Box>
        ),
        duration: 3000,
        placement: "top",
      })
    }
  }

  const handleShowHidePassword = (flag = false) => {
    setIsShowPassword(flag)
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <Stack alignItems="center" space={5}>
          <Box alignSelf="flex-start">
            <Logo />
          </Box>
          <StyledComponent
            component={Image}
            source={require("../../../assets/signInBg.png")}
            className="m-0"
          />
          <Stack width="full" px={4}>
            <StyledComponent
              component={FormControl}
              className="flex flex-col gap-4 box-border"
            >
              <Box width="full">
                <KeyboardAvoidingView>
                  <Controller
                    control={control}
                    rules={{
                      required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                      <CustomInput
                        placeholder="Account"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        className="text-[16px]"
                        InputLeftElement={<UserIcon />}
                      />
                    )}
                    name="username"
                  />
                </KeyboardAvoidingView>
              </Box>
              <Box width="full">
                <KeyboardAvoidingView>
                  <Controller
                    control={control}
                    rules={{
                      required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                      <CustomInput
                        placeholder="Password"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        InputLeftElement={
                          <LockClosedIcon
                            onTouchEnd={() => {
                              handleShowHidePassword(false)
                            }}
                          />
                        }
                        InputRightElement={
                          isShowPassword ? (
                            <EyeSlashIcon
                              onTouchEnd={() => {
                                handleShowHidePassword(false)
                              }}
                            />
                          ) : (
                            <EyeIcon
                              onTouchEnd={() => {
                                handleShowHidePassword(true)
                              }}
                            />
                          )
                        }
                        type={isShowPassword ? "text" : "password"}
                        className="text-[16px]"
                      />
                    )}
                    name="password"
                  />
                </KeyboardAvoidingView>
              </Box>
              <Link
                _text={{
                  fontSize: "xs",
                  fontWeight: "500",
                }}
                alignSelf="flex-end"
              >
                Forgot Password?
              </Link>
              <Button
                backgroundColor="secondary.900"
                width="full"
                _pressed={{
                  backgroundColor: "secondary.50",
                }}
                onPress={handleSubmit(onSubmit)}
              >
                <Text color="white">Sign In</Text>
              </Button>
              <StyledComponent
                component={Box}
                flexDirection="row"
                className="w-full"
              >
                <Text>Don't have an account? </Text>
                <Link
                  _text={{
                    fontWeight: "900",
                    textDecoration: "none",
                  }}
                >
                  Sign up
                </Link>
              </StyledComponent>
            </StyledComponent>
          </Stack>
        </Stack>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn
