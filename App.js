import 'react-native-gesture-handler'
import React from 'react'
import Navigator from './src/navigations/Navigator'
import { ThemeProvider } from 'styled-components'
import theme from './src/theme/LightTheme'
import { AppLoading } from 'expo'
import {
  useFonts,
  Roboto_100Thin,
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  Roboto_900Black,
} from '@expo-google-fonts/roboto'

const App = () => {
  let [fontsLoaded] = useFonts({
    Roboto_100Thin,
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    Roboto_900Black,
  })

  if (!fontsLoaded) return <AppLoading />
  else
    return (
      <ThemeProvider theme={theme}>
        <Navigator />
      </ThemeProvider>
    )
}

export default App
