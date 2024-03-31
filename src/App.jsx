import React, {useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route}  from 'react-router-dom'
import {tmdbApi} from  "./utils/api";
import { useSelector, useDispatch } from 'react-redux'
import { getApiConfiguration } from './store/homeSlice';
import Home from './pages/home/Home';


const App = () => {

  const dispatch = useDispatch();
  const { url } = useSelector((state)=>state.home)
useEffect(()=>{
  apiTesting();

},[]);
  const apiTesting = ()=>{
 tmdbApi('/movie/popular').then((data) =>{

   console.log(data)

   dispatch(getApiConfiguration(data));
 }
 )
// console.log("Safdar");
  }
  // console.log(apiTesting);
  return (
    <BrowserRouter >
    <Routes>
<Route path="/" element={<Home />} />

    </Routes>


    </BrowserRouter>
  )
}

export default App