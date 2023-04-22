import axios from "axios"
import { BASE_URL } from "./constants"
import {
  getAccessTokenFromLocal,
  getRefreshTokenFromLocal,
  setAccessTokenToLocal,
  setRefreshTokenToLocal,
} from "./common"

const axiosInstance = axios.create({
  baseURL: BASE_URL,
})

axiosInstance.interceptors.request.use(
  (config) => {
    const token = getAccessTokenFromLocal()
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

axiosInstance.interceptors.response.use(
  (response) => {
    const originalRequest = response.config
    if (originalRequest && originalRequest._retry === true) {
      originalRequest._retry = false
    }
    return response
  },
  async (error) => {
    const originalRequest = error.config
    if (
      originalRequest.url !== "/auth/login/" &&
      (error.response.status === 401 || error.response.status === 403) &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true
      const refreshToken = getRefreshTokenFromLocal()
      try {
        const res = await axios.post(`${BASE_URL}/auth/refresh`, undefined, {
          headers: {
            Authorization: `Bearer ${refreshToken}`,
          },
        })
        const { accessToken, refreshToken: newRefreshToken } = res.data
        setAccessTokenToLocal(accessToken)
        setRefreshTokenToLocal(newRefreshToken)
        originalRequest.headers.Authorization = `Bearer ${accessToken}`
        originalRequest._retry = false

        if (originalRequest.method === "get") {
          return axiosInstance.get(originalRequest.url, {
            params: originalRequest.params,
          })
        }

        return axiosInstance(originalRequest)
      } catch (err) {
        if (err.response.status === 401 || err.response.status === 403) {
          signOutUser()
          window.location.replace("/login/signIn")
        }
        return Promise.reject(err)
      }
    }
    return Promise.reject(error)
  }
)

export default axiosInstance
