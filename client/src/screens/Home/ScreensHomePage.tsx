import * as React from 'react';
import { HomePageImage } from './ScreensHomeImage';
import { AuthForm } from '../../components/Auth/AuthForm';

interface ScreensHomePageState {
  isRegisterForm: boolean;
  isLoginForm: boolean;
}

export class ScreensHomePage extends React.Component<{}, ScreensHomePageState> {
  public state: ScreensHomePageState = {
    isRegisterForm: true,
    isLoginForm: false
  };

  public render() {
    const { isRegisterForm, isLoginForm } = this.state;

    return (
      <div style={{ display: 'flex', height: '100vh' }}>
        <HomePageImage
          onClick={() =>
            this.setState(
              {
                isRegisterForm: !isRegisterForm,
                isLoginForm: !isLoginForm
              },
              () => console.log(this.state)
            )
          }
          isRegisterForm={isRegisterForm}
          isLoginForm={isLoginForm}
        />
        <AuthForm isRegisterForm={isRegisterForm} />
      </div>
    );
  }
}
