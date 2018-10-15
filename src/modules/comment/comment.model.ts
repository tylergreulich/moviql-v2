import { Schema, model } from 'mongoose';
import { Comment } from './comment.interface';

const CommentSchema: Schema = new Schema({
  username: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now,
    required: true
  },
  movieReview: {
    type: String,
    required: true
  },
  movieRating: {
    type: Number,
    required: true
  },
  likes: {
    type: Number,
    default: 0
  }
});

export default model<Comment>('Comment', CommentSchema);
