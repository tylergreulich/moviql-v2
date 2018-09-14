import * as React from 'react';
import { render } from 'react-testing-library';
import { MockedProvider } from 'react-apollo/test-utils';

import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

import HomePage from '../ScreensHomePage';
import getMovies from '../../../queries/getMovies';
const wait = require('waait');

// import MovieItem from '../ScreensMovieItem';

function renderWithRouter(
  ui: any,
  {
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] })
  } = {}
) {
  return {
    ...render(<Router history={history}>{ui}</Router>),
    history
  };
}

const mocks = [
  {
    request: {
      query: getMovies
    },
    result: {
      data: {
        getMovies: [
          {
            _id: '1',
            movieImage: 'aeiorhsruth'
          }
        ]
      }
    }
  }
];

describe('HomePage Component', () => {
  it('Renders without error', () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <HomePage />
      </MockedProvider>
    );
  });

  it('Should render loading state initially', () => {
    const { container } = render(
      <MockedProvider mocks={[]} addTypename={false}>
        <HomePage />
      </MockedProvider>
    );

    expect(container.textContent).toBe('Loading...');
  });

  it('Should render MovieItem', async () => {
    const { getByAltText } = renderWithRouter(
      <MockedProvider mocks={mocks} addTypename={false}>
        <HomePage />
      </MockedProvider>
    );

    await wait(50);

    const movieImage = getByAltText('Image of undefined');

    expect(movieImage).toBeDefined();
  });
});
