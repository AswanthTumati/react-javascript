import React, { useCallback, useState } from 'react'

const ItemList = ({items})=>{
    return(
        <ul>
            {items.map(item=>(
                <li key={item.id}>{item.username}</li>
            ))}
        </ul>
    )
}
const FilterData = ({data}) => {
    
    const [filter,setFilter] = useState('');
    const [filteredData,setFilteredData] = useState(data);

    const handleFilterChange = useCallback(
        (e)=>{
            const inputValue = e.target.value;
            setFilter(inputValue);
            
            const filteredItems = data.filter((item)=>item.username.toLowerCase().includes(inputValue.toLowerCase()));
            setFilteredData(filteredItems);

        },[data]) 

  return (
    <div>
        <input type='text' placeholder='search...' value={filter} onChange={handleFilterChange}></input>
        <ItemList items={filteredData}/>
    </div>
  )
}

export default FilterData