import * as Validator from 'validator';
import { Movie, MovieErrors } from '../interfaces/movie.interface';
import { isEmpty } from './is-empty';
import { UserInputError } from 'apollo-server-express';

export const validateMovie = (movieFields: Movie) => {
  let errors: MovieErrors = {};

  const { title, description, movieImage } = movieFields;

  title = !isEmpty(title) ? title : '';
  description = !isEmpty(description) ? description : '';
  movieImage = !isEmpty(movieImage) ? movieImage : '';

  if (!Validator.isLength(title, { min: 2, max: 30 })) {
    errors.title = 'Title must be between 2 and 30 characters';
  }

  if (Validator.isEmpty(title)) {
    errors.title = 'Title field is required';
  }

  if (!Validator.isLength(description, { min: 30 })) {
    errors.description = 'Description must be at least 30 characters';
  }

  if (Validator.isEmpty(description)) {
    errors.description = 'Description field is required';
  }

  if (Validator.isEmpty(movieImage)) {
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
