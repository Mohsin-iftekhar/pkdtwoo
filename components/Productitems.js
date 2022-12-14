import Link from 'next/link'
import React from 'react'

function Productitems({product}) {
  return (
    <div className='card'>
    <Link href={`/product/${product.slug}`}>
    <a>
    <img
    src={product.image}
    alt={product.name}
    className="rounded shadow"
    />
    </a>
    </Link>
    <div className='flex flex-col items-center justify-center p-5'>
   <Link href={`/product/${product.slug}`}>
   <a>
   <h2 className='tex-lg'>
   {product.name}
   </h2>
   </a>
   </Link> 
    <p className='mb-2'>
    {product.brand}
    </p>
    <p className='mb-2'>
    ${product.price}
    </p>
    <button className='primary-button' type='button'>
    <Link href={`/product/${product.slug}`}>
    View the product
    </Link>
    </button>
   </div>
    </div>
  )
}

export default Productitems