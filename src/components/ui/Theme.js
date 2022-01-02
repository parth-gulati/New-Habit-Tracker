import { createTheme } from "@mui/material/styles"

const arcBlue = '#0B72B9';
const arcOrange = '#FFBA60';
const primaryColor = '#DF1F2D';
const pitchBlack = `#000000`;
const white = `#FFFFFF`;
const cosmicCobalt = `#2B3784`;

export default createTheme({
    customizeToolbar: {
        minHeight: 36
    },
    palette: {
        common: {
            arcBlue: `${arcBlue}`,
            arcOrange : `${arcOrange}`,
            white: `${white}`,
            pitchBlack: `${pitchBlack}`
        },
        primary: {
            main: `${primaryColor}`,
        },
        secondary: {
            main: `${cosmicCobalt}`
        },
        dark: {
            main: `${pitchBlack}`
        }
    },
    typography: {
        h3: {
            fontWeight: 300
        },
        h6: {
            fontWeight: 300,
            fontFamily: 'Montserrat'
        }
    }
})