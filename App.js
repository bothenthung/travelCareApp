import Router from "@/router/router"
import { NativeBaseProvider } from "native-base"
import { withExpoSnack } from "nativewind"
import theme from "@/common/styles/theme"

const App = () => {
  return (
    <NativeBaseProvider theme={theme}>
      <Router />
    </NativeBaseProvider>
  )
}

export default withExpoSnack(App)
