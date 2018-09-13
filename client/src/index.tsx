import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Home from 'src/screens/Home/ScreensHomePage';
import MoviePage from 'src/screens/Movie/ScreensMoviePage';
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
      <Navigation />
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route exact={true} path="/movie/:id" component={MoviePage} />
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
