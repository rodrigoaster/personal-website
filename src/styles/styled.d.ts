import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string,
  
    colores: {
      primary: string,
      secundary: string,

      background: string,
      color: string
  }
  }
}