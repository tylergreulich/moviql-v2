import * as Validator from 'validator';
import { User, AuthErrors } from '../interfaces/auth.interface';
import { isEmpty } from './is-empty';

export const validateRegister = ({ username, email, password }: User) => {
  let errors: AuthErrors = {};

  username = !isEmpty(username) ? username : '';
  email = !isEmpty(email) ? email : '';
  password = !isEmpty(password) ? password : '';

  if (!Validator.isLength(username, { min: 2, max: 30 })) {
    errors.username = 'Username must be between 2 and 30 characters';
  }

  if (Validator.isEmpty(username)) {
    errors.username = 'Username field is required';
  }

  if (!Validator.isEmail(email)) {
    errors.email = 'Email is invalid';
  }

  if (Validator.isEmpty(email)) {
    errors.email = 'Email field is required';
  }

  if (!Validator.isLength(password, { min: 6, max: 30 })) {
    errors.password = 'Password must be at least 6 characters';
  }

  if (Validator.isEmpty(password)) {
    errors.password = 'Password field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
