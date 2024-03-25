import React, {useState, useEffect} from 'react';
import {tmdbApi} from  "./utils/api";
const App = () => {
useEffect(()=>{
  apiTesting();

},[]);
  const apiTesting = ()=>{
 tmdbApi('/movie/popular').then((data) => console.log(data))
// console.log("Safdar");
  }
  // console.log(apiTesting);
  return (
    <div className='App'>App</div>
  )
}

export default App