import { gql } from 'apollo-boost';

export default gql`
  query GetMovies {
    getMovies {
      _id
      movieImage
    }
  }
`;
