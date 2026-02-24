import React from 'react';
import {} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Welcome } from '../pages/Welcome';

import AuthRoutes from './tab.routes';
import { Login } from '../pages/Login';

const Stack = createNativeStackNavigator();

const AppRoutes:  React.FC = () => (
    <Stack.Navigator
        screenOptions={{ headerShown: false }}
    >
        <Stack.Screen 
            name="Welcome"
            component={Welcome}
        />
        
        <Stack.Screen 
            name="Login"
            component={Login}
        />
        
    </Stack.Navigator>
)

export default AppRoutes;