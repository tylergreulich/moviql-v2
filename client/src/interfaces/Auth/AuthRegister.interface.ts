import { RouteComponentProps } from 'react-router-dom';
import { History } from 'history';

interface RegisterFieldState {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
}

interface RegisterFieldErrors {
  errors?: {
    [key: string]: RegisterFieldState;
  };
}

export type RegisterState = RegisterFieldErrors & RegisterFieldState;

export interface RegisterProps extends RouteComponentProps<any> {
  history: History;
  onClick: () => void;
  onClose: () => void;
  success: boolean;
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
