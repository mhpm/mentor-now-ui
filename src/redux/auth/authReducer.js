import {
  FACEBOOK_SIGN_IN_START,
  FACEBOOK_SIGN_IN_SUCCESS,
  FACEBOOK_SIGN_IN_FAILURE,
  EMAIL_SIGN_IN_START,
  SIGN_OUT_START,
  EMAIL_SIGN_IN_SUCCESS,
  EMAIL_SIGN_IN_FAILURE,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_FAILURE,
  SIGN_UP_START,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
} from './authTypes'

const INITIAL_STATE = {
  isLoading: false,
  isSignOut: true,
  token: null,
  error: null,
  user: {},
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FACEBOOK_SIGN_IN_START:
    case EMAIL_SIGN_IN_START:
    case SIGN_UP_START:
    case SIGN_OUT_START:
      return {
        ...state,
        isLoading: true,
        error: null,
      }
    case FACEBOOK_SIGN_IN_SUCCESS:
    case EMAIL_SIGN_IN_SUCCESS:
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        isSignOut: false,
        isLoading: false,
        token: action.token,
        user: action.user,
        error: null,
      }
    case SIGN_OUT_SUCCESS:
      return {
        ...state,
        isSignOut: true,
        isLoading: false,
        token: null,
        user: {},
        error: null,
      }
    case FACEBOOK_SIGN_IN_FAILURE:
    case EMAIL_SIGN_IN_FAILURE:
    case SIGN_OUT_FAILURE:
    case SIGN_UP_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      }

    default:
      return state
  }
}
