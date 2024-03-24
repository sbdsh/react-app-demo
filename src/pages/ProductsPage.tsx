import React, { useContext, useState } from 'react';
import { CreateProduct } from '../components/CreateProduct';
import { ErrorMessage } from '../components/Error';
import { Loader } from '../components/Loader';
import { Modal } from '../components/Modal';
import {Product} from '../components/Product'
import { ModalContext } from '../context/ModalContext';
import { useProducts } from '../hooks/products';
import { IProduct } from '../models';
import { PlusCircleOutlined } from '@ant-design/icons'

export function ProductsPage() {
  const { products, error, loading, addProduct } = useProducts()
  const {modal, open: openModal, close: closeModal} = useContext(ModalContext)

  const createHandler = (product: IProduct) => {
    closeModal()
    addProduct(product)
  }

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      { loading && <Loader /> }
      { error && <ErrorMessage error={error} /> }
      { products.map(product => <Product product={product} key={product.id} />) }

      {modal && <Modal title="Create new product" onClose={() => closeModal()}>
        <CreateProduct onCreate={createHandler}/>
      </Modal>}

      <button
        className='fixed border border-white bottom-5 right-5 rounded-full bg-gray-400 text-white text-2xl px-4 py-2 hover:border hover:border-black hover:bg-gray-500'
        onClick={() => openModal()}
      >
         <PlusCircleOutlined />
      </button>
    </div>
  )
}