import { RouteComponentProps } from 'react-router-dom';
import { History } from 'history';

interface RegisterFieldInputs {
  email: string;
  username: string;
  password: string;
}

interface RegisterFieldErrors {
  errors?: {
    [key: string]: RegisterFieldInputs;
  };
}

interface RegisterStateUI {
  testSpinner: boolean;
  success: boolean;
}

export type RegisterState = RegisterFieldErrors &
  RegisterFieldInputs &
  RegisterStateUI;

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
}
