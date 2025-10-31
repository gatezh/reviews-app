import { memo } from "react";
import type React from "react";

import Review from "../components/Review";
import type { ReviewProps } from "../types/review";

type ReviewsListProps = {
  reviews: ReviewProps[];
};

const ReviewsList: React.FC<ReviewsListProps> = ({ reviews }) => {
  return (
    <div>
      {reviews.map((review) => (
        <Review {...review} />
      ))}
    </div>
  );
};

export default memo(ReviewsList);
