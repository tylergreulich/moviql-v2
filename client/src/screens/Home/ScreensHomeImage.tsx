import * as React from 'react';
import HomePageImg from 'src/assets/img/home-page-photo.jpg';
import { Typography } from '@material-ui/core';

export const HomePageImage = () => (
  <div style={{ flex: 0.8 }}>
    <section
      style={{
        width: '100%',
        height: '100vh',
        zIndex: -4,
        backgroundImage: `linear-gradient(to bottom right, rgba(0, 47, 75, .5), rgba(220, 66, 37, .5)), url(${HomePageImg})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }}
    />
    <Typography variant="title" style={{ position: 'absolute' }}>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur,
      dicta.
    </Typography>
  </div>
);
