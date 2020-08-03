
export interface Message {
    username: string,
    email: string,
    image: string,
    role: string
}

export const IS_CONNECTED = 'IS_CONNECTED'
export const IS_DISCONNECTED = 'IS_DISCONNECTED'

interface ConnectionAction {
  type: typeof IS_CONNECTED
  payload: Message
}

interface DeconnectionAction {
  type: typeof IS_DISCONNECTED
}

export interface UserState {
    
  }

export type UserActionsTypes = ConnectionAction | DeconnectionAction