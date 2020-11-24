import React, { useContext } from 'react'
import { FontAwesome5 } from '@expo/vector-icons'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import AuthContext from '../context/auth/authContext'
import theme from '../theme/LightTheme'

// Auth Screens
import LoginScreen from '../screens/auth/LoginScreen'
import SignInScreen from '../screens/auth/SignInScreen'
import SignUpScreen from '../screens/auth/SignUpScreen'
import RecoveryScreen from '../screens/auth/RecoveryScreen'

// Main Screens
import HomeScreen from '../screens/main/HomeScreen'
import CatalogScreen from '../screens/main/CatalogScreen'
import MentorsScreen from '../screens/main/MentorsScreen'
import ProfileScreen from '../screens/main/ProfileScreen'
import FavoritesScreen from '../screens/main/FavoritesScreen'

// Modals Screens
import MentorProfileScreen from '../screens/main/MentorProfileScreen'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

function Auth() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="Register" component={SignUpScreen} />
      <Stack.Screen name="Recovery" component={RecoveryScreen} />
    </Stack.Navigator>
  )
}

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
          if (route.name === 'Mentors') {
            iconName = 'user-tie'
          }
          if (route.name === 'Favorites') {
            iconName = 'heart'
          }
          if (route.name === 'Profile') {
            iconName = 'user-alt'
          }

          // You can return any component that you like here!
          return (
            <FontAwesome5
              style={{ marginTop: 30 }}
              name={iconName}
              size={24}
              color={iconColor}
            />
          )
        },
      })}
      tabBarOptions={{
        showLabel: false,
        style: {
          position: 'absolute',
          borderTopRightRadius: 100,
          borderTopLeftRadius: 100,
          borderBottomEndRadius: 100,
          borderBottomLeftRadius: 100,
          borderTopWidth: 0,
          left: 5,
          right: 5,
          bottom: -20,
        },
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Catalog" component={CatalogScreen} />
      <Tab.Screen name="Mentors" component={MentorsScreen} />
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

function RootNavigator() {
  const { userToken } = useContext(AuthContext)
  console.log('userToken: ', userToken)
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          gestureEnabled: true,
          gestureDirection: 'horizontal',
        }}
        headerMode="none"
        animation="fade"
      >
        {userToken == null ? (
          <Stack.Screen name="Auth" component={Auth} />
        ) : (
          <Stack.Screen name="Main" component={Main} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigator
