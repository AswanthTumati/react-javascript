import React from 'react'
import useFetch from './useFetch';
import useApi from './apiService';

const FetchComponent = () => {
    //const apiUrl = "https://dummy.restapiexample.com/api/v1/employees";
    const apiUrl = "https://jsonplaceholder.typicode.com/users";

    const { data, loading, error } = useFetch(apiUrl);
    console.log(data);
  
    if (loading) {
      return <p>Loading...</p>;
    }
  
    if (error) {
      return <p>Error: {error.message}</p>;
    }
  
    
    return (
      <div>
        {data&& data.map((item)=>(
            <li key={item.id} style={{'listStyleType':'none', 'textAlign':'center'}}>{item.name}</li>
        ))}
      </div>
    );
}

export default FetchComponent