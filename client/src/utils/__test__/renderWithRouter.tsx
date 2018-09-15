import * as React from 'react';
import { render } from 'react-testing-library';
import { createMemoryHistory } from 'history';
import { BrowserRouter as Router } from 'react-router-dom';

export const renderWithRouter = (
  ui: React.ReactChild,
  {
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] })
  } = {}
) => ({
  ...render(<Router>{ui}</Router>),
  history
});
