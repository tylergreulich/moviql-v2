import * as React from 'react';
import { NavigationScreenProps } from 'src/interfaces/NavigationScreen/NavigationScreen.interface';
import { withRouter } from 'react-router-dom';
import ThemeProvider from 'src/components/UI/MaterialUI/Theme';

import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';

const Navigation = (props: NavigationScreenProps) => {
  // const { session } = props;
  const isHomeRoute = props.location.pathname === '/';

  return (
    <div style={{ flexGrow: 1, display: isHomeRoute ? 'none' : undefined }}>
      <ThemeProvider>
        <AppBar
          position="static"
          style={{ backgroundColor: 'rgba(0, 121, 107, 0.8)' }}
        >
          <Toolbar style={{ width: '900px', margin: '0 auto' }}>
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
              <Button>Login</Button>
            </div>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </div>
  );
};

export default withRouter(Navigation);
