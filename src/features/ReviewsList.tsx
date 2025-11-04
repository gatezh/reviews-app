import { memo, useState, useEffect } from "react";
import type React from "react";

import Review from "../components/Review";
import type { ReviewProps } from "../types/review";
import { reviewsService } from "../services/reviewsService";

type ReviewsListProps = {
  reviews: ReviewProps[];
};

const ReviewsList: React.FC<ReviewsListProps> = () => {
  const [reviews, setReviews] = useState<ReviewProps[]>([]);

  useEffect(() => {
    const subscription = reviewsService
      .getReviews$()
      .subscribe((data) => setReviews(data));

    return () => subscription.unsubscribe(); // Cleanup
  }, []);

  return (
    <div>
      {reviews.map((review) => (
        <Review key={review.id} {...review} />
      ))}
    </div>
  );
};

export default memo(ReviewsList);
