import { ScrollView, Text, View } from "native-base"
import React from "react"
import ReviewCard from "./ReviewCard"

const ReviewCol = ({ reviewByLocationId }) => {
  return (
    <View>
      <ScrollView>
        {reviewByLocationId.map((review) => (
          <ReviewCard
            key={review.id}
            title={review.title}
            imgUrl={review.reviewImages}
            reviewAt={review.reviewAt}
            tripTime={review.tripTime}
            content={review.content}
            rating={review.rating}
            firstName={review.user.firstName}
            lastName={review.user.lastName}
          />
        ))}
      </ScrollView>
    </View>
  )
}

export default ReviewCol
