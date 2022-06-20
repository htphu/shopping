import React, { useEffect, useState } from 'react'
import Card from './Card'
import './Home.scss'
import Search from './Search';

export default function Home() {

  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = () => {
      fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(json => {
          setData(json);
          setFilter(json);
          setLoading(false);
        })
        .catch(error => console.log(console.log(error)))
      

    }
    getProducts();
  }, [])

  const Loading = () => {
    return (
      <>
        <div className="loading">
          Loading...
        </div>
      </>
    )
  }
  const ShowProducts = () => {
    return (
      filter.map((filter, index) => {
        return (
          <Card key={index} title={filter.title} price={filter.price} image={filter.image} id={filter.id}/>
        )
      })
    )
  }
  const handleFilter= (x)=>{
    const updateProducts = data.filter((data)=>data.category === x);
    setFilter(updateProducts);
  }
  //Dùng để rerender 
  function useForceUpdate() {
    const [value, setValue] = useState(0);
    return () => setValue((value) => value + 1);
  }
  const forceUpdate = useForceUpdate();
  //
  const sortProducts = (x)=>{
    if(x === 'up'){
      filter.sort((a,b) => parseInt(a.price) - parseInt(b.price) )
      forceUpdate()
    }else if(x === 'down'){
      filter.sort((a,b) => parseInt(b.price) - parseInt(a.price) )
      forceUpdate()
    }
  }

  return (
    <>
      <div className="container">
        <div className="filter">
          <div className="">
            <span onClick={()=>{setFilter(data)}}>All</span>
            <span onClick={()=>{handleFilter("electronics")}}>Electronics</span>
            <span onClick={()=>{handleFilter("jewelery")}}>Jewelery</span>
            <span onClick={()=>{handleFilter("men's clothing")}}>Men's clothing</span>
            <span onClick={()=>{handleFilter("women's clothing")}}>Women's clothing</span>
          </div>
          <div className="">
            <span onClick={()=>{sortProducts('up')}}><i class="fas fa-sort-amount-up-alt"></i>Giá tăng dần</span>
            <span onClick={()=>{sortProducts('down')}}><i class="fas fa-sort-amount-down"></i>Giá giảm dần</span>
          </div>
        </div>
        <Search data={data} filter={filter} setFilter={setFilter}/>
        <div className="products">
          {isLoading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </>
  )
}
