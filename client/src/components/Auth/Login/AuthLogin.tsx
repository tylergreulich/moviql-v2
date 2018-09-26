import * as React from 'react';
import { Card, Typography } from '@material-ui/core';
import { FormContainer } from '../../UI/Form/FormContainer';
import { FormButton } from '../../UI/Button/Button';
import ThemeWrapper from '../../UI/MaterialUI/Theme';
import {
  LoginProps,
  LoginState,
  LoginData,
  LoginVariables
} from '../../../interfaces/Auth/AuthLogin.interface';
import { LOGIN_USER } from '../../../mutations/loginUser';
import { Mutation, MutationFn } from 'react-apollo';
import { getValidationErrors } from '../../../utils/getValidationErrors';
import { withRouter } from 'react-router';
import { AuthInputs } from '../AuthInputs';

class AuthLogin extends React.Component<LoginProps, LoginState> {
  public state: LoginState = {
    email: '',
    password: '',
    errors: {}
  };

  public onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;

    this.setState({
      ...this.state,
      [name]: value
    });
  };

  public onLoginUserAndRedirect = async (loginUser: MutationFn) => {
    await loginUser();
    this.setState({ errors: {} });
    this.props.history.push('/login');
  };

  public onSubmitHandler = async (
    event: React.FormEvent<HTMLFormElement>,
    loginUser: MutationFn
  ) => {
    event.preventDefault();
    try {
      await this.onLoginUserAndRedirect(loginUser);
    } catch (error) {
      const errors = await getValidationErrors(error);
      this.setState({ errors });
    }
  };

  public render() {
    const { email, password, errors } = this.state;

    return (
      <>
        <Mutation<LoginData, LoginVariables>
          mutation={LOGIN_USER}
          variables={{ email, password }}
        >
          {(loginUser, { loading }) => {
            return (
              <Card style={{ flex: '.25', zIndex: 4 }}>
                <FormContainer
                  onSubmit={(event: React.FormEvent<HTMLFormElement>) =>
                    this.onSubmitHandler(event, loginUser)
                  }
                  style={{ height: '100vh' }}
                >
                  <ThemeWrapper>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '70%'
                      }}
                    >
                      <Typography
                        variant="headline"
                        style={{ fontSize: '2.2rem' }}
                      >
                        Welcome Back
                      </Typography>
                      <Typography variant="display1">
                        Sign in to your account
                      </Typography>
                      <AuthInputs
                        email={email}
                        password={password}
                        errors={errors}
                        onChange={this.onChangeHandler}
                      />
                      <FormButton
                        variant="contained"
                        color="primary"
                        wide="true"
                        type="submit"
                      >
                        Sign In
                      </FormButton>
                    </div>
                  </ThemeWrapper>
                </FormContainer>
              </Card>
            );
          }}
        </Mutation>
      </>
    );
  }
}

export default withRouter(AuthLogin);
