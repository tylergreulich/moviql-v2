import * as React from 'react';
import { REGISTER_USER } from '../../../mutations/registerUser';
import { Mutation, MutationFn } from 'react-apollo';
import {
  RegisterState,
  RegisterData,
  RegisterVariables,
  RegisterProps
} from 'src/interfaces/Auth/AuthRegister.interface';
import { getValidationErrors } from '../../../utils/getValidationErrors';

import { withRouter } from 'react-router-dom';

import { ThemeWrapper } from '../../UI/MaterialUI/Theme';
import { Typography, Card } from '@material-ui/core';
import { FormContainer } from '../../UI/Form/FormContainer';
import { FormButton, FormButtonContainer } from '../../UI/Button/Button';
import { AuthInputs } from '../AuthInputs';
import { Spinner } from '../../../utils/Spinner';
import { MySnackbarContent } from '../../../utils/MySnackbarContent';

class Register extends React.Component<RegisterProps, RegisterState> {
  public state: RegisterState = {
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    errors: {}
  };

  public onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;

    this.setState({
      ...this.state,
      [name]: value
    });
  };

  public onRegisterUser = async (registerUser: MutationFn) => {
    await registerUser();
    this.setState({
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      errors: {}
    });
  };

  public onSubmitHandler = async (
    event: React.FormEvent<HTMLFormElement>,
    registerUser: MutationFn
  ) => {
    event.preventDefault();
    try {
      await this.onRegisterUser(registerUser);
    } catch (error) {
      const errors = await getValidationErrors(error);
      this.setState({ errors });
    }
  };

  public render() {
    const { email, username, password, confirmPassword, errors } = this.state;

    const { success } = this.props;

    return (
      <>
        <Mutation<RegisterData, RegisterVariables>
          mutation={REGISTER_USER}
          variables={{ email, username, password, confirmPassword }}
        >
          {(registerUser, { loading, data }) => {
            return (
              <Card style={{ flex: '.25', zIndex: 4 }}>
                <FormContainer
                  onSubmit={(event: React.FormEvent<HTMLFormElement>) =>
                    this.onSubmitHandler(event, registerUser)
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
                      <>
                        <Typography
                          variant="headline"
                          style={{ fontSize: '2.2rem' }}
                        >
                          Welcome, Guest!
                        </Typography>
                        <Typography variant="display1">
                          Please register or sign in
                        </Typography>
                        <AuthInputs
                          email={email}
                          username={username}
                          password={password}
                          confirmPassword={confirmPassword}
                          errors={errors}
                          onChange={this.onChangeHandler}
                          isRegisterForm={true}
                        />
                        {loading ? (
                          <Spinner />
                        ) : data && success ? (
                          <MySnackbarContent
                            onClose={this.props.onClose}
                            variant="success"
                            message="Successfully Registered!"
                          />
                        ) : (
                          <FormButtonContainer>
                            <FormButton
                              variant="contained"
                              color="primary"
                              wide="true"
                              type="submit"
                            >
                              Register
                            </FormButton>
                            <FormButton
                              variant="contained"
                              color="primary"
                              type="submit"
                              onClick={this.props.onClick}
                            >
                              Or Sign In
                            </FormButton>
                          </FormButtonContainer>
                        )}
                      </>
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

export default withRouter(Register);
