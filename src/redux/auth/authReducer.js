import {
  RESTORE_TOKEN_START,
  RESTORE_TOKEN_SUCCESS,
  RESTORE_TOKEN_FAILURE,
  FACEBOOK_SIGN_IN_START,
  EMAIL_SIGN_IN_START,
  SIGN_OUT_START,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_FAILURE,
  SIGN_UP_FAILURE,
} from './authTypes'

const INITIAL_STATE = {
  isLoading: true,
  isSignOut: true,
  token: null,
  error: null,
  user: {},
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RESTORE_TOKEN_START:
    case FACEBOOK_SIGN_IN_START:
    case EMAIL_SIGN_IN_START:
    case SIGN_OUT_START:
      return {
        ...state,
        isLoading: true,
      }
    case RESTORE_TOKEN_SUCCESS:
    case SIGN_IN_SUCCESS:
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
    case RESTORE_TOKEN_FAILURE:
    case SIGN_IN_FAILURE:
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
