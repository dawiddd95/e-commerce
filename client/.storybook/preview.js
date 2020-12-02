import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/mainTheme.js';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

// Musimy dodać decorator ThemeProvider
export const decorators = [
  (story) => <ThemeProvider theme={theme}> {story()} </ThemeProvider>
]