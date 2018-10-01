import * as React from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const primaryColor = '#00D280';
const primaryColorDark = '#00B871';

const secondaryColor = '#4357BC';
const secondaryColorDark = '#4154B4';

const theme = createMuiTheme({
  palette: {
    primary: red
  },
  overrides: {
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: `${primaryColor}`
      }
    },
    MuiInput: {
      root: {
        fontSize: '2rem'
      },
      underline: {
        '&:after': {
          // underline color when textfield is inactive
          borderBottom: `.2rem solid ${primaryColor}`
        },
        '&:hover:not($disabled):not($focused):not($error):before': {
          borderBottom: `.2rem solid ${primaryColor}`
        }
      }
    },
    MuiFormLabel: {
      root: {
        fontSize: '1.7rem',
        '&$focused': {
          color: `${primaryColor}`
        }
      }
    },
    MuiFormControl: {
      root: {
        maxWidth: '35rem'
      }
    },
    MuiButton: {
      root: {
        fontSize: '1.3rem'
      },
      containedPrimary: {
        width: '100%',
        margin: '1.2rem 0',
        fontSize: '1.4rem',
        backgroundColor: `${primaryColor}`,
        '&:hover': {
          backgroundColor: `${primaryColorDark}`
        }
      },
      containedSecondary: {
        width: '100%',
        margin: '1.2rem 0',
        fontSize: '1.4rem',
        backgroundColor: `${secondaryColor}`,
        '&:hover': {
          backgroundColor: `${secondaryColorDark}`
        }
      }
    },
    MuiTypography: {
      display3: {
        fontSize: '5.5rem'
      }
    },
    MuiModal: {
      root: {
        width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    },
    MuiSnackbarContent: {
      root: {
        marginTop: '3%'
      }
    }
  }
});

interface ThemeWrapperProps {
  children: JSX.Element | JSX.Element[];
}

export const ThemeWrapper = (props: ThemeWrapperProps) => (
  <MuiThemeProvider theme={theme}>{props.children}</MuiThemeProvider>
);
