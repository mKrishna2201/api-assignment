import axios from 'axios';
import { useEffect,useState } from 'react';
import './App.css';

const Api=()=>{
  const[post,setPost]=useState([])
  useEffect(()=>{
    axios.get("https://random-data-api.com/api/users/random_user?size=10").then((response)=>{
    console.log(response.data);
    setPost(response.data);
  });
},[])
return(
  <>
  {
   post.map((val)=>{
    return(
      <div className='flip-card'>
        <div className='flip-card-inner'>
          <div className='flip-card-front'>
            <img src={val.avatar} alt="Avatar"></img>
          </div>
          <div className='flip-card-back'>
            <h1>{val.id}</h1>
            <p>{val.first_name},{val.last_name}</p>
            <h6>{val.email}</h6>
          </div>
        </div>
      </div>
    )

   }) 
  }
  </>
)
}
export default Api;