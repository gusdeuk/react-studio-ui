import {createMuiTheme} from '@material-ui/core/styles';

// TODO: custom theme for this app
// https://material-ui.com/customization/theming/
// https://material-ui.com/customization/default-theme/#default-theme

const muiThemeConfig = createMuiTheme({
    palette: {
        primary: {
            main: '#2eace0',
            light: '#36c6ff',
            dark: '#207799',
        },
        secondary: {
            main: '#6ac259',
            light: '#85f26f',
            dark: '#46803b',
        },
        error: {
            main: '#ff605d',
            light: '#ff8687',
            dark: '#cc4e4b',
        },
        warning: {
            main: '#FFAB4E',
            light: '#ffc85d',
            dark: '#ff992f',
        },
        info: {
            main: '#2eace0',
            light: '#36c6ff',
            dark: '#207799',
        },
        success: {
            main: '#6ac259',
            light: '#85f26f',
            dark: '#46803b',
        },
        background: {
            default: '#fff'
        },
        grey: {
            50: '#fafafa',
            100: '#f5f5f5',
            200: '#eeeeee',
            300: '#e0e0e0',
            400: '#bdbdbd',
            500: '#9e9e9e',
            600: '#757575',
            700: '#616161',
            800: '#424242',
            900: '#212121',
            A100:'#d5d5d5',
            A200:'#aaaaaa',
            A400:'#303030',
            A700:'#616161',
        }


    },
    typography: {
        /* htmlFontSize: 10,*/
        fontSize: 13,
        fontFamily: [
            'poppins',
            'Arial',
            'Helvetica',
            'sans-serif',
        ].join(','),
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 700,
    },
});

export default muiThemeConfig;
