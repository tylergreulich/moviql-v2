import * as React from 'react';
import { NavigationScreenProps } from 'src/interfaces/NavigationScreen/NavigationScreen.interface';
import { withRouter } from 'react-router-dom';
import { ThemeWrapper } from 'src/components/UI/MaterialUI/Theme';

import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';

const Navigation = (props: NavigationScreenProps) => {
  const { history } = props;

  return (
    <div style={{ flexGrow: 1, zIndex: 1, position: 'relative' }}>
      <ThemeWrapper>
        <AppBar position="static">
          <Toolbar style={{ width: '80%', margin: '0 auto' }}>
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
                onClick={() => props.history.push('/')}
              >
                Home
              </Typography>
            </div>
            <div
              style={{
                display: 'flex',
                flex: 0.75,
                justifyContent: 'flex-end'
              }}
            >
              <Button onClick={() => history.push('/signin')}>Sign In</Button>
              <Button onClick={() => history.push('/signup')}>Sign Up</Button>
            </div>
          </Toolbar>
        </AppBar>
      </ThemeWrapper>
    </div>
  );
};

export default withRouter(Navigation);
