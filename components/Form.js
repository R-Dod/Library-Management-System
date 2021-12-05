import React, { Component } from 'react'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box';
import Input from '@mui/material/Input'

const ariaLabel = { 'aria-label': 'description' };

class Form extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id:'',
            firstName: '',
            address: '',
            lastName: '',
            PhoneNo: '',
            DOB: '',
            email: '',
            address: '',
            password: ''
        }
    }

    handleIDChange = event => {
        this.setState({
            id: event.target.value
        })
    }

    handleFirstNameChange = event => {
        this.setState({
            address: event.target.value
        })
    }


    handleLastNameChange = event => {
        this.setState({
            lastName: event.target.value
        })
    }
    handlePhoneNoChange = event => {
        this.setState({
            PhoneNo: event.target.value
        })
    }
    handleDOBChange = event => {
        this.setState({
            DOB: event.target.value
        })
    }
    handleEmailChange = event => {
        this.setState({
            email: event.target.value
        })
    }

    handleAddressChange = event => {
        this.setState({
            address: event.target.value
        })
    }    

    handlePasswordChange = event => {
        this.setState({
            password: event.target.value
        })
    }    
    handleSubmit = event => {
        alert('Member Added Successfully')   
    }    
    render() {
        return (
            <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
              }}
          >          
            <form onSubmit={this.handleSubmit}>
                <div>
                    <Input id='id'
                    required type='number' placeholder='ID' 
                    onChange={this.handleIDChange}/>   
                    </div> 
                    <div className='name'>
                    <Input id='firstname' 
                    required type='text' placeholder='First Name' 
                    onChange={this.handleFirstNameChange}/> &nbsp;&nbsp;  
                    <Input id='lastname'
                    required type='text' placeholder='Last Name' 
                    onChange={this.handleLastNameChange}/>   
                    </div>  
                    <div>
                    <Input id='phone' 
                    type='tel' placeholder='Phone Number' 
                    onChange={this.handlePhoneNoChange}/>   
                    </div>   
                    <div>
                    <label>Date of Birth</label>
                    <Input type='date' label='Date of Birth'
                    onChange={this.handleDOBChange}/>   
                    </div>  
                    <div>
                    <Input multiline fullWidth placeholder='Address'
                    onChange={this.handleAddressChange}/>   
                    </div>                    
                    <div>
                    <Input required type='email' placeholder='Email Address' 
                    onChange={this.handleEmailChange}/>   
                    </div>   
                    <div>
                    <Input required type='password' placeholder='Password'  
                    onChange={this.handlePasswordChange}/>
                    </div> 
                    <div>                                     
                    <Button type="add" variant="contained" >Add Member</Button> 
                    </div>                                 
            </form>
            </Box>  
        )
    }
}

export default Form