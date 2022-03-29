import { createBreakpoints } from '@chakra-ui/theme-tools';
import { extendTheme } from '@chakra-ui/react';

/**
 * Breakpoints for responsive designs
 * feel free to change the breakpoints if using a different design system
 */
const breakpoints = createBreakpoints({
  xs: '400px',
  sm: '600px',
  md: '768px',
  lg: '1100px',
  xl: '1280px',
  '2xl': '1440px',
  'final':"10px"
});

//The theme property we are extending
const theme = extendTheme({
  breakpoints, //passing in the new breakpoints we defined
 
});

//export the theme as default export, This will be passed in chakr-Provider
export default theme;