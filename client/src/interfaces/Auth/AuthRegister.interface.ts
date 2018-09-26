import { RouteComponentProps } from 'react-router-dom';
import { History } from 'history';

interface RegisterFieldState {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
  success: boolean;
}

interface RegisterFieldErrors {
  errors?: {
    [key: string]: RegisterFieldState;
  };
}

export type RegisterState = RegisterFieldErrors & RegisterFieldState;

export interface RegisterProps extends RouteComponentProps<any> {
  history: History;
}

export interface RegisterData {
  token: string;
}

export interface RegisterVariables {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}
