import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../pages/Home';
import theme from '../global/styles/theme';

import HomeSvg from '../assets/home_tab.svg';
import FavSvg from '../assets/fav_tab.svg';
import UserSvg from '../assets/user_tab.svg';
import HistorySvg from '../assets/history_tab.svg';

const { Navigator, Screen } = createBottomTabNavigator();

export function TabRoutes() {
    return (
        <Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: theme.colors.primary_color_item,
                tabBarShowLabel: false,
                tabBarInactiveTintColor: theme.colors.background,

                tabBarStyle: {
                    borderTopWidth: 0,
                    elevation: 0,
                    paddingVertical: Platform.OS === 'ios' ? 20 : 0,
                    height: 78,
                    backgroundColor: theme.colors.background,
                    paddingBottom: 20,
                },
            }}
        >
            <Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ color }) => (
                        <HomeSvg
                            width={22}
                            height={22}
                            fill={color}
                            color={color}
                            style={{ marginTop: 6 }}
                        />
                    ),
                }}
            />
            <Screen
                name="Fav"
                component={Home}
                options={{
                    tabBarIcon: ({ color }) => (
                        <FavSvg
                            width={22}
                            height={22}
                            fill={color}
                            style={{ marginTop: 6 }}
                        />
                    ),
                }}
            />
            <Screen
                name="User"
                component={Home}
                options={{
                    tabBarIcon: ({ color }) => (
                        <UserSvg
                            width={22}
                            height={22}
                            fill={color}
                            style={{ marginTop: 6 }}
                        />
                    ),
                }}
            />
            <Screen
                name="History"
                component={Home}
                options={{
                    tabBarIcon: ({ color }) => (
                        <HistorySvg
                            width={22}
                            height={22}
                            fill={color}
                            style={{ marginTop: 6 }}
                        />
                    ),
                }}
            />
        </Navigator>
    );
}
