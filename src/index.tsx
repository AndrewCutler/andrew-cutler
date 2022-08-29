import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  extendTheme,
  useBreakpointValue,
} from '@chakra-ui/react';

const container = document.getElementById('root');
if (!container) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(container);

const theme = extendTheme({
  fonts: {
    body: 'Inconsolata',
  },
  colors: {
    primary: {
      '100': '#bdeddf',
      '200': '#92e1ca',
      '300': '#66d4b5',
      '400': '#45cba5',
      '500': '#24c295',
      '600': '#20bc8d',
      '700': '#1bb482',
      '800': '#16ac78',
      '900': '#0d9f67',
    },
    secondary: {
      '100': '#dfc4d1',
      '200': '#c99cb3',
      '300': '#b37494',
      '400': '#a3577d',
      '500': '#933966',
      '600': '#8b335e',
      '700': '#802c53',
      '800': '#762449',
      '900': '#641738',
    },
    dark: {
      '100': '#bdc3c2',
      '200': '#929c99',
      '300': '#667470',
      '400': '#455651',
      '500': '#243832',
      '600': '#20322d',
      '700': '#1b2b26',
      '800': '#16241f',
      '900': '#0d1713',
    },
    light: {
      '100': '#f3f2f5',
      '200': '#eceaee',
      '300': '#e4e1e7',
      '400': '#dedae2',
      '500': '#d8d4dd',
      '600': '#d4cfd9',
      '700': '#cec9d4',
      '800': '#c8c3cf',
      '900': '#bfb9c7',
    },
  },
});

root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
