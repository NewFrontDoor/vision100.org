// @flow

import Typography from 'typography';
import {fontFace} from 'polished';

export const lrgDesktopMinWidth = 1441;
export const desktopMaxWidth = 1440;
export const desktopMinWidth = 1021;
export const tabletMaxWidth = 1020;
export const tabletMinWidth = 624;
export const mobileMaxWidth = 623;
export const mobileMinWidth = 0;

export const media = {
  tablet: `@media (min-width: ${tabletMinWidth}px)`,
  desktop: `@media (min-width: ${desktopMinWidth}px)`
};

export const srcSet = {
  tablet: `(min-width: ${tabletMinWidth}px)`,
  desktop: `(min-width: ${desktopMinWidth}px)`
};

export const raleway = fontFace({
  fontFamily: 'Raleway',
  fontStyle: 'normal',
  fontWeight: 'normal',
  fontFilePath: '/static/fonts/raleway-latin-400'
});

export const ralewayBold = fontFace({
  fontFamily: 'Raleway',
  fontStyle: 'normal',
  fontWeight: 'bold',
  fontFilePath: '/static/fonts/raleway-latin-700'
});

export const typography = new Typography({
  baseFontSize: '20px',
  baseLineHeight: 1.5,
  scaleRatio: 2.5,
  headerColor: 'rgb(0, 153, 51)',
  headerFontFamily: [
    'Raleway',
    'Helvetica Neue',
    'Segoe UI',
    'Helvetica',
    'Arial',
    'sans-serif'
  ],
  headerWeight: 200,
  bodyColor: 'rgb(85, 85, 85)',
  bodyWeight: 200,
  bodyFontFamily: [
    'Raleway',
    'Helvetica Neue',
    'Segoe UI',
    'Helvetica',
    'Arial',
    'sans-serif'
  ],
  overrideStyles: ({adjustFontSizeTo}) => ({
    h1: {
      color: '#3C3'
    },
    h3: {
      color: '#3C3',
      fontWeight: 500,
      marginBottom: 0
    },
    ul: {
      ...adjustFontSizeTo('14px'),
      listStyleType: 'disc'
    },
    li: {
      marginBottom: 0
    },
    a: {
      transition: 'color 0.2s linear',
      color: '#428bca',
      textDecoration: 'none'
    },
    'a:visited': {
      color: '#339933'
    },
    'a:active, a:hover, a:focus': {
      color: '#339933',
      textDecoration: 'underline'
    }
  })
});
