
export interface IUser {
    id:         string,
    firstName:  string,
    email:      string,
    role:       string
}

export interface IProperty {
    id:         string,
    location:   string,
    description:string,
    date:       string,
    size:       number
}

export interface IRoom {
    id:         string,
    size:       number,
    description:string,
    date:       string,
    user:       IUser,
    property:   IProperty
}