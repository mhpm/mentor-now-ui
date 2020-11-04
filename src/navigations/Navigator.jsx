import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import theme from '../theme/LightTheme'

// Screens
import LoginScreen from '../screens/auth/LoginScreen'
import HomeScreen from '../screens/main/HomeScreen'
import CatalogScreen from '../screens/main/CatalogScreen'
import SearchScreen from '../screens/main/SearchScreen'
import ProfileScreen from '../screens/main/ProfileScreen'
import MentorProfileScreen from '../screens/main/MentorProfileScreen'
import FavoritesScreen from '../screens/main/FavoritesScreen'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

function Main() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName
          let iconColor = focused
            ? theme.colors.primary
            : theme.colors.secondary

          if (route.name === 'Home') {
            iconName = 'home'
          }
          if (route.name === 'Catalog') {
            iconName = 'book'
          }
          if (route.name === 'Search') {
            iconName = 'user-tie'
          }
          if (route.name === 'Favorites') {
            iconName = 'heart'
          }
          if (route.name === 'Profile') {
            iconName = 'user-alt'
          }

          // You can return any component that you like here!
          return <FontAwesome5 name={iconName} size={24} color={iconColor} />
        },
      })}
      tabBarOptions={{
        showLabel: false,
        lazyLoad: true,
        tabStyle: {
          backgroundColor: '#ffffff',
          marginLeft: -8,
          marginEnd: -8,
          borderRadius: 10,
        },
        style: {
          backgroundColor: 'transparent',
          borderTopWidth: 0,
          position: 'absolute',
          left: 18,
          right: 18,
          bottom: 5,
          height: 60,
        },
      }}
    >
      <Tab.Screen
        style={{ backgroundColor: 'red' }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen name="Catalog" component={CatalogScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Favorites" component={FavoritesScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen
        options={{
          tabBarVisible: false,
          // option for hide tab bottom
          tabBarButton: () => null,
        }}
        name="MentorProfile"
        component={MentorProfileScreen}
      />
    </Tab.Navigator>
  )
}

function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Main" component={Main} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigator
