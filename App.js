import 'react-native-gesture-handler'
import React from 'react'
import Navigator from './src/navigations/Navigator'
import { ThemeProvider } from 'styled-components'
import theme from './src/theme/LightTheme'
import { AppLoading } from 'expo'
import { useFonts } from '@use-expo/font'

const App = () => {
  let [fontsLoaded] = useFonts({
    Roboto_100Thin: require('./assets/fonts/Roboto-Thin.ttf'),
    Roboto_300Light: require('./assets/fonts/Roboto-Light.ttf'),
    Roboto_400Regular: require('./assets/fonts/Roboto-Regular.ttf'),
    Roboto_500Medium: require('./assets/fonts/Roboto-Medium.ttf'),
    Roboto_700Bold: require('./assets/fonts/Roboto-Bold.ttf'),
    Roboto_900Black: require('./assets/fonts/Roboto-Black.ttf'),
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
