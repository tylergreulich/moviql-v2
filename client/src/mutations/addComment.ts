import { gql } from 'apollo-boost';

export const ADD_COMMENT = gql`
  mutation addComment($movieReview: String!, $movieRating: String!) {
    addComment(movieReview: $movieReview, movieRating: $movieRating) {
      _id
      title
    }
  }
`;
