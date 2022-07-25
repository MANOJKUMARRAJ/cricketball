import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
const getDatafromLS=()=>{
    const data=localStorage.getItem('datac');
    if(data){
        return JSON.parse(data);
    } else{
        return []
    }
}

function Formpage() { 
    let history = useNavigate();
    function backpage() {
        history("/")
    }
    const[datac,setDatac]=useState(getDatafromLS)
    const [title, setTitle] = useState('')
    const [image, setImage] = useState('')
    const [description, setDescription] = useState('')
    const [role, setRole] = useState('')
    const handleSubmit=(e)=>{
        e.preventDefault()
        let datam={
            title,
            image,
            description,
            
            
        }
        setDatac([...datac,datam]);
        setTitle('');
        setImage('');
        setDescription('');
        setRole('');
    }
    // if(title===''){
    //             alert('title is required')
    //          }else if(image===''){
    //              alert('image is required')
    //       } else (description === ''){
    //         alert('descrption is required')
    //       }
        useEffect(()=>{
            localStorage.setItem('datac',JSON.stringify(datac));
        },[datac])
    //   
    
  return (
    <div>
        <button onClick={backpage}>backpage</button>
        <h4>Add CRICKET Blog Details</h4>
        <div>
            <div>
                <label className='titlelabl'>Title :</label>
                <input type='text' value={title} placeholder='u can write player name' minlength="3"  maxlength="20"onChange={e=>setTitle(e.target.value)} required />
            </div>
            <div>
                <label className='imagelabl'>Image url :</label>
                <input type='text' value={image} placeholder='add image url' onChange={e=>setImage(e.target.value)} required />
            </div>
            <div>
                <label className='desclabl'>Description :</label>
                <textarea type='text' value={description} placeholder='add player info'  minlength="10"  maxlength="100"onChange={e=>setDescription(e.target.value) } required />
            </div>
            <div>
                Role :
                <div>
                    <input type='radio' name='role' value='batsman' defaultChecked={role ==='Batsman'} onClick={e=>setRole(e.target.value)}/><label>BATSMAN</label>
                </div>
                <div>
                <input type='radio' name='role' value='bowler' defaultChecked={role ==='Bowler'} onClick={e=>setRole(e.target.value)}/><label>BOWLER</label>
                </div>
               
            </div>
            <button type='submit'onClick={handleSubmit}>Submit</button>
        </div>
    </div>
  )
}


export default Formpage




// if(title===''){
    //         alert('title is required')
    //     }else if(image===''){
    //         alert('image is required')
    //     } else if(description===''){
    //         alert('description is required')
    //     } else{
    //         localStorage.setItem('title',title)
    //         localStorage.setItem('image',image)
    //         localStorage.setItem('description',description)
    //         localStorage.setItem('role',role)
    //     }
    // }