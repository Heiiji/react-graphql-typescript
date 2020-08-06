import {
    UserState,
    UserActionsTypes,
    IS_DISCONNECTED,
    IS_CONNECTED
  } from './types'

  const initialState: UserState = {
    isConnected: false
  }
  
  export function userReducer(
    state = initialState,
    action: UserActionsTypes
  ): UserState {
    switch (action.type) {
      case IS_CONNECTED:
        return action.payload
      case IS_DISCONNECTED:
        return {
        }
      default:
        return state
    }
  }