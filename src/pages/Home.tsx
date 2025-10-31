import type React from "react";

import ReviewsList from "../features/ReviewsList";
import { reviews } from "../reviews";

const Home: React.FC = () => {
  return (
    <main>
      <ReviewsList reviews={reviews} />
    </main>
  );
};

export default Home;
