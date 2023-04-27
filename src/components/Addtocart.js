import React,{useState,useEffect} from 'react'
import Nav from './Nav'
import { useParams } from 'react-router-dom'
const Addtocart = () => {
  const {id}=useParams();
const [data,setData]=useState({id:0,
title:"",
description:"",
image:"",
price:0,
category:"",}

);
useEffect(() => {

  fetch(`https://fakestoreapi.com/products/${id}`)
  .then (resp =>resp.json())
  .then(data=>setData(data))
  
  .catch(error=>console.log(error))


},[id])
console.log(data)
// `https://fakestoreapi.com/products/${pars}`
  return (
    <div>
    <Nav/>
    <div className='card'>
                  <img src={data.image} alt=""></img>
                  <h6>{data.title}</h6>
                  <p>{data.category}</p>
                  <p>{data.description}</p>
                  <p>{data.price}</p>
                 {data.id>=1 &&<button onClick={()=>setData({})}>Remove from Cart</button>} 
                  </div>
              

   
</div>
  )
}

export default Addtocart