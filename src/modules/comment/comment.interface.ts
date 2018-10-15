import { Document } from 'mongoose';

export interface Comment extends Document {
  _id: string;
  username: string;
  createdAt: Date;
  movieReview: string;
  movieRating: string;
  // Parse to int on client
}

export interface CommentErrors {
  movieReview?: string;
  movieRating?: string;
}
