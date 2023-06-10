import React, { useContext } from "react"
import { createContext } from "react"
import { BASE_URL } from "../config"
import { useState } from "react"
import axios from "axios"
import { AuthContext } from "./AuthContext"

export const AxiosContext = createContext()
export const AxiosProvider = ({ children }) => {
  const [countries, setCountries] = useState([])
  const [provinces, setProvinces] = useState([])
  const [districts, setDistricts] = useState([])
  const [wards, setWards] = useState([])
  const [tripTypes, setTripType] = useState([])
  const [categories, setCategories] = useState([])
  const [hotelStyles, setHotelStyles] = useState([])
  const [propertyAmenities, setPropertyAmenities] = useState([])

  const { userToken } = useContext(AuthContext)

  const [userInformation, setuserInformation] = useState({})
  const [locations, setLocations] = useState("")
  const [reviewsLocationbyId, setreviewLocationbyId] = useState([])

  const getHotels = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/hotels`)
      const hotels = response.data

      return hotels
    } catch (error) {
      console.log(`get locations error ${error}`)
      return []
    }
  }

  const getPropertyAmenities = () => {
    axios
      .get(`${BASE_URL}/propertyAmenities`, {})
      .then((res) => {
        let propertyAmenitiesdata = res.data
        let propertyAmenitiesArray = propertyAmenitiesdata.map(
          (propertyAmenitie) => ({
            value: propertyAmenitie.id,
            label: propertyAmenitie.name,
          })
        )
        setPropertyAmenities(propertyAmenitiesArray || null)
      })
      .catch((e) => {
        console.log(` get propertyAmenities error ${e}`)
      })
  }

  const getHotelStyles = () => {
    axios
      .get(`${BASE_URL}/hotelStyles`, {})
      .then((res) => {
        let HotelStylesdata = res.data
        let hotelStylesArray = HotelStylesdata.map((hotelStyles) => ({
          value: hotelStyles.id,
          label: hotelStyles.name,
        }))
        setHotelStyles(hotelStylesArray || null)
      })
      .catch((e) => {
        console.log(` get hotelStyles error ${e}`)
      })
  }

  const getTripType = () => {
    axios
      .get(`${BASE_URL}/review/get-trip-type`, {})
      .then((res) => {
        let tripTypedata = res.data
        let tripTypeArray = tripTypedata.map((tripType) => ({
          value: tripType.id,
          label: tripType.name,
        }))
        setTripType(tripTypeArray || null)
      })
      .catch((e) => {
        console.log(` get TripType error ${e}`)
      })
  }

  const getReviewByLocationId = async (locationId) => {
    try {
      const response = await axios.get(
        `${BASE_URL}/review/get-reviews-by-location/${locationId}`
      )
      const ReviewsByLocationId = response.data

      setreviewLocationbyId(ReviewsByLocationId)
      return ReviewsByLocationId
    } catch (error) {
      console.log(`get getReviewByLocationId error: ${error}`)
    }
  }

  const getLocations = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/locations`)
      const locations = response.data
      setLocations(locations)
      return locations
    } catch (error) {
      console.log(`get locations error ${error}`)
      return []
    }
  }

  const getUser = async () => {
    try {
      const token = userToken
      const response = await axios.get(`${BASE_URL}/user`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      const userInformation = response.data
      setuserInformation(userInformation)
      return userInformation
    } catch (error) {
      console.log(`get userInformation error ${error}`)
    }
  }
  const getCategories = () => {
    axios
      .get(`${BASE_URL}/categories`, {})
      .then((res) => {
        let categoriesdata = res.data
        let categoriesArray = categoriesdata.map((category) => ({
          value: category.id,
          label: category.name,
        }))
        setCategories(categoriesArray || null)
      })
      .catch((e) => {
        console.log(` get categories error ${e}`)
      })
  }
  const getCountries = () => {
    axios
      .get(`${BASE_URL}/address/countries`, {})
      .then((res) => {
        let countries = res.data
        let countriesArray = countries.map((countries) => ({
          value: countries.id,
          label: countries.name,
        }))
        setCountries(countriesArray || null)
      })
      .catch((e) => {
        console.log(` get address error ${e}`)
      })
  }
  const getProvinces = async (countryId) => {
    try {
      const response = await axios.get(
        `${BASE_URL}/address/provinces/${countryId}`
      )
      const provinces = response.data

      const provincesArray = provinces.map((province) => ({
        value: province.id,
        label: province.name,
      }))

      setProvinces(provincesArray)
    } catch (error) {
      console.log(`get districts error: ${error}`)
    }
  }
  const getDistricts = async (provinceId) => {
    try {
      const response = await axios.get(
        `${BASE_URL}/address/districts/${provinceId}`
      )
      const districts = response.data

      const districtsArray = districts.map((district) => ({
        value: district.id,
        label: district.name,
      }))

      setDistricts(districtsArray)
    } catch (error) {
      console.log(`get districts error: ${error}`)
    }
  }

  const getWards = async (districtId) => {
    try {
      const response = await axios.get(
        `${BASE_URL}/address/wards/${districtId}`
      )
      const wards = response.data

      const wardsArray = wards.map((ward) => ({
        value: ward.id,
        label: ward.name,
      }))

      setWards(wardsArray)
    } catch (error) {
      console.log(`get wards error: ${error}`)
    }
  }

  return (
    <AxiosContext.Provider
      value={{
        getCountries,
        getProvinces,
        getDistricts,
        getWards,
        provinces,
        countries,
        districts,
        wards,
        getUser,
        userInformation,
        setuserInformation,
        getLocations,
        getCategories,
        categories,
        getReviewByLocationId,
        reviewsLocationbyId,
        getTripType,
        tripTypes,
        hotelStyles,
        getHotelStyles,
        getPropertyAmenities,
        propertyAmenities,
        getHotels,
      }}
    >
      {children}
    </AxiosContext.Provider>
  )
}
