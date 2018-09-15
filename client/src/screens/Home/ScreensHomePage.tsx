import * as React from 'react';
import { Query } from 'react-apollo';
import { GetAllMovieData } from 'src/interfaces/HomeScreen/HomeScreen.interface';
import { IMovie } from '../../interfaces/shared/Movie.interface';

import getMovies from '../../queries/getMovies';
import MovieItem from './ScreensMovieItem';

export default () => (
  <>
    <Query<GetAllMovieData> query={getMovies}>
      {({ data, loading }) => {
        if (loading || !data) {
          return <div>Loading...</div>;
        }

        return (
          <ul>
            {data.getMovies.map((movie: IMovie) => (
              <MovieItem key={movie._id} {...movie} />
            ))}
          </ul>
        );
      }}
    </Query>
  </>
);
