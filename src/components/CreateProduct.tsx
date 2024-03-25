import axios from 'axios'
import React, { useState } from 'react'
import { IProduct } from '../models'
import { ErrorMessage } from './Error'

const productData: IProduct = {
   title: '',
   price: 13.5,
   description: 'lorem ipsum set',
   image: 'https://i.pravatar.cc',
   category: 'electronic',
   rating: {
      rate: 42,
      count: 10
   }
}

interface CreateProductProps {
   onCreate: (product:IProduct) => void
}

export function CreateProduct({ onCreate}: CreateProductProps) {

   const [value, setValue] = useState('')
   const [error, setError] = useState('')

   const submitHandler = async (event: React.FormEvent) => {
      event.preventDefault()
      setError('')

      if (value.trim().length === 0) {
         setError('Please enter valid title.')
         return {}
      }

      productData.title = value
      const response = await axios.post<IProduct>('https://fakestoreapi.com/products', productData)

      onCreate(response.data)
   }

   const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value)
   }

   return(
      <form onSubmit={submitHandler}>
         <input
            type='text'
            className="border rounded py-2 px-4 mb-2 w-full outline-0"
            placeholder="Enter product title"
            value={value}
            onChange={changeHandler}
         />
         {error && <ErrorMessage error={error} />}
         <div className='w-full flex justify-center'>
            <button type="submit" className="
            py-2 px-4 justify-center rounded border text-white bg-gray-500 
            hover:bg-red-500 hover:text-yellow-200 hover:underline
            ">Create</button>
         </div>
        
      </form>
   )
}