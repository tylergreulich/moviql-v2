import * as React from 'react';

import { RouteComponentProps, withRouter } from 'react-router-dom';

// import { Query } from 'react-apollo';

// import {
// GetMovieData,
// GetMovieVariables
// } from 'src/interfaces/MovieScreen/MovieScreen.interface';
// import getMovie from 'src/queries/getMovie';

import { Typography } from '@material-ui/core';
import {
  MoviePageImageHeader,
  MoviePageImage,
  MoviePageInfoContainer,
  MovieInfo
} from 'src/components/UI/MoviePage/MoviePage';

const MoviePage: React.SFC<RouteComponentProps<any>> = ({ location }) => {
  const { imgUrl } = location.state;

  return (
    <>
      <MoviePageImageHeader>
        <MoviePageImage src={`${imgUrl}`} alt="No Image" />
      </MoviePageImageHeader>
      <MoviePageInfoContainer>
        <MovieInfo>
          <Typography variant="display3">Title</Typography>
          <Typography variant="display3">Description</Typography>
          <Typography variant="display2">Release Date: 02/29/2019</Typography>
          <Typography variant="display1">Rating: 1/10</Typography>
        </MovieInfo>
      </MoviePageInfoContainer>
    </>
  );
};

export default withRouter(MoviePage);
