import * as React from 'react';
import { IMovie } from '../../interfaces/shared/Movie.interface';
import { ComponentWrapper } from '../../components/UI/ComponentWrapper';
import { ThemeWrapper } from '../../components/UI/MaterialUI/Theme';
import { Link } from 'react-router-dom';
import { Spinner } from '../../utils/Spinner';

export const BrowseItem = (props: IMovie) => (
  <>
    <ComponentWrapper>
      <ThemeWrapper>
        <div>
          <Link to={`/browse/movie/${props._id}`}>
            {props.loading ? (
              <Spinner />
            ) : (
              <img
                src={`${props.movieImage}`}
                alt={`Image of ${props.title}`}
              />
            )}
          </Link>
        </div>
      </ThemeWrapper>
    </ComponentWrapper>
  </>
);
