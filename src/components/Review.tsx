import type React from "react";
import type { ReviewProps } from "../types/review";

const Review = (props: ReviewProps): React.ReactElement => {
  const date = new Date(props.date);
  const dateString = date.toLocaleDateString("en-US");
  const timeString = date.toLocaleTimeString("it-IT");

  return (
    <div className="m-2 flex flex-col rounded-lg border border-black bg-gray-100 p-3">
      <div className="flex justify-between">
        <h3 className="text-xl font-bold">{props.title}</h3>
        <div>
          <span>{dateString}</span>
          <span> </span>
          <span>{timeString}</span>
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
