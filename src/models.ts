export interface IProduct {
   id?: number
   title: string
   price: number
   description: string
   category: string
   image: string
   rating: {
      rate: number
      count: number
   }
}

export interface IUser {
   id: number
   firstName: string
   lastName: string
   email: string
   image: string
}