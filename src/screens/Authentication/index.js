import { createNativeStackNavigator } from "@react-navigation/native-stack"
import SignIn from "./SignIn"
import SignUp from "./SignUp"

const Stack = createNativeStackNavigator()

const Authentication = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          headerShown: false,
          animation: "slide_from_right",
        }}
      />
    </Stack.Navigator>
  )
}

export default Authentication
