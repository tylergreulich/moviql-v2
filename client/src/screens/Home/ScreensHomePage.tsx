import * as React from 'react';
import AuthLogin from '../../components/Auth/Login/AuthLogin';
import { HomePageImage } from './ScreensHomeImage';

export default () => (
  <div style={{ display: 'flex', height: '100vh' }}>
    <HomePageImage />
    <AuthLogin />
  </div>
);
