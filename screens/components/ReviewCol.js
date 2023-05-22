import { ScrollView, Text, View } from "native-base"
import React from "react"
import ReviewCard from "./ReviewCard"

const ReviewCol = () => {
  return (
    <View>
      <ScrollView>
        <ReviewCard
          name={"Công Cha Milk"}
          daypost={"21/04/2023"}
          imgUrl={
            "https://images.squarespace-cdn.com/content/v1/5aadf482aa49a1d810879b88/1626698419120-J7CH9BPMB2YI728SLFPN/1.jpg"
          }
          rating={4.5}
          decscription={
            "Công cha như núi thái sơn, nghĩa mẹ như nước trong nguồn chảy ra"
          }
        />
        <ReviewCard
          name={"Công Cha Milk"}
          daypost={"21/04/2023"}
          imgUrl={
            "https://images.squarespace-cdn.com/content/v1/5aadf482aa49a1d810879b88/1626698419120-J7CH9BPMB2YI728SLFPN/1.jpg"
          }
          rating={4.5}
          decscription={
            "Công cha như núi thái sơn, nghĩa mẹ như nước trong nguồn chảy ra"
          }
        />
        <ReviewCard
          name={"Công Cha Milk"}
          daypost={"21/04/2023"}
          imgUrl={
            "https://images.squarespace-cdn.com/content/v1/5aadf482aa49a1d810879b88/1626698419120-J7CH9BPMB2YI728SLFPN/1.jpg"
          }
          rating={4.5}
          decscription={
            "Công cha như núi thái sơn, nghĩa mẹ như nước trong nguồn chảy ra"
          }
        />
      </ScrollView>
    </View>
  )
}

export default ReviewCol
