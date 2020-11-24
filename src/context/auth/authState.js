import React, { useReducer, useEffect, useMemo } from 'react'
import AuthContext from './authContext'
import AuthReducer from './authReducer'
import { RESTORE_TOKEN, SIGN_IN, SIGN_OUT } from './authTypes'
import AsyncStorage from '@react-native-async-storage/async-storage'
import * as Facebook from 'expo-facebook'

const AuthState = (props) => {
  const INITIAL_STATE = {
    isLoading: true,
    isSignout: false,
    userToken: null,
    user: {},
  }

  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE)

  const getUser = async () => {
    let info = await AsyncStorage.getItem('user')
    info = await JSON.parse(info)
    const { id, name, email, picture } = info
    const { data } = picture
    return { id: id, name: name, email: email, picture: data.url }
  }

  const logInFacebook = async () => {
    try {
      await Facebook.initializeAsync({
        appId: '1007474016423973',
      })
      const {
        type,
        token,
        expirationDate,
        permissions,
        declinedPermissions,
      } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ['public_profile', 'email'],
      })
      if (type === 'success') {
        // Get the user's name using Facebook's Graph API
        const response = await fetch(
          `https://graph.facebook.com/me?fields=id,name,picture.type(large),email&access_token=${token}`
        )
        const data = await response.json()
        console.log('Logged in!', data)
        await AsyncStorage.setItem('user', JSON.stringify(data))
        await AsyncStorage.setItem('userToken', token)
        const user = await getUser()
        dispatch({ type: 'SIGN_IN', token: token, user: user })
      } else {
        // type === 'cancel'
        console.log('login cancel')
      }
    } catch ({ message }) {
      console.log(`Facebook Login Error: ${message}`)
    }
  }

  useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken

      try {
        // After restoring token, we may need to validate it in production apps
        // This will switch to the App screen or Auth screen and this loading
        // screen will be unmounted and thrown away.
        userToken = await AsyncStorage.getItem('userToken')
        const user = await getUser()
        dispatch({ type: RESTORE_TOKEN, token: userToken, user: user })
      } catch (e) {
        // Restoring token failed
      }
    }

    bootstrapAsync()
  }, [])

  const authContext = useMemo(
    () => ({
      signInFacebook: () => logInFacebook(),
      signIn: async (data) => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token

        dispatch({ type: SIGN_IN, token: token })
      },
      signOut: async () => {
        await Facebook.logOutAsync()
        AsyncStorage.clear()
        dispatch({ type: SIGN_OUT })
      },
      signUp: async (data) => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token

        dispatch({ type: SIGN_IN, token: 'dummy-auth-token' })
      },
      userToken: state.userToken,
      user: state.user,
    }),
    [state]
  )

  return (
    <AuthContext.Provider value={authContext}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthState
