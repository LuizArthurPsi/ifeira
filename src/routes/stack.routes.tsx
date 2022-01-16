import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignIn from '../pages/SignIn';
import { NavigationContainer } from '@react-navigation/native';
import { TabRoutes } from './tab.routes';

const { Navigator, Screen } = createNativeStackNavigator();

export function StackRoutes() {
    return (
        <NavigationContainer>
            <Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Screen name="SigIn" component={SignIn} />
                <Screen name="TabRoutes" component={TabRoutes} />
            </Navigator>
        </NavigationContainer>
    );
}
