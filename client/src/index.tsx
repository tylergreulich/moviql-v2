import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { HomePage } from 'src/screens/Home/ScreensHomePage';
import MoviePage from 'src/screens/Movie/ScreensMoviePage';
import { BrowsePage } from 'src/screens/Movie/ScreensBrowsePage';
import Navigation from 'src/screens/Navigation/ScreensNavigation';

// import { withSession } from 'src/utils/withSession';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  fetchOptions: {
    credentials: 'include'
  },
  // request: (operation: Operation): any => {
  //   const token = localStorage.getItem('jwtToken');
  //   operation.setContext({
  //     headers: {
  //       authorization: token
  //     }
  //   });
  // },
  onError: ({ networkError }) => {
    if (networkError) {
      console.log('[Network Error]', networkError);
    }
  }
});

const Root = () => (
  <BrowserRouter>
    <>
      <Route exact={true} path="/" component={HomePage} />
      <Navigation />
      <Switch>
        <Route exact={true} path="/browse" component={BrowsePage} />
        <Route exact={true} path="/browse/movie/:id" component={MoviePage} />
        <Redirect to="/" />
      </Switch>
    </>
  </BrowserRouter>
);

// const RootWithSession = withSession(Root);

ReactDOM.render(
  <ApolloProvider client={client}>
    <Root />
  </ApolloProvider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
