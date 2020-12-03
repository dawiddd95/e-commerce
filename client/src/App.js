import { Button } from 'components/atoms/Button/Button';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/mainTheme'; 
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Button>
          smartphones
        </Button>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
