import * as React from 'react';
import { FormInput } from '../UI/HomePage/FormInputs';

interface AuthInputFieldProps {
  email: string;
  username?: string;
  password: string;
  confirmPassword?: string;
}

interface AuthInputErrorProps {
  errors?: {
    [key: string]: AuthInputFieldProps;
  };
}

interface AuthInputUIProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isRegisterForm?: boolean;
  showPassword?: boolean;
  onClick?: () => void;
  endAdornment?: any;
}

type AuthInputProps = AuthInputFieldProps &
  AuthInputErrorProps &
  AuthInputUIProps;

export const AuthInputs = (props: AuthInputProps) => {
  const { email, username, password, errors, onChange, isRegisterForm } = props;

  let registerInputs;
  let loginInputs;

  if (isRegisterForm) {
    registerInputs = (
      <>
        <FormInput
          error={!!errors!.email}
          label={errors!.email ? errors!.email : 'Email'}
          value={email}
          margin="normal"
          name="email"
          onChange={onChange}
          data-testid="email"
        />
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%'
          }}
        >
          <FormInput
            error={!!errors!.username}
            label={errors!.username ? errors!.username : 'Username'}
            value={username}
            margin="normal"
            name="username"
            onChange={onChange}
            data-testid="username"
            style={{ flex: '.45' }}
          />
          <FormInput
            type={props.showPassword ? 'text' : 'password'}
            error={!!errors!.password}
            label={errors!.password ? errors!.password : 'Password'}
            value={password}
            margin="normal"
            name="password"
            onChange={onChange}
            data-testid="password"
            style={{ flex: '.45' }}
          />
        </div>
      </>
    );
  } else {
    loginInputs = (
      <>
        <FormInput
          error={!!errors!.email}
          label={errors!.email ? errors!.email : 'Email'}
          value={email}
          margin="normal"
          name="email"
          onChange={onChange}
          data-testid="email"
        />
        <FormInput
          type="password"
          error={!!errors!.password}
          label={errors!.password ? errors!.password : 'Password'}
          value={password}
          margin="normal"
          name="password"
          onChange={onChange}
          data-testid="password"
        />
      </>
    );
  }

  return <>{registerInputs || loginInputs}</>;
};
