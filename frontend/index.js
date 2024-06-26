import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App'
import './styles/reset.css'
import './styles/styles.css'
import theme from './themes';
import { ThemeProvider } from 'styled-components';

const domNode = document.getElementById('root')
const root = createRoot(domNode)

root.render(
  <ThemeProvider theme={theme}>
  <App />
  </ThemeProvider>
  ,
  document.querySelector('#root')
)
