import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import "./style.scss";
const HeroBanner = () => {

  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");

  
const navigate = useNavigate();
  const searchQueryHandler = (event) =>{
if (event.key === "Enter" && query.length  >0){
     navigate (`/search/${query}`);

  }}

  return (
    <div className='heroBanner'>
      <div className="wrapper">
        <div className="heroBannerContent">
<span className="title">Welcome</span>
<span className="subTitle"> Millions of movies, TV shows and people to discover.
Explore now.</span>

<div className="searchInput">
<input type="text" placeholder='Search for a moviie 
or tv show....'
onChange={(e)=> setQuery(e.target.value)}
onKeyUp={searchQueryHandler}
/>

</div>
<button>Search</button>
        </div>
      </div>

    </div>
  )
}

export default HeroBanner
