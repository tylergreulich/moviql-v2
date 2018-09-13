import * as React from 'react';

import { Query } from 'react-apollo';

import getCurrentUser from 'src/queries/getCurrentUser';
import { IMovie } from '../interfaces/shared/Movie.interface';

interface GetCurrentUserData {
  username: string;
  email: string;
  favorites: [IMovie];
  isAdmin: boolean;
}

export const withSession = (Component: any) => (props: any) => (
  <Query<GetCurrentUserData, {}> query={getCurrentUser}>
    {({ data, loading, refetch }) => {
      if (loading || !data) {
        return null;
      }

      return <Component {...props} refetch={refetch} session={data} />;
    }}
  </Query>
);
