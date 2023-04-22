import * as SecureStore from "expo-secure-store"

export const setAccessTokenToLocal = async (accessToken) => {
  await SecureStore.setItemAsync("accessToken", accessToken)
}

export const getAccessTokenFromLocal = async () => {
  return await SecureStore.getItemAsync("accessToken")
}

export const setRefreshTokenToLocal = async (refreshToken) => {
  await SecureStore.setItemAsync("refreshToken", refreshToken)
}

export const getRefreshTokenFromLocal = async () => {
  return await SecureStore.getItemAsync("refreshToken")
}
