import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';

import theme from './global/styles/theme';

import { Routes } from './routes';

export default function App() {
    return (
        <>
            <StatusBar hidden={true} />
            <ThemeProvider theme={theme}>
                <Routes />
            </ThemeProvider>
        </>
    );
}
