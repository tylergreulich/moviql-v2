import * as React from 'react';
import { Typography } from '@material-ui/core';
import { MovieImage } from '../../components/UI/HomePage/HomeImage';
import { FormButton } from '../../components/UI/Button/Button';

interface HomePageImageProps {
  onClick: () => void;
  isLoginForm: boolean;
  isRegisterForm: boolean;
}

export const HomePageImage = (props: HomePageImageProps) => (
  <div style={{ flex: 0.8 }}>
    <MovieImage>
      <div style={{ marginLeft: '3rem' }}>
        <Typography
          variant="display3"
          style={{
            color: '#eee',
            textTransform: 'uppercase',
            fontSize: '3rem'
          }}
        >
          Lorem ipsum dolor imet
        </Typography>
        <Typography
          variant="title"
          style={{ color: '#b7b7b7', margin: '3rem 0' }}
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium
          impedit ducimus quasi odio quibusdam placeat soluta ipsa! <br />{' '}
          Magnam explicabo harum error deserunt. Eaque, vel velit?
        </Typography>
        {props.isRegisterForm ? (
          <FormButton
            variant="contained"
            color="primary"
            type="submit"
            style={{
              backgroundColor: '#EE4266',
              fontSize: '1.4rem',
              fontWeight: 400
            }}
            onClick={props.onClick}
          >
            Sign In
          </FormButton>
        ) : (
          <FormButton
            variant="contained"
            color="primary"
            wide="true"
            onClick={props.onClick}
          >
            Sign Up
          </FormButton>
        )}
      </div>
    </MovieImage>
  </div>
);
