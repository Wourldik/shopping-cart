import { IReview, IReviewBackend } from '../interfaces';

export class Review implements IReview {
  static fromBackendFactory(obj: Readonly<IReviewBackend>): Review {
    return new Review({
      id: obj.id,
      userComment: obj.user_comment,
      userName: obj.user_name,
      userRate: obj.user_rate,
    });
  }

  id: number;
  userComment: string;
  userName: string;
  userRate: number;

  constructor(obj: Readonly<IReview>) {
    this.id = obj.id;
    this.userComment = obj.userComment;
    this.userName = obj.userName;
    this.userRate = obj.userRate;
  }
}

export type Reviews = ReadonlyArray<Review>;
