import React, { useContext } from 'react'
import { FontAwesome5 } from '@expo/vector-icons'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import AuthContext from '../context/auth/authContext'
import theme from '../theme/LightTheme'

// Auth Screens
import PrincipalScreen from '../screens/auth/PrincipalScreen'
import LoginScreen from '../screens/auth/LoginScreen'
import RegisterScreen from '../screens/auth/RegisterScreen'
import RecoveryScreen from '../screens/auth/RecoveryScreen'

// Main Screens
import HomeScreen from '../screens/main/HomeScreen'
import CatalogScreen from '../screens/main/CatalogScreen'
import SearchScreen from '../screens/main/SearchScreen'
import ProfileScreen from '../screens/main/ProfileScreen'
import FavoritesScreen from '../screens/main/FavoritesScreen'

// Modals Screens
import MentorProfileScreen from '../screens/main/MentorProfileScreen'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

function Auth() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Principal" component={PrincipalScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
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

function RootNavigator() {
  const { userToken } = useContext(AuthContext)
  console.log('userToken: ', userToken)
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
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
