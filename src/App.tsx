import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';

import theme from './global/styles/theme';

import SignIn from './pages/SignIn';

export default function App() {
    return (
        <>
            <StatusBar hidden={true} />
            <ThemeProvider theme={theme}>
                <NavigationContainer>
                    <SignIn />
                </NavigationContainer>
            </ThemeProvider>
        </>
    );
}
