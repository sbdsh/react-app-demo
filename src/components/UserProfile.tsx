import { MailOutlined } from "@ant-design/icons"
import React, { useState } from "react"
import { IUser } from "../models"

interface UserProps {
   user: IUser
}

export function UserProfile({ user }: UserProps) {
   const [dropdownActive, setDropdownActive] = useState(false)
   console.log(user)
   const handleMouseEnter = () => {
      setDropdownActive(true)
   }

   const handleMouseLeave = () => {
      setDropdownActive(false)
   }

   return(
      <div className=""             
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      >
         <div className='
               p-2 rounded-t-lg content-center size-full text-right
               hover:bg-red-500 hover:text-yellow-200 hover:underline
         '>Profile</div>
         {dropdownActive && <div className="bg-gray-500 rounded-b-lg">
            <ul>
               <li className="py-1 text-center">{user.firstName} {user.lastName}</li>
               <li className="py-1 text-center">{user.email}</li>
               <li className="py-1 text-center"><img className="rounded-full size-40" src={user.image}></img></li>
            </ul>
         </div>}
      </div>
   )
}