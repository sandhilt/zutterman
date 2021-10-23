import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    greyColor: string;
    brownColor: string;
    lightBrownColor: string;
    blueNavyColor: string;
    lightColor: string;
  }
}

export const themeDefault: DefaultTheme = {
  greyColor: '#e9e9e9',
  brownColor: '#846219',
  lightBrownColor: '#716565',
  blueNavyColor: '#506FA9',
  lightColor: '#fff',
};
