import axios from "axios"
import React, { createContext, useState } from "react"
import { BASE_URL } from "../config"
import AsyncStorage from "@react-native-async-storage/async-storage"
export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  const login = (username, password) => {
    setIsLoading(true)
    axios
      .post(`${BASE_URL}/auth/login`, {
        username,
        password,
      })
      .then((res) => {
        let userInfo = res.data
        setUserInfo(userInfo)
        AsyncStorage.setItem("userInfo", JSON.stringify(userInfo))
        setIsLoading(false)
        console.log(userInfo)
        console.log("cuoi cung ne")
      })
      .catch((e) => {
        console.log(`login error ${e}`)
        console.log(`Sai tai khoan hoac mat khau`)
        setIsLoading(false)
      })
  }

  const register = (username, email, password, firstName, lastName) => {
    setIsLoading(true)
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
    <AuthContext.Provider value={{ isLoading, userInfo, register, login }}>
      {children}
    </AuthContext.Provider>
  )
}
