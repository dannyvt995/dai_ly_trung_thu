"use client"
import {useState} from 'react'
import s from './style.module.css'
import type { Metadata } from "next";
import { useCounterStore } from '@/providers/counter-store-provider';



const ProductManager: React.FC = () => {
  const products = useCounterStore((state) => state.products);
  const addProduct = useCounterStore((state) => state.addProduct);
  const removeProduct = useCounterStore((state) => state.removeProduct);
  const updateProduct = useCounterStore((state) => state.updateProduct);

  const [newProduct, setNewProduct] = useState({ id: 0, name: '', brand: '' });
  
  const handleAddProduct = () => {
    addProduct(newProduct);
    setNewProduct({ id: 0, name: '', brand: '' });
  };

  return (
    <div>
      <h1>Product Manager</h1>
      <button onClick={handleAddProduct}>Add Product</button>
      <div>
        <input
          type="number"
          placeholder="ID"
          value={newProduct.id}
          onChange={(e) => setNewProduct({ ...newProduct, id: Number(e.target.value) })}
        />
        <input
          type="text"
          placeholder="Name"
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Price"
          value={newProduct.brand}
          onChange={(e) => setNewProduct({ ...newProduct, brand: (e.target.value) })}
        />
        <button onClick={handleAddProduct}>Add Product</button>
      </div>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            ID product:::{product.id} 
            brand product:::{product.brand} 
            <button onClick={() => removeProduct(product.id)}>Remove</button>
            <button
              onClick={() =>
                updateProduct({ ...product, name: product.name + ' (Updated)' })
              }
            >
              Update
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductManager;
