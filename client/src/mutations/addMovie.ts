import { gql } from 'apollo-boost';

export const ADD_MOVIE = gql`
  mutation addMovie(
    $title: String!
    $description: String!
    $releaseDate: String
    $movieImage: String!
    $movieBgImage: String!
  ) {
    addMovie(
      title: $title
      description: $description
      releaseDate: $releaseDate
      movieImage: $movieImage
      movieBgImage: $movieBgImage
    ) {
      title
      description
      releaseDate
      movieImage
      movieBgImage
    }
  }
`;
