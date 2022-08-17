import React, { useRef, useState } from 'react'
import Item from './Item'
import Navbar from './navbar';
function MovieList() {

    const [movies,setMovie]=useState(
           [
              {name:"jhon wick11",image:"https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_SX300.jpg",rate:"3"},
              {name:"jhon wick12",image:"https://upload.wikimedia.org/wikipedia/en/2/24/Creed_poster.jpg",rate:"3"},
           



])

 const namemovie=useRef();
 console.log(namemovie)
return (
    <div >
        <Navbar ></Navbar>
      {movies.map((e) => (
     
        <Item name={e.name} image={e.image} rate={e.rate}></Item>
      ))}
      <input type={"text"} ref={namemovie}></input>
      <button onClick={()=>setMovie(movies=>[...movies,{name:namemovie.current.value,image:"https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_SX300.jpg",rate:"3"}])}>Add movie</button>
 
    </div>
  );
    
    
   
}

export default MovieList
