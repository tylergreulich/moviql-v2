import * as React from 'react';
import { waitForElement } from 'react-testing-library';
import { MockedProvider } from 'react-apollo/test-utils';

import { HomePage } from '../ScreensHomePage';
import { GET_MOVIES } from '../../../queries/getMovies';

import { renderWithRouter } from '../../../utils/__test__/renderWithRouter';

const mocks = [
  {
    request: {
      query: GET_MOVIES
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
    renderWithRouter(
      <MockedProvider mocks={mocks} addTypename={false}>
        <HomePage />
      </MockedProvider>
    );
  });

  it('Should render loading state initially', () => {
    const { getByText } = renderWithRouter(
      <MockedProvider mocks={[]} addTypename={false}>
        <HomePage />
      </MockedProvider>
    );

    const loadingMessage = getByText('Loading...');

    expect(loadingMessage).toBeDefined();
    expect(loadingMessage.textContent).toBe('Loading...');
  });

  it('Should render MovieItem', async () => {
    const { getByAltText } = renderWithRouter(
      <MockedProvider mocks={mocks} addTypename={false}>
        <HomePage />
      </MockedProvider>
    );

    const movieImage = await waitForElement(() =>
      getByAltText('Image of undefined')
    );

    expect(movieImage).toBeDefined();
  });
});
