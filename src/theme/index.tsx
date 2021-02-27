import { DefaultTheme, ThemeProvider } from 'styled-components';
import { Colors } from './styled';

export * from './components'

export const colors = (isDarkMode: boolean): Colors => ({
  // Base
  white: '#FFFFFF',
  black: '#000000',

  // Blues
  primary1: '#1D55E6',

  // Text
  text1: isDarkMode ? '#FFFFFF' : '#000000',
});

export const theme = (isDarkMode: boolean): DefaultTheme => ({
  ...colors(isDarkMode),
});

export default function ProvidedTheme({ children }: { children: React.ReactNode }) {
  // TODO: Implement
  const isDarkMode = false;

  const themeObj = theme(isDarkMode);

  return <ThemeProvider theme={themeObj}>{children}</ThemeProvider>
}
