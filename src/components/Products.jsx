import React from 'react'
import { product } from './Productlist'

export default function products() {
  return (
    <>
    {
        product.map((post,indexedDB) => {
            <div>
                <h1>

                {post.name}
                </h1>
                {/* <img src={post.url} alt="" /> */}
            </div>
            
        })
    }
    </>
  )
}
