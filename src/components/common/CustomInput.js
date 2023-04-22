import { Icon, Input } from "native-base"
import { StyledComponent } from "nativewind"
const CustomInput = ({
  className,
  placeholder,
  InputLeftElement,
  InputRightElement,
  type = "text",
  ...props
}) => {
  return (
    <StyledComponent
      {...props}
      component={Input}
      placeholder={placeholder}
      className={`${className} w-full`}
      InputLeftElement={<Icon as={InputLeftElement} color="muted.400" ml={2} />}
      InputRightElement={
        <Icon as={InputRightElement} color="muted.400" mr={2} />
      }
      type={type}
    />
  )
}

export default CustomInput
