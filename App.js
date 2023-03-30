import { Text, StyleSheet, View } from "react-native"
import React from "react"

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerTop}>
        <View style={styles.top}>
          <Text style={styles.topText}>Top Left</Text>
        </View>
      </View>
      <View style={styles.containerCenter}>
        <View style={styles.center}>
          <Text style={styles.centerText}>Center Text</Text>
        </View>
      </View>
      <View style={styles.containerBottom}>
        <View style={styles.bottom}>
          <Text style={styles.bottomText}>Bottom Right</Text>
        </View>
      </View>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1, // đổ màu full màn hình
    backgroundColor: "#e7feff",
  },
  top: {
    // margin (cách với hàng rào) -> padding (cách với ngôi nhà)
    //    margin: cách ra một khoảng với viền
    marginTop: 40,
    // marginLeft: 30,
    // marginRight: 30,
    marginHorizontal: 20,
    backgroundColor: "pink",
    // padding: cách ra với cái khuôn viên của margin
    // paddingTop: 20,
    // paddingBottom: 20,
    paddingVertical: 15, // thằng này thay cho 2 thằng trên
    // paddingRight: 20,
    // paddingLeft: 20,
    paddingHorizontal: 20, // thằng này thay cho 2 thằng trên
    borderWidth: 2, // Độ dày viền
    borderColor: "red",
  },
  topText: {
    fontSize: 20,
    color: "blue",
    fontWeight: "bold",
  },
  containerTop: {
    flex: 1,
    backgroundColor: "red",
  },
  containerCenter: {
    flex: 1,
    backgroundColor: "yellow",
  },
  containerBottom: {
    flex: 1,
    backgroundColor: "blue",
  },
  bottom: {
    marginTop: 40,
    // marginLeft: 30,
    // marginRight: 30,
    marginHorizontal: 20,
    backgroundColor: "#7ee6fd",
    // padding: cách ra với cái khuôn viên của margin
    // paddingTop: 20,
    // paddingBottom: 20,
    paddingVertical: 15, // thằng này thay cho 2 thằng trên
    // paddingRight: 20,
    // paddingLeft: 20,
    paddingHorizontal: 20, // thằng này thay cho 2 thằng trên
    borderRadius: 8, // bo tròn viền
  },
  bottomText: {
    textAlign: "right", // Chữ viết từ bên đó qua
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
})
