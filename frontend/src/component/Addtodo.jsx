import React, { useState } from 'react'
import { Button} from '@mui/material';
import TextField from '@mui/material/TextField'; 
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Addtodo = () => {
  const [todo,settodo]= useState();
  const navigate = useNavigate();
  const inputHandler = (e)=>{
    settodo({ ...todo, [e.target.name]: e.target.value });
  

  }
  const addData = ()=>{
    console.log(todo)
    axios.post("http://localhost:5000/api/add", todo)
    .then((res)=>{
      alert(res.data.message);
      navigate('/')
    })
  }
  return (
    <div>
      <div style={{margin:"5%"}}>
      <br /><br />
      <TextField 
      fullWidth
     
      variant='outlined'
      label="title"
      name="title"
      onChange={inputHandler}

      />
      <br /><br />
      <TextField 
      fullWidth
      multiline
      rows={10}
      variant='outlined'
      label="Description"
      name="des"
      onChange={inputHandler}

      />
      <br /><br />
      <TextField 
      fullWidth
     
      variant='outlined'
      label="Status"
      name="stat"
      onChange={inputHandler}

      />
      <br /><br />
     
      <br /><br />
      <Button
      variant='contained'
      color='primary'
      onClick={addData}

      >
        Submit
      </Button>
      
    </div>
    </div>
  )
}

export default Addtodo