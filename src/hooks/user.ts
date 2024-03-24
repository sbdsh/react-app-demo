import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { IUser } from '../models';

export function useUser(){
   const [user, setUser] = useState<IUser>()


   async function fetchUser(){
      const response = await axios.get<IUser>('https://dummyjson.com/users/1?select=firstName,lastName,email,image')
      setUser(response.data)
   }

   useEffect(() => {
      fetchUser()
   }, [])

   return { user }
}