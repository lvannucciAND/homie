import React, { useState } from 'react';
import Layout from 'components/Layout';
import Title from 'components/Title';
import Helmet from 'react-helmet';
import { Stack, TextField, Button, FormControl } from '@mui/material';
import { Redirect } from 'react-router-dom';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RoomTitle from 'components/RoomTitle';

const Signup = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [error, setError] = useState("");
    const [user, setUser] = useState({
        email:"",
        password: "",
        postcode: "",
        address: "",
        moveInDate: "",
        furnished: false
    })
    const [redirect, setRedirect] = useState(false);

    const handleChange = (e)=>{
        const {name, value} = e.target;
        switch(name){
            case 'email':
                setEmail(value);
                break;
            case 'password':
                setPassword(value);
                break;
            case 'password2':
                setPassword2(value);
                break
            default:
                return "";
        }
    }

    const handleClick = (e)=>{
        e.preventDefault();

        if(password !== password2){
            setError("Password are not matching")
        }else if(email.length === 0 || password.length === 0){
            console.log("error");
            setError("Please insert a valid email or password")

        }else{
            setError("");
            setUser({
                email: email,
                password: password,
                postcode: "",
                address: "",
                moveInDate: "",
                furnished: false
            });
            setRedirect(true);
        }
    }

    return (
        redirect ? 
        <Redirect to={{
            pathname: "/property-details",
            state: {user: user}
        }}
            />
        :
    

    <>
        <RoomTitle> Register </RoomTitle>

        <Stack spacing={3} alignItems='center' justifyContent='center' sx={{marginBottom:'3em', p: 8}}>

        
            <TextField required borderColor='blue' id="outlined-basic" name="email" label="example@gmail.com" variant="outlined"  sx={{backgroundColor:'#3C3486',
                            marginTop: '2em', color:'white'}}
                            InputLabelProps={{ sx: {
                                color: 'white',
                            }}}
                            inputProps={{sx: {
                                color: 'white',
                            },
                        }}
                        onChange={handleChange}
            />

            <TextField required id="outlined-basic" name="password" label="password" variant="filled" sx={{backgroundColor:'#3C3486', color:'white'}}
                InputLabelProps={{ sx: {
                    color: 'white',
                }}}
                inputProps={{sx: {
                    color: 'white',
                },
            }}
            onChange={handleChange}
            />

            <TextField required borderColor='blue' id="outlined-basic" name="password2" label="repeat" variant="outlined"  sx={{backgroundColor:'#3C3486',
                            marginTop: '2em', color:'white'}}
                            InputLabelProps={{ sx: {
                                color: 'white',
                            }}}
                            inputProps={{sx: {
                                color: 'white',
                            },
                        }}
                        onChange={handleChange}
            />
            <h4>{error}</h4>
            <FormControl>
                
                <FormControlLabel value="Agree with Terms and Conditions" control={<Radio />} label="Agree with the Terms and Conditions" />
            
            </FormControl>



            <Button size= "large" sx={{ bgcolor: 'warning.main', color: "primary.contrastText"}} onClick={handleClick}>Register</Button>
            <Button
                        style={{marginTop: "20px", paddingLeft: "50px", paddingRight: "50px"}}
                            variant="text"
                            sx={{ color: 'white', fontWeight: 'bold', bgcolor: 'warning.main' }}
                            size="medium"
                            onClick={""}
                        >
                            Back to login
                        </Button>

            
        </Stack>
    </>
        
)};   

export default Signup;
