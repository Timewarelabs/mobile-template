// import { shade } from 'polished'
import { ThemeTypes } from './theme-type'

export const LightTheme: ThemeTypes = {
  title: 'Light',
  colors: {
    themeColors: {
      primary: {
        light: '#6EBCFF',
        normal: '#0088FC'
      },
      background: {
        light: '#fff',
        normal: '#F6FCFF'
      },
      text: {
        normal: '#66739D',
        dark: '#425185'
      }
    },

    white: '#f7f7f7',
    grey: 'aeaeb0',
    opaque: '#41414D',
    purple: '#6633cc',
    purpleDark: '#5A4B81',
    green: '#67e480',
    orange: '#E89E64',
    pink: '#FF79C6',
    blue: '#2436e8', /** #5659eb */
    lightBlue: '#3AC5FF',
    red: '#E96379',
    yellow: '#e7de79'
  }
}