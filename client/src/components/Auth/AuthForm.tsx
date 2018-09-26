import * as React from 'react';
import AuthRegister from './Register/AuthRegister';
import AuthLogin from './Login/AuthLogin';

import './authFormStyles.css';

interface AuthFormProps {
  isRegisterForm: boolean;
}

export const AuthForm = (props: AuthFormProps) => {
  return <>{props.isRegisterForm ? <AuthRegister /> : <AuthLogin />}</>;
};
