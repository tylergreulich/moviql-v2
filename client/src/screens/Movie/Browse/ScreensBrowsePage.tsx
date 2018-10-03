import * as React from 'react';

import { ThemeWrapper } from 'src/components/UI/MaterialUI/Theme';

import { BrowsePageContainer } from 'src/components/UI/BrowsePage/BrowsePage';

import { NewReleases } from './ScreensBrowseNewReleases';
import { UpcomingTitles } from './ScreensBrowseUpcomingTitles';

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

    <BrowsePageContainer>
      <ThemeWrapper>
        <NewReleases />
        <UpcomingTitles />
      </ThemeWrapper>
    </BrowsePageContainer>
  );
};
