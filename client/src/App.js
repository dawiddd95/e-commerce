import { Button } from 'components/atoms/Button/Button';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/mainTheme'; 

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Button>
        smartphones
      </Button>
    </ThemeProvider>
  );
}

export default App;
