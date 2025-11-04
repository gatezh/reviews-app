import { Observable, of, delay } from "rxjs";
import { reviews } from "../reviews";
import type { ReviewProps } from "../types/review";

export const reviewsService = {
  getReviews$: (): Observable<ReviewProps[]> => {
    return of(reviews).pipe(
      delay(100), // Simulate network delay
    );
  },
};
