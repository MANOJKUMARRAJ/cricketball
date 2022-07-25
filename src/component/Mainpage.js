import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import '../App.css';

function Mainpage() {
    let history = useNavigate();
    function nextpage() {
        history("/Formpage")
    }
   
    const getDatafromLS=()=>{
      const data=localStorage.getItem('datac');
      if(data){
          return JSON.parse(data);
      } else{
          return []
      }
  }
  const[display,setdisplay]=useState(getDatafromLS)

  const deletee=(title)=>{
  
    
    
    const deletedcard=display.filter((element,id)=>{
      return element.title !== title;
    })
    setdisplay(deletedcard);
  }
  const deleteee=(title)=>{
    let dee=display;
    const index=dee.findIndex(removee=>removee.title === title );
    if (index >-1){
      dee.splice(index,1)
    }
  }
  const delet=(index)=>{
    console.log(index)
  }
  
  return (
    <div className='containe'> 
      <button onClick={nextpage} className='cardd'>Create Player Card</button>
    <h1>Cricketblog</h1>
      {display.map((get)=>(
        <div key={get.index} className='grmn'>
          <div className='allpro'>
          <h1>{get.title}</h1>
          <img src={get.image} width="460px" height="380px" alt='player image is here' />
          <h2>{get.role}</h2>
          <p>{get.description}</p>
          <p>{get.index}</p>
          <button onClick={delet}>Delete</button>
          </div>
        </div>
    ))}
       

    </div>
  )
}

export default Mainpage
