import * as React from 'react';
import { IMovie } from 'src/interfaces/shared/Movie.interface';
import { Link } from 'react-router-dom';

export default (props: IMovie) => (
  <Link to={`/movie/${props._id}`}>
    <img
      src={`${props.movieImage}`}
      alt={`Image of ${props.title}`}
      style={{ maxWidth: '15rem' }}
    />
  </Link>
);
