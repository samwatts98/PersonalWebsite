import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    primaryColour: string;
    secondaryColour: string;
    ternaryColour: string;
    textColour: string;
  }
}
