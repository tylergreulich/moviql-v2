import * as React from 'react';
import { NavigationScreenProps } from 'src/interfaces/NavigationScreen/NavigationScreen.interface';
import { withRouter } from 'react-router-dom';
import { ThemeWrapper } from 'src/components/UI/MaterialUI/Theme';

import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';

const Navigation = (props: NavigationScreenProps) => {
  const { history, location } = props;

  return (
    <div style={{ flexGrow: 1, zIndex: 1, position: 'relative' }}>
      <ThemeWrapper>
        <AppBar position="static">
          <Toolbar
            style={{ width: '80%', margin: '0 auto' }}
            onClick={() => console.log(props)}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                height: '3.6rem',
                flex: 0.25
              }}
            >
              <Typography
                variant="title"
                color="inherit"
                style={{ fontSize: '1.3rem !important', cursor: 'pointer' }}
                onClick={() =>
                  location.pathname === '/browse/movie/123'
                    ? history.push('/browse')
                    : history.push('/')
                }
              >
                {location.pathname === '/browse/movie/123' ? 'Back' : 'Home'}
              </Typography>
            </div>
            <div
              style={{
                display: 'flex',
                flex: 0.75,
                justifyContent: 'flex-end'
              }}
            >
              <Button onClick={() => history.push('/signin')} color="inherit">
                Sign In
              </Button>
              <Button onClick={() => history.push('/signup')} color="inherit">
                Sign Up
              </Button>
            </div>
          </Toolbar>
        </AppBar>
      </ThemeWrapper>
    </div>
  );
};

export default withRouter(Navigation);
