import { createMuiTheme } from 'material-ui/styles';

export const theme = createMuiTheme({
  overrides: {
    MuiTextField: {
      root: {
        color: 'white !important',
        focused: {
          color: 'white !important',
        },
      },
    },
    palette: {
      textColor: 'white !important',
    },
    MuiButton: {
      // Name of the styleSheet
      root: {
        // Name of the rule
        background: 'linear-gradient(45deg, #3f51b5 30%, #00c1d4 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white !important' ,
        height: 48,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(63, 81, 181, .30) !important',
      },
    },        
  },
});

export const appBarColor = {background: 'linear-gradient(45deg, #3f51b5 30%, #00c1d4 90%)'};