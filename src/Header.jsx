import React, { useState } from "react";
import HighlightIcon from '@mui/icons-material/Highlight';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Button, IconButton } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4'; 
import Brightness7Icon from '@mui/icons-material/Brightness7'; 
import { CssBaseline } from '@mui/material';

const themes = {
    light: {
      palette: {
        mode: 'light',
        primary: {
          main: '#1976D2', 
        },
        background: {
          default: '#fff',
        },
      },
    },
    dark: {
      palette: {
        mode: 'dark',
        primary: {
          main: '#90CAF9', 
        },
        background: {
          default: '#212121', 
        },
        text: {
            primary: '#black'
        },
      },
    },
  };

function Header(){
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };
    
    const currentTheme = createTheme(themes[isDarkMode ? 'dark' : 'light']);
    
    return (
        <>  
        <header>
            <h1><HighlightIcon />Keeper</h1>
            <ThemeProvider theme={currentTheme}>
            <CssBaseline />
                <div className="App">
                <IconButton onClick={toggleTheme} aria-label="Toggle dark mode">
                    {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>
                </div>
            </ThemeProvider>  
        </header>
        </>
    )
}
export default Header;