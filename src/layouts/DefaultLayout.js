import { StyledComponent } from "nativewind"
import { ScrollView } from "react-native"

const DefaultLayout = ({ children }) => {
  return (
    <StyledComponent
      component={ScrollView}
      className="min-h-full min-w-full pt-[50px]"
    >
      {children}
    </StyledComponent>
  )
}
export default DefaultLayout
