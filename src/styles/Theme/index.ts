import { alpha, createTheme, responsiveFontSizes } from '@mui/material'

import { COLORS } from '../Colors'
import { alegreya, lato } from '../Fonts'

const ICON_SIZE = '2rem'
export const MIN_WIDTH = 320
export const shadows = {
  boxShadow1: `-2px -2px 5px ${COLORS.coral_orange}`,
  boxShadow2: `2px 2px 5px ${COLORS.light_orange}`,
}

let theme = createTheme()
theme = createTheme({
  palette: {
    background: { default: COLORS.pale_gray },
    primary: {
      main: COLORS.coral_orange,
      contrastText: COLORS.white,
    },
    secondary: {
      main: COLORS.dark_green,
      contrastText: COLORS.white,
    },
  },
  typography: {
    fontFamily: [lato.style.fontFamily, alegreya.style.fontFamily].join(','),
  },
  breakpoints: {
    values: {
      xs: 333,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        color: COLORS.dark_green,
      },
      styleOverrides: {
        h1: {
          [theme.breakpoints.up('lg')]: {
            fontSize: '7rem',
          },
          [theme.breakpoints.down('lg')]: {
            fontSize: '5rem',
          },
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: COLORS.coral_orange,
          boxShadow: theme.shadows[5],
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          fontSize: 30,
        },
        secondary: {
          fontSize: 20,
          color: COLORS.dark_green,
        },
      },
    },
    MuiSkeleton: {
      styleOverrides: {
        root: {
          backgroundColor: COLORS.coral_orange,
        },
        rectangular: {
          aspectRatio: '1/2',
          width: '100%',
          height: 400,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          maxWidth: 220,
          border: '1px solid black',
          margin: '0 2px',
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        scrollButtons: {
          color: COLORS.coral_orange,
          svg: {
            fontSize: ICON_SIZE,
          },
        },
        indicator: {
          backgroundColor: COLORS.dark_green,
          opacity: 0.5,
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontSize: '1rem',
          fontWeight: 700,
          color: COLORS.dark_green,
          backgroundColor: alpha(COLORS.light_orange, 0.3),
          backdropFilter: 'blur(3px)',
        },
        tooltipPlacementTop: {},
      },
    },
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          padding: '4px 32px',
        },
        textPrimary: {
          padding: '2px 0px',
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          scrollBehavior: 'smooth',
        },
        body: {
          padding: '0 !important',
          margin: '0 !important',
          overflow: 'unset !important',
        },
        section: {
          marginBottom: 33,
        },
        '@-moz-document url-prefix()': {
          html: {
            overflowY: 'auto',
            scrollbarColor: `${COLORS.coral_orange} ${COLORS.light_orange}`,
            scrollbarWidth: 'thin',
          },
        },
        '*::-webkit-scrollbar': {
          width: '0.4rem',
        },
        '*::-webkit-scrollbar-track': {
          boxShadow: `inset ${shadows.boxShadow1}, inset ${shadows.boxShadow2}`,
        },
        '*::-webkit-scrollbar-thumb': {
          backgroundColor: COLORS.coral_orange,
          borderRadius: 25,
        },
      },
    },
  },
})
export default theme = responsiveFontSizes(theme)
