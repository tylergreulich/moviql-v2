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
import {
  FormContainer,
  FormButtonSeperator
} from '../../UI/Form/FormContainer';
import { FormButton, FormButtonContainer } from '../../UI/Button/Button';
import { AuthInputs } from '../AuthInputs';
import { Spinner } from '../../../utils/Spinner';

class Register extends React.Component<RegisterProps, RegisterState> {
  public state: RegisterState = {
    email: '',
    username: '',
    password: '',
    errors: {},
    testSpinner: false,
    success: false
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

  public testSpinnerHandler = () => {
    this.setState({ testSpinner: true });
    setTimeout(() => {
      this.setState({ testSpinner: false, success: true });
    }, 2500);
    setTimeout(() => {
      this.setState({ testSpinner: false, success: false });
    }, 3500);
  };

  public render() {
    const { email, username, password, errors } = this.state;
    const { history } = this.props;

    // let test: JSX.Element;

    // if (this.state.testSpinner) {
    //   test = (
    //     <FormButton
    //       variant="contained"
    //       color="secondary"
    //       style={{ transform: 'translate(5rem, -50rem)' }}
    //       onClick={this.testSpinnerHandler}
    //     >
    //       <Spinner />
    //     </FormButton>
    //   );
    // } else if (this.state.success) {
    //   test = (
    //     <FormButton
    //       variant="contained"
    //       color="secondary"
    //       style={{ transform: 'translate(5rem, -50rem)' }}
    //       onClick={this.testSpinnerHandler}
    //     >
    //       Account Created!
    //     </FormButton>
    //   );
    // } else {
    //   test = (
    //     <FormButton
    //       variant="contained"
    //       color="secondary"
    //       style={{ transform: 'translate(5rem, -50rem)' }}
    //       onClick={this.testSpinnerHandler}
    //     >
    //       Test
    //     </FormButton>
    //   );
    // }

    return (
      <>
        <Mutation<RegisterData, RegisterVariables>
          mutation={REGISTER_USER}
          variables={{ email, username, password }}
        >
          {(registerUser, { loading, data }) => {
            return (
              <Card
                style={{
                  maxWidth: '33vw',
                  height: '80vh',
                  margin: '4rem auto',
                  zIndex: -1
                }}
              >
                <FormContainer
                  onSubmit={(event: React.FormEvent<HTMLFormElement>) =>
                    this.onSubmitHandler(event, registerUser)
                  }
                  style={{ margin: '0 auto' }}
                >
                  <ThemeWrapper>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '70%',
                        maxWidth: '35rem'
                      }}
                    >
                      <>
                        <Typography
                          variant="title"
                          style={{ fontSize: '3rem' }}
                        >
                          Sign Up
                        </Typography>
                        <AuthInputs
                          email={email}
                          username={username}
                          password={password}
                          errors={errors}
                          onChange={this.onChangeHandler}
                          isRegisterForm={true}
                        />
                        <FormButtonContainer>
                          <FormButton
                            variant="contained"
                            color="primary"
                            wide="true"
                            // type="submit"
                            style={{ letterSpacing: '.2rem' }}
                          >
                            {loading ? (
                              <Spinner />
                            ) : data ? (
                              'Account Created!'
                            ) : (
                              'Create Account'
                            )}
                          </FormButton>
                          <FormButtonSeperator>or</FormButtonSeperator>
                          <FormButton
                            variant="contained"
                            color="secondary"
                            // type="submit"
                            style={{ letterSpacing: '.2rem' }}
                            onClick={() => history.push('/signin')}
                          >
                            Sign In
                          </FormButton>
                        </FormButtonContainer>
                      </>
                    </div>
                  </ThemeWrapper>
                </FormContainer>
                {/* {test} */}
              </Card>
            );
          }}
        </Mutation>
      </>
    );
  }
}

export default withRouter(Register);
