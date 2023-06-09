import React from "react"
import { SafeAreaView } from "react-native-safe-area-context"

import {
  Button,
  Input,
  NativeBaseProvider,
  ScrollView,
  Text,
  View,
} from "native-base"

import { TabActions, TabRouter } from "@react-navigation/native"
import ListTabPlanning from "./ListTabPlanning"

const Planning = () => {
  return (
    <NativeBaseProvider>
      <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View mx={5}>
            <Text mb={5} fontSize="4xl" flex="1" fontWeight={"medium"} mt={8}>
              Planning
            </Text>
            <View flex={1} h={335}>
              <ListTabPlanning />
            </View>
            <Text fontSize={"xl"} flex={1} fontWeight={"bold"}>
              Tên chuyến đi
            </Text>
            <Input
              mt={5}
              w={{
                base: "100%",
                md: "25%",
              }}
              size="2xl"
              borderColor="#DB147F"
              placeholder="Ví dụ: Cuối tuần ở Đà Nẵng"
              borderRadius={10}
            />
            <Text fontSize={17} textAlign={"right"} mb={8}>
              0/50
            </Text>
            <Button backgroundColor={"#32A4FC"} shadow={"3"}>
              <Text color={"#fff"} fontSize={20}>
                Tạo chuyến đi
              </Text>
            </Button>
          </View>
        </ScrollView>
      </SafeAreaView>
    </NativeBaseProvider>
  )
}

export default Planning
