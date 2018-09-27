import * as React from 'react';
import AuthRegister from './Register/AuthRegister';
import AuthLogin from './Login/AuthLogin';

import './authFormStyles.css';
import { AuthFormState } from '../../interfaces/Auth/AuthForm.interface';

export class AuthForm extends React.Component<{}, AuthFormState> {
  public state: AuthFormState = {
    isRegisterForm: true,
    isLoginForm: false,
    isRegistrationSuccessful: true
  };

  public toggleFormHandler = () => {
    this.setState(prevState => ({
      isRegisterForm: !prevState.isRegisterForm,
      isLoginForm: !prevState.isLoginForm
    }));
  };

  public onCloseModalHandler = () => {
    this.setState({ isRegistrationSuccessful: false }, () =>
      this.toggleFormHandler()
    );

    setTimeout(() => {
      this.setState({ isRegistrationSuccessful: true });
    }, 500);
  };

  public render() {
    const { isRegisterForm, isRegistrationSuccessful } = this.state;

    return (
      <>
        {isRegisterForm ? (
          <AuthRegister
            onClick={this.toggleFormHandler}
            onClose={this.onCloseModalHandler}
            success={isRegistrationSuccessful}
          />
        ) : (
          <AuthLogin onClick={this.toggleFormHandler} />
        )}
      </>
    );
  }
}
