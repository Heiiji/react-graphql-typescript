
export interface IUser {
    id:         string,
    firstName:  string,
    email:      string,
    role:       string
}

export interface IRoom {
    id:         string,
    location:   string,
    size:       number,
    description:string,
    date:       string,
    user:       IUser
}