import { Image, Text, View } from "react-native"
import { withExpoSnack } from "nativewind"
import { StyledComponent } from "nativewind"

const App = () => {
  return (
    <StyledComponent
      component={View}
      className="w-full h-full flex justify-center items-center"
    >
      <Image source={require("./assets/favicon.png")} />
    </StyledComponent>
  )
}

export default withExpoSnack(App)
