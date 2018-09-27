import * as React from 'react';
import { HomePageImage } from './ScreensHomeImage';
import { AuthForm } from '../../components/Auth/AuthForm';

export const HomePage = () => (
  <div style={{ display: 'flex', height: '100vh' }}>
    <HomePageImage />
    <AuthForm />
  </div>
);
