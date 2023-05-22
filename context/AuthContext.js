import axios from "axios"
import React, { createContext, useEffect, useState } from "react"
import { BASE_URL } from "../config"
import AsyncStorage from "@react-native-async-storage/async-storage"
export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null)
  const [userToken, setUserToken] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  // const login = (username, password) => {
  //   setIsLoading(true)
  //   axios
  //     .post(`${BASE_URL}/auth/login`, {
  //       username,
  //       password,
  //     })
  //     .then((res) => {
  //       let userInfo = res.data
  //       setUserInfo(userInfo)
  //       AsyncStorage.setItem("userInfo", JSON.stringify(userInfo))
  //       setIsLoading(false)
  //       console.log(userInfo)
  //     })
  //     .catch((e) => {
  //       console.log(`login error ${e}`)
  //       console.log(`Sai tai khoan hoac mat khau`)
  //       setIsLoading(false)
  //     })
  // }
  const login = (username, password) => {
    axios
      .post(`${BASE_URL}/auth/login`, {
        username,
        password,
      })
      .then((res) => {
        let userInfo = res.data
        setUserInfo(userInfo)
        setUserToken(userInfo.tokens.accessToken)

        AsyncStorage.setItem("userInfo", JSON.stringify(userInfo))
        AsyncStorage.setItem("userToken", userInfo.tokens.accessToken)

        console.log(userInfo)
        console.log("User Token: " + userInfo.tokens.accessToken)
      })
      .catch((e) => {
        console.log(`login error ${e}`)
        console.log(`Sai tai khoan hoac mat khau`)
      })
  }
  const logout = () => {
    setUserToken(null)
    AsyncStorage.removeItem("userInfo")
    AsyncStorage.removeItem("userToken")
  }
  const isLoggedIn = async () => {
    try {
      let userInfo = await AsyncStorage.getItem("userInfo")
      let userToken = await AsyncStorage.getItem("userToken")
      userInfo = JSON.parse(userInfo)

      if (userInfo) {
        setUserToken(userToken)
        setUserInfo(userInfo)
      }
    } catch (error) {
      console.log(`is logged error ${error}`)
    }
  }

  useEffect(() => {
    isLoggedIn()
  }, [])

  const register = (username, email, password, firstName, lastName) => {
    axios
      .post(`${BASE_URL}/auth/register`, {
        username,
        email,
        password,
        firstName,
        lastName,
      })
      .then((res) => {
        let userInfo = res.data
        console.log(userInfo)
        setUserInfo(userInfo)
        AsyncStorage.setItem("userInfo", JSON.stringify(userInfo))
        setIsLoading(false)
      })
      .catch((e) => {
        console.log(`register error ${e}`)
        setIsLoading(false)
      })
  }

  return (
    <AuthContext.Provider
      value={{ isLoading, userInfo, register, login, logout, userToken }}
    >
      {children}
    </AuthContext.Provider>
  )
}
