import axiosInstance from "./axiosInstance"

export const signIn = async (user) => {
  try {
    const res = await axiosInstance.post("/auth/login/", user)
    return res.data
  } catch (err) {
    throw new Error(err?.response?.data?.message || "Something went wrong")
  }
}
