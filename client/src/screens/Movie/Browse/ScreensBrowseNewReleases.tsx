import * as React from 'react';

import {
  MovieCard,
  MovieCardWrapper,
  MovieCardImg,
  MovieTextContainer,
  MovieText,
  ViewMoreButton,
  BrowsePageText
} from 'src/components/UI/BrowsePage/BrowsePage';

import { Link } from 'react-router-dom';
import BrowsePageImg from '../../../assets/img/stonehenge.jpg';

export const NewReleases = () => (
  <>
    <BrowsePageText variant="display2" style={{ margin: '2.5rem 0' }}>
      New Releases
    </BrowsePageText>
    <MovieCardWrapper>
      <MovieCard>
        <Link
          to={{
            pathname: '/browse/movie/123',
            state: { imgUrl: '../../assets/img/stonehenge.jpg', id: '123' }
          }}
        >
          <MovieCardImg src={BrowsePageImg} />
        </Link>
        <MovieTextContainer>
          <MovieText variant="display1">Title: A New Title</MovieText>
          <MovieText variant="display1">Release Date: 02/19/2019</MovieText>
          <Link
            to={{
              pathname: '/browse/movie/123',
              state: {
                imgUrl: `${BrowsePageImg}`,
                id: '123'
              }
            }}
            style={{ textDecoration: 'none' }}
          >
            <ViewMoreButton variant="contained" color="secondary">
              View More
            </ViewMoreButton>
          </Link>
        </MovieTextContainer>
      </MovieCard>
    </MovieCardWrapper>
    <BrowsePageText variant="display2" style={{ margin: '5.5rem 0 2.5rem' }}>
      Upcoming Titles
    </BrowsePageText>
  </>
);
