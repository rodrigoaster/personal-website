import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string,
  
    colores: {
      background: string,
      text: string,
      text_light: string;
  }
  }
}