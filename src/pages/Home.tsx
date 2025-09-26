import type React from "react";

import Review from "../components/Review";
import { reviews } from "../reviews";

export default function Main(): React.ReactElement {
  const ReviewsList: React.ReactElement[] = reviews.map(review => {
    return (<Review {...review} />);
  });

  return <main>{ReviewsList}</main>;
}
