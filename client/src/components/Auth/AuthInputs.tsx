import * as React from 'react';
import { FormInput } from '../UI/HomePage/FormInputs';
import { AuthInputProps } from '../../interfaces/Auth/AuthInputs.interface';

export const AuthInputs: React.SFC<AuthInputProps> = ({
  email,
  username,
  password,
  errors,
  onChange,
  isRegisterForm,
  showPassword
}) => {
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
            type={showPassword ? 'text' : 'password'}
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
