import * as React from 'react';
import { Query } from 'react-apollo';
import getMovies from 'src/queries/getMovies';
import { GetAllMovieData } from 'src/interfaces/HomeScreen/HomeScreen.interface';
import { IMovie } from '../../interfaces/shared/Movie.interface';

import MovieItem from './ScreensMovieItem';

export default () => (
  <>
    <Query<GetAllMovieData> query={getMovies}>
      {({ data, loading, error }) => {
        if (loading || !data) {
          return null;
        }

        if (error) {
          console.log('[GET MOVIES]', error);
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
