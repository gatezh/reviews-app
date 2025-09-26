import type React from "react";
import type { ReviewProps } from "../types/review";

const Review = (props: ReviewProps): React.ReactElement => {
  return (
    <div
      key={props.id}
      className="m-2 flex flex-col rounded-lg border border-black bg-gray-100 p-3"
    >
      <div className="flex justify-between">
        <h3 className="text-xl font-bold">{props.title}</h3>
        <div>
          <span>{new Date(props.date).toLocaleDateString("en-US")}</span>
          <span> </span>
          <span>{new Date(props.date).toLocaleTimeString("it-IT")}</span>
        </div>
      </div>
      <div className="flex justify-between">
        <span>{"⭐️".repeat(props.rating)}</span>
        <span className="italic">{props.author}</span>
      </div>
      <p>{props.body}</p>
    </div>
  );
};

export default Review;
