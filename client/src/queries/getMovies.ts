import { gql } from 'apollo-boost';

export const GET_MOVIES = gql`
  query getMovies {
    getMovies {
      _id
      movieImage
      title
    }
  }
`;
