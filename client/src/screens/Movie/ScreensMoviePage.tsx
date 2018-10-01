import * as React from 'react';

import { RouteComponentProps, withRouter } from 'react-router-dom';

// import { Query } from 'react-apollo';

// import {
// GetMovieData,
// GetMovieVariables
// } from 'src/interfaces/MovieScreen/MovieScreen.interface';
// import getMovie from 'src/queries/getMovie';

// import { Card } from '@material-ui/core';

// import { ComponentWrapper } from 'src/components/UI/ComponentWrapper';
// import { MovieCardImg } from 'src/components/UI/BrowsePage/BrowsePage';

const MoviePage = (props: RouteComponentProps<any>) => {
  // const { _id } = props.match.params;

  return (
    // <Query<GetMovieData, GetMovieVariables>
    //   query={getMovie}
    //   variables={{ _id }}
    // >
    //   {({ loading, data, error }) => {
    //     if (!data) {
    //       return null;
    //     }

    //     if (error) {
    //       console.log(error);
    //     }

    //     return (
    // <ComponentWrapper style={{ flexDirection: 'column', alignItems: 'center' }}>
    //   <Card>
    //     <MovieCardImg />
    //   </Card>
    // </ComponentWrapper>
    // );
    // }}
    // </Query>
    <div
      onClick={() => console.log(props.location.state.imgUrl)}
      style={{
        width: '100vw',
        height: '50%'
      }}
    >
      <img src={`${props.location.state.imgUrl}`} alt="No Image" />
    </div>
  );
};

export default withRouter(MoviePage);
