import { Stack, Text } from "native-base"

const Logo = () => {
  return (
    <Stack flexDir="row" px={4} py={2}>
      <Text color="primary.900" fontSize="4xl">
        Travel
      </Text>
      <Text color="secondary.900" fontSize="4xl" fontWeight="bold">
        Care
      </Text>
    </Stack>
  )
}

export default Logo
