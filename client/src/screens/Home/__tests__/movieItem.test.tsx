import * as React from 'react';
// import { Simulate } from 'react-dom/test-utils';
import MovieItem from '../ScreensMovieItem';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, fireEvent } from 'react-testing-library';

const title = 'Title';

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

describe('MoveItem Component', () => {
  it('Should redirect the user to the movie', () => {
    const handleClick = jest.fn();

    const { getByAltText, container } = renderWithRouter(
      <MovieItem
        _id="123"
        title={`${title}`}
        description="Description"
        movieImage="movieImage"
        onClick={handleClick}
      />
    );

    const movieImage = getByAltText(`Image of ${title}`);

    fireEvent(movieImage, new MouseEvent('click'));

    expect(movieImage).toBeDefined();
    expect(container.firstChild).toBe(movieImage);
    expect(handleClick).toHaveBeenCalled();
  });
});
