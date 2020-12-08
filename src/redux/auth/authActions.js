import * as Facebook from 'expo-facebook'
Facebook.initializeAsync({
  appId: '1007474016423973',
})

import {
  RESTORE_TOKEN_START,
  RESTORE_TOKEN_SUCCESS,
  RESTORE_TOKEN_FAILURE,
  FACEBOOK_SIGN_IN_START,
  EMAIL_SIGN_IN_START,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_OUT_START,
  SIGN_OUT_FAILURE,
  SIGN_OUT_SUCCESS,
} from './authTypes'

export const restoreToken = async (dispatch) => {
  try {
    dispatch({ type: RESTORE_TOKEN_START })
    dispatch({ type: RESTORE_TOKEN_SUCCESS, token: token, user: user })
  } catch ({ message }) {
    dispatch({ type: RESTORE_TOKEN_FAILURE, error: message })
  }
}

export const facebookSignIn = async (dispatch) => {
  try {
    dispatch({ type: FACEBOOK_SIGN_IN_START })

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
      const info = await response.json()
      console.log('Logged in!', info)

      const { id, name, email, picture } = info
      const { data } = picture
      const user = { id: id, name: name, email: email, picture: data.url }

      dispatch({ type: SIGN_IN_SUCCESS, token: token, user: user })
    } else {
      // type === 'cancel'
      console.log('login cancel')
    }
  } catch ({ message }) {
    dispatch({ type: SIGN_IN_FAILURE, error: message })
  }
}

export const signIn = (form) => async (dispatch) => {
  try {
    dispatch({ type: EMAIL_SIGN_IN_START })

    const res = await fetch(
      'http://45.55.110.117/mentornow-api/api/public/users/login',
      {
        method: 'POST',
        body: form,
      }
    )

    const info = await res.json()
    const { id, name, email, picture } = info
    const { data } = picture
    const user = { id: id, name: name, email: email, picture: data.url }

    if (data?.token) {
      dispatch({ type: SIGN_IN_SUCCESS, token: data.token })
      return
    }
    dispatch({ type: SIGN_IN_FAILURE, error: data.message })
  } catch ({ message }) {
    dispatch({ type: SIGN_IN_FAILURE, error: message })
  }
}

export const signOut = async (dispatch) => {
  try {
    dispatch({ type: SIGN_OUT_START })

    await Facebook.logOutAsync()

    dispatch({ type: SIGN_OUT_SUCCESS })
  } catch ({ message }) {
    dispatch({ type: SIGN_OUT_FAILURE, error: message })
  }
}
