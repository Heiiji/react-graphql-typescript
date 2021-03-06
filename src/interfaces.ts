export interface IUser {
  id: string;
  firstName: string;
  email: string;
  role: string;
}

export interface IBooking {
  id: string;
  date: string;
  user: IUser;
  roomId: string;
  message: string;
}

export interface IProperty {
  id: string;
  location: string;
  description: string;
  date: string;
  size: number;
  address: string;
  images: [string];
  rooms: [IRoom];
}

export interface IRoom {
  id: string;
  size: number;
  description: string;
  date: string;
  price: number;
  active: boolean;
  images: [string];
  tenant: IUser;
  bookings: Array<IBooking>;
  user: IUser;
  property: IProperty;
}
