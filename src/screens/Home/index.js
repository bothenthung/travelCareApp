import React from "react"
import { StyledComponent } from "nativewind"
import { Button, Text, View } from "react-native"

const HomeScreen = ({ navigation }) => {
  return (
    <StyledComponent
      component={View}
      className="w-full h-full flex flex-col justify-center items-center"
    >
      <StyledComponent component={Text}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid vitae
        dolores ab provident nesciunt at adipisci magnam vero, sunt praesentium,
        illum, dolorem impedit sequi eligendi! Quidem tempora quisquam debitis
        aut?
      </StyledComponent>
      <Button
        title="Go to Booking"
        onPress={() => {
          navigation.navigate("Booking")
        }}
      />
    </StyledComponent>
  )
}

export default HomeScreen
