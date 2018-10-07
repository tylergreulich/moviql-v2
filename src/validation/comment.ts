import * as Validator from 'validator';
import { Comment, CommentErrors } from '../interfaces/comment.interface';
import { isEmpty } from './is-empty';

export const validateComment = (commentFields: Comment) => {
  let errors: CommentErrors = {};

  const { movieReview, movieRating } = commentFields;

  movieReview = !isEmpty(movieReview) ? movieReview : '';
  movieRating = !isEmpty(movieRating) ? movieRating : '';

  if (!Validator.isLength(movieReview, { min: 5, max: 100 })) {
    errors.movieReview = 'Movie review must be between 5 and 100 characters';
  }

  if (Validator.isEmpty(movieReview)) {
    errors.movieReview = 'Movie review field is required';
  }

  if (Validator.isEmpty(movieRating)) {
    errors.movieRating = 'Movie rating is required';
  }

  return { errors, isValid: isEmpty(errors) };
};
