import axios from "axios"
import React, { createContext, useEffect, useState } from "react"
import { BASE_URL } from "../config"
import AsyncStorage from "@react-native-async-storage/async-storage"

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null)
  const [userToken, setUserToken] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const axiosInstance = axios.create()

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
        AsyncStorage.setItem(
          "userToken",
          JSON.stringify(userInfo.tokens.accessToken)
        )
        AsyncStorage.setItem(
          "refreshToken",
          JSON.stringify(userInfo.tokens.refreshToken)
        )
      })
      .catch((e) => {
        console.log(`login error ${e}`)
        console.log(`Sai tai khoan hoac mat khau`)
      })
  }
  const logout = () => {
    setUserToken(null)
    setUserInfo(null)
    AsyncStorage.removeItem("userInfo")
    AsyncStorage.removeItem("userToken")
  }

  useEffect(() => {
    isLoggedIn()
  }, [])

  const isLoggedIn = async () => {
    try {
      let userInfo = await AsyncStorage.getItem("userInfo")
      let userToken = await AsyncStorage.getItem("userToken")
      userInfo = await JSON.parse(userInfo)
      userToken = await JSON.parse(userToken)
      setUserInfo(userInfo)
      setUserToken(userToken)
    } catch (error) {
      console.log(`is logged error ${error}`)
    }
  }
  // const refreshToken = async () => {
  //   try {
  //     const refreshToken = await AsyncStorage.getItem("refreshToken")
  //     const res = await axios.post(`${BASE_URL}/auth/refresh`, {
  //       refreshToken,
  //     })
  //     const { accessToken } = res.data
  //     setUserToken(accessToken) // Lưu trữ access token mới vào state
  //     AsyncStorage.setItem("userToken", accessToken) // Lưu trữ access token mới vào AsyncStorage
  //   } catch (error) {
  //     throw error
  //   }
  // }
  const refreshToken = async () => {
    try {
      const refreshToken = await AsyncStorage.getItem("refreshToken")
      // refreshToken = await JSON.parse(refreshToken)
      const res = await axios.post(`${BASE_URL}/auth/refresh`, {
        headers: { Authorization: `Bearer ${refreshToken}` },
      })
      const { accessToken, refreshTokens } = await res.data
      setUserToken(accessToken) // Lưu trữ access token mới vào state
      AsyncStorage.setItem("userToken", JSON.stringify(accessToken))
      AsyncStorage.setItem("refreshTokens", JSON.stringify(refreshTokens)) // Lưu trữ access token mới vào AsyncStorage
    } catch (error) {
      console.log
      throw error
    }
  }
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
      })
      .catch((e) => {
        console.log(`register error ${e}`)
      })
  }
  axiosInstance.interceptors.request.use(
    async (config) => {
      const token = await AsyncStorage.getItem("userToken")
      config.headers.Authorization = `Bearer ${token}`
      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )
  axiosInstance.interceptors.response.use(
    (response) => {
      return response
    },
    async (error) => {
      if (error.response && error.response.status === 401) {
        try {
          await refreshToken()
          const originalRequest = error.config
          originalRequest.headers.Authorization = `Bearer ${await AsyncStorage.getItem(
            "userToken"
          )}`
          return axiosInstance(originalRequest)
        } catch (refreshError) {
          console.log(refreshError)
          throw refreshError
        }
      }
      return Promise.reject(error)
    }
  )

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        userInfo,
        register,
        login,
        logout,
        userToken,
        axiosInstance,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
