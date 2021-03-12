import React from "react";

import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { AuthProvider } from './Contexts/AuthContext';

import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'


import Routes from "./routes/routes";


const theme = createMuiTheme({
    typography: {
        htmlFontSize: 10,
    }
});

  
function App() {
    return (    
        <ThemeProvider theme={theme}>
            <AuthProvider>
                <BrowserRouter>
                    <DndProvider backend={HTML5Backend}>
                        <Routes/>
                    </DndProvider>
                </BrowserRouter> 
            </AuthProvider>
        </ThemeProvider>
    );
}

export default App;
