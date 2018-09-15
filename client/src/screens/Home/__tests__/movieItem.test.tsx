import * as React from 'react';

import MovieItem from '../ScreensMovieItem';

import { fireEvent } from 'react-testing-library';
import { renderWithRouter } from '../../../utils/__test__/renderWithRouter';

const title = 'Title';

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
