import * as React from 'react';
import { TextField } from '@material-ui/core';

interface AuthInputFieldProps {
  email: string;
  username?: string;
  password: string;
  confirmPassword?: string;
  isRegisterForm?: boolean;
}

interface AuthInputErrorProps {
  errors?: {
    [key: string]: AuthInputFieldProps;
  };
}

interface AuthInputEventProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

type AuthInputProps = AuthInputFieldProps &
  AuthInputErrorProps &
  AuthInputEventProps;

export const AuthInputs = (props: AuthInputProps) => {
  const {
    email,
    username,
    password,
    confirmPassword,
    errors,
    onChange,
    isRegisterForm
  } = props;

  return (
    <>
      {isRegisterForm ? (
        <TextField
          error={!!errors!.username}
          label={errors!.username ? errors!.username : 'Username'}
          value={username}
          margin="normal"
          name="username"
          onChange={onChange}
          data-testid="username"
        />
      ) : null}

      <TextField
        error={!!errors!.email}
        label={errors!.email ? errors!.email : 'Email'}
        value={email}
        margin="normal"
        name="email"
        onChange={onChange}
        data-testid="email"
      />
      <TextField
        type="password"
        error={!!errors!.password}
        label={errors!.password ? errors!.password : 'Password'}
        value={password}
        margin="normal"
        name="password"
        onChange={onChange}
        data-testid="password"
      />
      {isRegisterForm ? (
        <TextField
          type="password"
          error={!!errors!.confirmPassword}
          label={
            errors!.confirmPassword
              ? errors!.confirmPassword
              : 'Confirm Password'
          }
          value={confirmPassword}
          margin="normal"
          name="confirmPassword"
          onChange={onChange}
          data-testid="confirmPassword"
        />
      ) : null}
    </>
  );
};
