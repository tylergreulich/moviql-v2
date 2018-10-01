import * as React from 'react';

import { Card } from '@material-ui/core';

import { ComponentWrapper } from 'src/components/UI/ComponentWrapper';
import {
  MovieCardImg,
  BrowsePageContainer
} from 'src/components/UI/BrowsePage/BrowsePage';

import { Link } from 'react-router-dom';

// import { Query } from 'react-apollo';
// import { GET_MOVIES } from '../../queries/getMovies';

// import { GetMoviesData } from 'src/interfaces/MovieScreen/BrowsePage.interface';
// import { BrowseItem } from './ScreensBrowseItem';
// import { IMovie } from '../../interfaces/shared/Movie.interface';

export const BrowsePage = () => {
  return (
    // <Query<GetMoviesData> query={GET_MOVIES}>
    //   {({ loading, data, error }) => {
    //     if (loading || !data) {
    //       return null;
    //     }

    //     if (error) {
    //       return <div>{error}</div>;
    //     }

    // return (
    // <ul>
    //   {data.getMovies.map((movie: IMovie) => (
    //     <BrowseItem key={movie._id} {...movie} {...loading} />
    //   ))}
    // </ul>
    // );
    // }}
    // </Query>

    <ComponentWrapper style={{ height: '100vh', width: '80%' }}>
      <BrowsePageContainer>
        <Card>
          <Link
            to={{
              pathname: '/browse/movie/123',
              state: { imgUrl: '../../assets/img/stonehenge.jpg', id: '123' }
            }}
          >
            <MovieCardImg />
          </Link>
        </Card>
      </BrowsePageContainer>
    </ComponentWrapper>
  );
};
