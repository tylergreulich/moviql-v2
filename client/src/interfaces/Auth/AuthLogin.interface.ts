import { RouteComponentProps } from 'react-router-dom';
import { History } from 'history';

interface LoginInputFields {
  email: string;
  password: string;
}

interface LoginInputErrors {
  errors?: {
    [key: string]: LoginState;
  };
}

export type LoginState = LoginInputErrors & LoginInputFields;

export interface LoginProps extends RouteComponentProps<any> {
  history: History;
  style?: object;
}

export interface LoginData {
  token: string;
}

export interface LoginVariables {
  email: string;
  password: string;
}
