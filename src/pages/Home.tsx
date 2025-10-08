import type React from "react";

import Review from "../components/Review";
import { reviews } from "../reviews";

const Home = (): React.ReactElement => {
  const ReviewsList: React.ReactElement[] = reviews.map((review) => {
    return <Review key={review.id} {...review} />;
  });

  return <main>{ReviewsList}</main>;
};

export default Home;
