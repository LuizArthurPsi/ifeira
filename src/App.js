import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';

import theme from './global/styles/theme';

import Home from './pages/Home';

export default function App() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <Home />
            </ThemeProvider>
        </>
    );
}
