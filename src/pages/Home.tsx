import type React from "react";

import ReviewsList from "../components/ReviewsList";
import { reviews } from "../reviews";

const Home: React.FC = () => {
  return (
    <main>
      <ReviewsList reviews={reviews} />
    </main>
  );
};

export default Home;
