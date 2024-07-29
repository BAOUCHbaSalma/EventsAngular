export interface User{
    userId:number
    username:string
    password:string
    age:number
    genre:string
    role:Erole
}

export interface Reservation{
    idReservetion:number
    dateReservation:string
    HeursReservation:string
    evenement:Evenement
    user:User
}

export interface Evenement{
    idEvenement:number
    titre:string
    description:string
    lieu:string
    dateEvenement:string
    prix:Number
    categorie:string
    heursEvenement:string
    image:string
}

export interface Contact{
    idContact:number
    sujet:string
    message:string
     user:User
}
export enum Erole {
    ADMIN = 'ADMIN',
    USER = 'USER'
}