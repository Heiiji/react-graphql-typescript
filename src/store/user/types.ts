export interface User {
  email: string;
  firstName: string;
  id: string;
  role: number;
  isConnected: boolean;
}

export const IS_CONNECTED = 'IS_CONNECTED';
export const IS_DISCONNECTED = 'IS_DISCONNECTED';

interface ConnectionAction {
  type: typeof IS_CONNECTED;
  payload: User;
}

interface DeconnectionAction {
  type: typeof IS_DISCONNECTED;
}

export interface UserState {}

export type UserActionsTypes = ConnectionAction | DeconnectionAction;
