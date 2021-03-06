import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { HomePage } from 'src/screens/Home/ScreensHomePage';
import MoviePage from './screens/Movie/View/ScreensMoviePage';
import { BrowsePage } from './screens/Movie/Browse/ScreensBrowsePage';
import Navigation from 'src/screens/Navigation/ScreensNavigation';

import Register from 'src/components/Auth/Register/AuthRegister';
import Login from 'src/components/Auth/Login/AuthLogin';

// import { TransitionGroup, CSSTransition } from 'react-transition-group';

// import { withSession } from 'src/utils/withSession';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  fetchOptions: {
    credentials: 'include'
  }
});

const Root = () => (
  <BrowserRouter>
    <Route
      render={({ location }) =>
        console.log(location.pathname) || (
          <>
            <Navigation />
            {/* <TransitionGroup>
              <CSSTransition
                timeout={6000}
                classNames={
                  location.pathname === '/'
                    ? 'home'
                    : location.pathname === '/signup'
                      ? 'signup'
                      : location.pathname === 'signin'
                        ? 'signin'
                        : 'default'
                }
                key={location.key}
                unmountOnExit={true}
              > */}
            <Switch location={location}>
              <Route exact={true} path="/" component={HomePage} />
              <Route exact={true} path="/signup" component={Register} />
              <Route exact={true} path="/signin" component={Login} />
              <Route exact={true} path="/browse" component={BrowsePage} />
              <Route
                exact={true}
                path="/browse/movie/:id"
                component={MoviePage}
              />
              <Redirect to="/" />
            </Switch>
            {/* </CSSTransition> */}
            {/* </TransitionGroup> */}
          </>
        )
      }
    />
  </BrowserRouter>
);

ReactDOM.render(
  <ApolloProvider client={client}>
    <Root />
  </ApolloProvider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
