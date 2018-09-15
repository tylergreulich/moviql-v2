import * as React from 'react';
import { IMovie } from 'src/interfaces/shared/Movie.interface';
import { withRouter, RouteComponentProps } from 'react-router-dom';

type MovieItemProps = IMovie & RouteComponentProps<any>;

export const MovieItem = (props: MovieItemProps) => (
  <>
    <img
      src={`${props.movieImage}`}
      alt={`Image of ${props.title}`}
      style={{ maxWidth: '15rem' }}
      onClick={() => props.history.push(`/movie/${props._id}`)}
    />
  </>
);

export default withRouter(MovieItem);
