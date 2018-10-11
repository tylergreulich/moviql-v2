import * as React from 'react';

import {
  MovieCard,
  MovieCardWrapper,
  MovieCardImg
} from 'src/components/UI/BrowsePage/BrowsePage';

import BrowsePageImg from '../../../assets/img/stonehenge.jpg';
import { Link } from 'react-router-dom';

export const UpcomingTitles = () => (
  <>
    <MovieCardWrapper>
      <MovieCard>
        <Link
          to={{
            pathname: '/browse/movie/123',
            state: { imgUrl: `${BrowsePageImg}`, id: '123' }
          }}
        >
          <MovieCardImg src={BrowsePageImg} />
        </Link>
      </MovieCard>
    </MovieCardWrapper>
  </>
);

interface TestProps {
  id: string;
}

export const Test: React.SFC<TestProps> = ({ id }) => <div>Hello</div>;
