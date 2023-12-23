export interface IUser{
    name:string,
    surname:string | null,
    email:string
    password:string
}

export interface IRegisterPayload{
    name:string
    email:string
    password:string
}