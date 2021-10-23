import 'styled-components'

export type ThemeTypes = {
  title: string,
  colors: {
    themeColors: {
      primary: {
        light: string,
        normal: string
      },
      background: {
        light: string,
        normal: string
      }
      text: {
        normal: string;
        dark: string;
      }
    }

    white: string;
    grey: string;
    opaque: string;
    purple: string;
    purpleDark: string;
    green: string;
    orange: string;
    pink: string;
    blue: string;
    lightBlue: string;
    red: string;
    yellow: string;
  }
};
