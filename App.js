import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import LoginScreen from './src/screens/auth/LoginScreen'
import HomeScreen from './src/screens/main/HomeScreen'
import CatalogScreen from './src/screens/main/CatalogScreen'
import SearchScreen from './src/screens/main/SearchScreen'
import ProfileScreen from './src/screens/main/ProfileScreen'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

function Main() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName
          let iconColor
          const primaryColor = '#fbc02d'

          if (route.name === 'Home') {
            iconName = 'home'
            iconColor = focused ? primaryColor : 'gray'
          }
          if (route.name === 'Catalog') {
            iconName = 'tags'
            iconColor = focused ? primaryColor : 'gray'
          }
          if (route.name === 'Search') {
            iconName = 'search'
            iconColor = focused ? primaryColor : 'gray'
          }
          if (route.name === 'Profile') {
            iconName = 'user-alt'
            iconColor = focused ? primaryColor : 'gray'
          }

          // You can return any component that you like here!
          return <FontAwesome5 name={iconName} size={28} color={iconColor} />
        },
      })}
      tabBarOptions={{
        showLabel: false,
        lazyLoad: true,
        tabStyle: {
          backgroundColor: '#212529',
          margin: -8,
          borderRadius: 10,
        },
        style: {
          backgroundColor: 'transparent',
          borderTopWidth: 0,
          position: 'absolute',
          left: 18,
          right: 18,
          bottom: 15,
          height: 60,
        },
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Catalog" component={CatalogScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  )
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Main" component={Main} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
