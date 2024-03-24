import React from 'react'
import { Link } from 'react-router-dom'
import { useUser } from '../hooks/user';
import logo from '../images/logo192.png';
import { IUser } from '../models';
import { UserProfile } from './UserProfile';

export function Navigation() {
let user:IUser = useUser().user!
console.log(user)

   return(
      <>
         <nav className='sticky top-0 h-[50px] relative flex justify-start px-5 bg-gray-500 text-white items-center'>
            <Link to="/" className='absolute mr-2'>
               <img src={logo} className='h-[50px]' />
            </Link>
            <span className='absolute flex justify-end h-[50px] mr-5 right-0'>
               <UserProfile user={ user } />
               <span className='flex justify-end items-center h-[50px] mr-10 right-0'>
                  
                  <Link to="/" className='
                     p-2 rounded content-center size-full 
                     hover:bg-red-500 hover:text-yellow-200 hover:underline
                  '>Main</Link>
                  <Link to="/about" className='
                     p-2 rounded content-center size-full 
                     hover:bg-red-500 hover:text-yellow-200 hover:underline
                  '>About</Link>
               </span>
            </span>


         </nav>
      </>
   )
}