import { RESTORE_TOKEN, SIGN_IN, SIGN_OUT } from './authTypes'

export default (state, action) => {
  switch (action.type) {
    case RESTORE_TOKEN:
      return {
        ...state,
        userToken: action.token,
        isLoading: false,
        user: action.user,
      }
    case SIGN_IN:
      return {
        ...state,
        isSignout: false,
        userToken: action.token,
        user: action.user,
      }
    case SIGN_OUT:
      return {
        ...state,
        isSignout: true,
        userToken: null,
        user: {},
      }

    default:
      return state
  }
}
