import React, { useState,useEffect } from 'react'
import './Search.scss'

function useDebounce(value, delay) {
  const [debounce, setDebounce] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounce(value);
    }, delay);

    return ()=>clearTimeout(handler);
  }, [value])
  
  return debounce
}
export default function Search({filter,data, setFilter}) {
  const [searchValue,setSearchValue] = useState('');
  const debounceValue = useDebounce(searchValue, 500);

  useEffect(() => {
    if(debounceValue.trim() != ''){
      const product = data.filter((i)=>{
        return i.title.toLowerCase().indexOf(debounceValue.toLowerCase()) !==-1
      })
      
      setFilter(product)
    }else{
      setFilter(data)
    }
  }, [debounceValue])
  
  
  return (
    <div className="search">
      <div className="search-container">
        <input type="text" value={searchValue} placeholder="Tìm kiếm" onChange={(e)=>{
          setSearchValue(e.target.value)
        }}/>
        {searchValue && <i className="fas fa-times" onClick={()=>setSearchValue('')}></i>}
      </div>
    </div>
  )
}
