import gql from 'graphql-tag';

export default gql`
  query GetCurrentUser {
    getCurrentUser {
      username
      email
      favorites {
        _id
        title
        description
        movieImage
      }
    }
  }
`;
