import React, { useState } from 'react';
import Layout from 'components/Layout';
import Helmet from 'react-helmet';
import Title from 'components/Title';
import { Stack, TextField, Button,  } from '@mui/material';
import { logIn } from 'utilities/axios';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import Rooms from 'pages/Rooms';
import Expenses from 'pages/Expenses';



const Login = () => {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleChange = (e)=>{
        const {name, value} = e.target;

        if(name === 'email'){
            setEmail(value);
        }else{
            setPassword(value);
        }
    }
    const loginAxios = async (e)=>{
        e.preventDefault();

        const user = await logIn(email, password);

        if(user.length > 0){
            history.push('/actions'); 
            console.log("Succesful login")
        }
        else{
            setError("Login Failed. Please insert a valid email or password")
            console.log("Login Failed")
            
        }
    }

    return (
    <>
         <Helmet bodyAttributes={{ style: 'background-color : #7677E5', }} />
            <Stack 
                spacing={10}
                justifyContent="center"
                alignItems="center"
            >
                <Title text="Please login" size='28px'/>
                <Stack spacing={2}>
                    <form onSubmit={""}>
                        <div style={{marginBottom: "20px"}}>
                            <TextField 
                                id="email" 
                                name="email"
                                label="Email" 
                                variant="filled"
                                sx={{ width: 350, color: 'white', bgcolor: '#3C3486' }}
                                onChange={handleChange}
                                InputLabelProps={{ sx: {
                                    color: 'white',
                                }}}
                                inputProps={{sx: {
                                    color: 'white',
                                },
                                }}
                                
                            />
                        </div>
                        <div>
                            <TextField 
                                id="password"
                                name="password"
                                type="password"
                                label="Password" 
                                variant="filled"
                                sx={{ width: 350, color: 'white', bgcolor: '#3C3486' }}
                                onChange={handleChange}
                                InputLabelProps={{ sx: {
                                    color: 'white',
                                }}}
                                inputProps={{sx: {
                                    color: 'white',
                                },
                                }}
                                
                            />
                        </div>
                    </form>

                </Stack>

                <h4>{error}</h4>
                
                <Button
                style={{paddingLeft: "59px", paddingRight: "59px"}}
                    variant="outlined"
                    sx={{ color: 'white', fontWeight: 'bold', bgcolor: '#7678E5' }}
                    
                    size="large"
                    onClick={loginAxios}
                >
                    Login
                </Button>
                <Link to="/signup">
                <Button
                style={{marginTop: "20px", paddingLeft: "50px", paddingRight: "50px"}}
                    variant="text"
                    sx={{ color: 'white', fontWeight: 'bold', bgcolor: 'warning.main' }}
                    size="medium"
                    onClick={""}
                >
                    Register
                </Button>
                </Link>

            </Stack>
    </>)};   

export default Login;
