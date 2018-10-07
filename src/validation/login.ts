import * as Validator from 'validator';
import { User, AuthErrors } from '../interfaces/auth.interface';
import { isEmpty } from './is-empty';

export const validateLogin = (authFields: User) => {
  let errors: AuthErrors = {};

  const { email, passowrd } = authFields;

  email = !isEmpty(email) ? email : '';
  password = !isEmpty(password) ? password : '';

  if (!Validator.isEmail(email)) {
    errors.email = 'Email is invalid';
  }

  if (Validator.isEmpty(email)) {
    errors.email = 'Email field is required';
  }

  if (Validator.isEmpty(password)) {
    errors.password = 'Password field is required';
  }

  return { errors, isValid: isEmpty(errors) };
};
