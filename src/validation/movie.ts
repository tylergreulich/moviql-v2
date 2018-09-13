import * as Validator from 'validator';
import { Movie, MovieErrors } from '../interfaces/movie.interface';
import { isEmpty } from './is-empty';
import { UserInputError } from 'apollo-server-express';

export const validateMovie = (data: Movie) => {
  let errors: MovieErrors = {};

  data.title = !isEmpty(data.title) ? data.title : '';
  data.description = !isEmpty(data.description) ? data.description : '';
  data.movieImage = !isEmpty(data.movieImage) ? data.movieImage : '';

  if (!Validator.isLength(data.title, { min: 2, max: 30 })) {
    errors.title = 'Title must be between 2 and 30 characters';
  }

  if (Validator.isEmpty(data.title)) {
    errors.title = 'Title field is required';
  }

  if (!Validator.isLength(data.description, { min: 30 })) {
    errors.description = 'Description must be at least 30 characters';
  }

  if (Validator.isEmpty(data.description)) {
    errors.description = 'Description field is required';
  }

  if (Validator.isEmpty(data.movieImage)) {
    errors.movieImage = 'Movie Image field is required';
  }

  return { errors, isValid: isEmpty(errors) };
};

export const validateMovieMutation = async (args: Movie) => {
  const { errors, isValid } = await validateMovie(args);

  if (!isValid) {
    throw new UserInputError('Validation Error', errors);
  }
};
