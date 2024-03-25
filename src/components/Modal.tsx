import React from 'react'
import {CloseCircleOutlined} from '@ant-design/icons'

interface ModalProps {
   children: React.ReactNode
   title: string
   onClose: () => void
}

export function Modal({children, title, onClose}: ModalProps) {
   return(
      <>
         <div
            className='fixed bg-black/50 top-0 right-0 left-0 bottom-0' 
            onClick={onClose}
         />
         <div className='fixed w-[100%] sm:w-[500px] p-5 rounded bg-white top-20 left-1/2 -translate-x-1/2'>
            <h1 className='text-2xl text-center mb-2'>{ title }</h1>
            { children }
            <button className='absolute top-1 right-1' onClick={onClose}><CloseCircleOutlined /></button>
         </div> 
      </>
   )
}