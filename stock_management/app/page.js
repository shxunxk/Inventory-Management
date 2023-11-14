
"use client"

import Header from '@/Components/Header'

import React, {useState} from 'react';

export default function Home() {

  const ingredients = [
    {
      name: 'Tshirt',
      quantity: 5,
      price: 200
    }
  ]

  const [prod, setProd] = useState({})

  const handleChange = (e) => {
    setProd({...prod, [e.target.name]: e.target.value})
  }

  const addP = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({prod}),
      });
  
      if (response.ok) {
        console.log('Product added successfully');
      } else {
        const errorText = await response.text();
        console.error('Server error:', errorText);
        console.log('Not Successfully');
      }
    } catch (error) {
      console.error('Client error:', error);
    }
  };  

  return (
    <>
    <Header/>
    <div className="m-10">
      <div>
        <h1 className="section-name bg-pink-100 mx-auto px-2 rounded m-5">Current Stock</h1>
      </div>
      <div>
        <div className="flex items-center mb-4">
          <input
            type="text"
            placeholder="Search for a product..."
            className="border p-2 rounded-l"
            // onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="bg-blue-500 text-white p-2 rounded-r">
            Search
          </button>
        </div>
        <input
            id='name'
            name='name'
            type="text"
            placeholder="Enter the name"
            className="border p-2 rounded-l"
            onChange={handleChange}
          />
          <input
            id='quantity'
            name='quantity'
            type="text"
            placeholder="Enter the qty"
            className="border p-2 rounded-l"
            onChange={handleChange}
          />
          <input
            id='price'
            name='price'
            type="text"
            placeholder="Enter the price"
            className="border p-2 rounded-l"
            onChange={handleChange}
          />
        <button onClick={addP} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
          Add new item
        </button>
        <input
            type="text"
            placeholder="Search for a product..."
            className="border p-2 rounded-l"
            // onChange={(e) => setSearchTerm(e.target.value)}
          />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Delete item
        </button>
      </div>
      <table className="min-w-full bg-white border border-gray-300 rounded">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Ingredient</th>
            <th className="py-2 px-4 border-b">Stock Quantity</th>
            <th className="py-2 px-4 border-b">Price</th>
          </tr>
        </thead>
        <thead>
          {ingredients.map((ingredient, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border-b text-center">{ingredient.name}</td>
              <td className="py-2 px-4 border-b text-center">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-2 rounded mx-1"> - </button>
                {ingredient.quantity}
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-2 rounded mx-1"> + </button>
              </td>
              <td className="py-2 px-4 border-b text-center">{ingredient.price}</td>
            </tr>
          ))}
        </thead>
      </table>
    </div>
    </>
  )
}
