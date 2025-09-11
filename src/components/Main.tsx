import type React from "react";
import { reviews } from "../reviews";
import type { Review } from "../types/reveiw";

export default function Main(): React.ReactElement {
  const ReviewsList: React.ReactElement[] = reviews.map((review: Review) => {
    return (
      <div
        key={review.id}
        className="m-2 p-3 flex flex-col rounded-lg border border-black"
      >
        <div className="flex justify-between">
          <h3 className="text-xl font-bold">{review.title}</h3>
          <div>
            <span>{new Date(review.date).toLocaleDateString("en-US")}</span>
            <span> </span>
            <span>{new Date(review.date).toLocaleTimeString("it-IT")}</span>
          </div>
        </div>
        <div className="flex justify-between">
          <span>{review.rating}</span>
          <span className="italic">{review.author}</span>
        </div>
        <p>{review.body}</p>
      </div>
    );
  });

  return <main>{ReviewsList}</main>;
}
