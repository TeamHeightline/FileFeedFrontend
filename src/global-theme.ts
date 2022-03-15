import {createTheme} from '@mui/material/styles';

export const globalTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: "#007FFF",
        },
        secondary: {
            main: '#d0618c',
        },
        background: {
            default: '#0A1929',
            paper: '#0A1929',
        },

    },
    components: {
        MuiCard: {
            defaultProps: {},
            styleOverrides: {
                root: {
                    borderRadius: 25
                },

            }
        },
        MuiSwitch: {
            styleOverrides: {
                root: {
                    width: 42,
                    height: 26,
                    padding: 0,
                    margin: 8,
                },
                switchBase: {
                    padding: 1,
                    '&$checked, &$colorPrimary$checked, &$colorSecondary$checked': {
                        transform: 'translateX(16px)',
                        color: '#fff',
                        '& + $track': {
                            opacity: 1,
                            border: 'none',
                        },
                    },
                },
                thumb: {
                    width: 24,
                    height: 24,
                },
                track: {
                    borderRadius: 13,
                    border: '1px solid #bdbdbd',
                    backgroundColor: '#fafafa',
                    opacity: 1,
                    transition: 'background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                },
            }
        }
    },

})