import React from 'react';
import { ThemeProvider } from 'styled-components/native';

import theme from './global/styles/theme';

import SignIn from './pages/SignIn';

export default function App() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <SignIn />
            </ThemeProvider>
        </>
    );
}
