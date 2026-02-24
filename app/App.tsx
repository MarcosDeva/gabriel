import React from 'react';
import * as SplashScreen from 'expo-splash-screen';

// import * as Notifications from 'expo-notifications';
// import { PlantProps } from './src/libs/storage';

import Routes from './src/routes/routes';

import {
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_600SemiBold,
  Roboto_300Light,
  useFonts
} from '@expo-google-fonts/roboto';

export default function App() {
  const [loaded, error] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_600SemiBold,
    Roboto_300Light
  })
  return (
    <Routes />
  )
}