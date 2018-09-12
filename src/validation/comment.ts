import * as Validator from 'validator';
import { Comment, CommentErrors } from '../interfaces/comment.interface';
import { isEmpty } from './is-empty';

export const validateComment = (data: Comment) => {
  let errors: CommentErrors = {};

  data.movieReview = !isEmpty(data.movieReview) ? data.movieReview : '';
  data.movieRating = !isEmpty(data.movieRating) ? data.movieRating : '';

  if (!Validator.isLength(data.movieReview, { min: 5, max: 100 })) {
    errors.movieReview = 'Movie review must be between 5 and 100 characters';
  }

  if (Validator.isEmpty(data.movieReview)) {
    errors.movieReview = 'Movie review field is required';
  }

  if (Validator.isEmpty(data.movieRating)) {
    errors.movieRating = 'Movie rating is required';
  }

  return { errors, isValid: isEmpty(errors) };
};
