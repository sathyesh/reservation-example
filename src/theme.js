import { createMuiTheme } from '@material-ui/core/styles';


const theme = (colorPalette) => createMuiTheme({
  palette: {
    primary: {
      main: colorPalette.primaryColor,
      contrastText: colorPalette.contrastText
    }
  },
});

export default theme;