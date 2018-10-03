import * as React from 'react';
import { Typography } from '@material-ui/core';
import { MovieImage } from '../../components/UI/HomePage/HomeImage';
import { FormButton } from '../../components/UI/Button/Button';
import { ThemeWrapper } from '../../components/UI/MaterialUI/Theme';
import { Link } from 'react-router-dom';

export const HomePageImage = () => (
  <div style={{ flex: 1 }}>
    <MovieImage>
      <div style={{ marginLeft: '3rem', width: '40%' }}>
        <ThemeWrapper>
          <Typography
            variant="display3"
            style={{
              color: '#eee',
              textTransform: 'uppercase',
              fontSize: '3rem',
              letterSpacing: '.2rem'
            }}
          >
            Keep up with the latest movies
          </Typography>
          <Typography
            variant="title"
            style={{
              color: '#b7b7b7',
              margin: '3rem 0',
              fontSize: '1.5rem',
              lineHeight: '2.5rem',
              maxWidth: '46rem'
            }}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium
            impedit ducimus quasi odio quibusdam placeat soluta ipsa! <br />{' '}
            Magnam explicabo harum error deserunt. Eaque, vel velit?
          </Typography>
          <Link to="/browse" style={{ textDecoration: 'none' }}>
            <FormButton
              variant="contained"
              color="secondary"
              type="submit"
              style={{ width: '22.5rem' }}
            >
              Explore
            </FormButton>
          </Link>
        </ThemeWrapper>
      </div>
    </MovieImage>
  </div>
);
