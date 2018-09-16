import { RouteComponentProps } from 'react-router-dom';
import { History } from 'history';

interface RegisterInputFields {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface RegisterInputErrors {
  errors?: {
    [key: string]: RegisterState;
  };
}

export type RegisterState = RegisterInputErrors & RegisterInputFields;

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
