import * as React from 'react';

import { RouteComponentProps, withRouter } from 'react-router-dom';

import { Query } from 'react-apollo';

import {
  GetMovieData,
  GetMovieVariables
} from 'src/interfaces/MovieScreen/MovieScreen.interface';
import getMovie from 'src/queries/getMovie';

import { Typography } from '@material-ui/core';

import { ComponentWrapper } from 'src/components/UI/ComponentWrapper';

const MoviePage = (props: RouteComponentProps<any>) => {
  const { _id } = props.match.params;

  return (
    <Query<GetMovieData, GetMovieVariables>
      query={getMovie}
      variables={{ _id }}
    >
      {({ loading, data, error }) => {
        if (loading || !data) {
          return null;
        }

        if (error) {
          console.log(error);
        }

        return (
          <ComponentWrapper
            style={{ flexDirection: 'column', alignItems: 'center' }}
          >
            <img src={`${data.movieImage}`} alt={`Image of ${data.title}`} />
            <Typography variant="display1">Name: {data.title}</Typography>
            <Typography variant="display1">{data.description}</Typography>
          </ComponentWrapper>
        );
      }}
    </Query>
  );
};

export default withRouter(MoviePage);
