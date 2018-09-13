import { gql } from 'apollo-boost';

export default gql`
  query GetMovie($_id: ID!) {
    getMovie(_id: $_id) {
      _id
      title
      description
      movieImage
      cast {
        name
      }
      comments {
        _id
        movieReview
        movieRating
      }
    }
  }
`;
