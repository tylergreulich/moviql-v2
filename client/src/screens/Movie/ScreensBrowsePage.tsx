import * as React from 'react';
import { Query } from 'react-apollo';
import { GET_MOVIES } from '../../queries/getMovies';

import { GetMoviesData } from 'src/interfaces/MovieScreen/BrowsePage.interface';
import { BrowseItem } from './ScreensBrowseItem';
import { IMovie } from '../../interfaces/shared/Movie.interface';

export const BrowsePage = () => {
  return (
    <Query<GetMoviesData> query={GET_MOVIES}>
      {({ loading, data, error }) => {
        if (loading || !data) {
          return null;
        }

        if (error) {
          return <div>{error}</div>;
        }

        return (
          <ul>
            {data.getMovies.map((movie: IMovie) => (
              <BrowseItem key={movie._id} {...movie} {...loading} />
            ))}
          </ul>
        );
      }}
    </Query>
  );
};
