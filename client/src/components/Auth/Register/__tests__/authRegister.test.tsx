// import * as React from 'react';
// import AuthRegister from '../AuthRegister';
// import { MockedProvider } from 'react-apollo/test-utils';
// import { renderWithRouter } from '../../../../utils/__test__/renderWithRouter';

// import { REGISTER_USER } from '../../../../mutations/registerUser';

// import { fireEvent } from 'react-testing-library';

// const mocks = [
//   {
//     request: {
//       query: REGISTER_USER,
//       variables: {
//         username: 'asdf',
//         email: 'asdf@asdf.com',
//         password: 'asdfasdf',
//         confirmPassword: 'asdfasdf'
//       }
//     },
//     result: {
//       data: {
//         registerUser: {
//           token: typeof String
//         }
//       }
//     }
//   }
// ];

// describe('authRegister', () => {
//   it('should render without error', () => {
//     const toggleForm = jest.fn();

//     const closeModal = jest.fn();

//     const success = true;

//     renderWithRouter(
//       <MockedProvider mocks={[]}>
//         <AuthRegister
//           onClick={toggleForm}
//           onClose={closeModal}
//           success={success}
//         />
//       </MockedProvider>
//     );
//   });

//   it('Should render loading state initially', () => {
//     const toggleForm = jest.fn();

//     const closeModal = jest.fn();

//     const success = true;

//     const { getByText } = renderWithRouter(
//       <MockedProvider mocks={mocks} addTypename={false}>
//         <AuthRegister
//           onClick={toggleForm}
//           onClose={closeModal}
//           success={success}
//         />
//       </MockedProvider>
//     );

//     const submitButton = getByText('Register') as HTMLButtonElement;
//     // const formNode = container.querySelector('form');

//     // const usernameNode = getByTestId('username') as HTMLInputElement;
//     // const emailNode = getByTestId('email') as HTMLInputElement;
//     // const passwordNode = getByTestId('password') as HTMLInputElement;
//     // const confrimPasswordNode = getByTestId(
//     //   'confirmPassword'
//     // ) as HTMLInputElement;

//     // usernameNode.value = 'asdf';
//     // emailNode.value = 'asdf@asdf.com';
//     // passwordNode.value = 'asdfasdf';
//     // confrimPasswordNode.value = 'asdfasdf';

//     fireEvent(submitButton, new MouseEvent('click'));

//     expect(submitButton).toBeDefined();
//   });
// });
