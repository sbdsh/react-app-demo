import React, { useState } from 'react'
import { products } from '../data/products'
import { IProduct } from '../models'

interface ProductProps {
   product: IProduct
}

export function Product({ product }: ProductProps) {
   const [details, setDetails] = useState(false)

   const btnBgClassName = details ? 'bg-red-500 text-yellow-200 hover:underline' : 'bg-gray-500 text-white hover:underline'

   const btnClasses = ['py-2 px-4 rounded border', btnBgClassName]

   return (
      <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
         <img src={product.image} className="w-1/6" alt={ product.title } />
         <p>{ product.title }</p>
         <span className='font-bold'>{product.price}</span>

         <button 
            className={btnClasses.join(' ')}
            onClick={() => setDetails(prev => !prev)}
         >
            { details ? 'Hide Details' : 'Show Details'}
         </button>


         { details && <div>
            <p>{product.description}</p>
            { product.rating && <p>Rate: <span style={{ fontWeight: 'bold'}}>{product.rating.rate}</span></p>}
         </div>}
         {/* <p>{product.description}</p> */}
      </div>
   )
}