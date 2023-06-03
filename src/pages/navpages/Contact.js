import { Box, Button, Checkbox, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Contact = () => {
  const [checked, setChecked] = React.useState(true);
  const [input, setInput] = useState({
    firstname: '', lastname: '', email: '', username: '', message: '',
  })

  const fname=(event)=>{
  setInput({...input,firstname:event.target.value})
  }
  const lname=(event)=>{
    setInput({...input,lastname:event.target.value})
  }
  const handleEmail=(event)=>{
    setInput({...input,email:event.target.value})
  }
  const Uname=(event)=>{
    setInput({...input,username:event.target.value})
  }
  const HandleMessage=(event)=>{
    setInput({...input,message:event.target.value})
  }
 

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

 const handleSubmit=()=>{
  if (input.firstname!==''&input.message!==''&input.lastname!==''&input.username!==''&input.email!=='')
  {alert(`Please Confirm your details: 
  ${input.firstname};
  ${input.lastname}; 
  ${input.username};
  ${input.email}; 
  ${input.message}`)
setInput({firstname:'', email:"", message:'', lastname:'',username:''})
}
  else{alert('Please Fill all enteries in the Form')}
 }

  return (
    <Box>
      <Typography textAlign='center'
        sx={{ fontSize: { xs: '15px', md: "20px" }, }}>
        Send us a message
      </Typography>
      <Box
        sx={{ width: '80%', padding: '10px', margin: 'auto' }}
      >
        <Box padding='10px' >
          <TextField
            label="FIRSTNAME"
            id="outlined-size-small"
            size='small'
            fullWidth
            sx={{ margin: 1 }}
            onChange={fname}
            value={input.firstname}
           />
          <TextField label="LASTNAME" 
          id="outlined-size-normal" 
          size='small' fullWidth 
          sx={{ margin: 1 }} 
          onChange={lname}
          value={input.lastname}
          />

          <TextField
            label="EMAIL"
            id="outlined-size-small"
            size='small'
            fullWidth
            sx={{ margin: 1 }}
            onChange={handleEmail}
            value={input.email}
          />
          <TextField label="USERNAME" 
          id="outlined-size-normal" 
          size='small' fullWidth 
          sx={{ margin: 1 }} 
          onChange={Uname}
          value={input.username}
          />

          <textarea className='textarea2' onChange={HandleMessage} value={input.message}></textarea>

          <Box display='flex' alignItems='center'>
            <Checkbox
              checked={checked}
              onClick={handleChange}
              inputProps={{ 'aria-label': 'controlled' }}

            />
            <Typography sx={{ fontSize: { xs: '12px', md: '13px' } }}>Subscribe to news and other notifications</Typography>
          </Box>

          <Box textAlign='left' padding='10px'>
            <Button variant='contained' size='small' onClick={handleSubmit}>Submit</Button>
          </Box>

        </Box>

      </Box>
    </Box>
  )
}

export default Contact
