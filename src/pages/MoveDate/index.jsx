import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Layout from 'components/Layout';
import Title from 'components/Title';
import {
    TextField,
    Stack,
    Button,
} from '@mui/material';

const MoveDate = ({ onMoveDateChange }) => {
    const history = useHistory();
    const [date, setDate] = useState(1648047202); // TODO implement UNIX timestamp

    const handleFormSubmit = () => {
        onMoveDateChange({
            date,
        });

        history.push('/estimation');
    };

    return (
        <Layout>
            <Stack
                spacing={6}
                justifyContent="center"
                alignItems="center"
                sx={{marginTop:'10em'}}
            >
                <Title text="Set Your Estimated Move-In Date" size='28px' />

                <TextField required borderColor='blue' id="outlined-basic" label="DD/MM/YYY" variant="outlined"  sx={{backgroundColor:'#3C3486',
                        marginTop: '2em', color:'white'}}
                        InputLabelProps={{ sx: {
                            color: 'white',
                        }}}
                        inputProps={{sx: {
                            color: 'white',
                        },
                    }}
                    onChange={() => setDate(date)}
                />
                <Button
                    variant="text"
                    sx={{ color: 'white', fontWeight: 'bold', bgcolor: 'warning.main' }}
                    size="large"
                    onClick={handleFormSubmit}
                >
                    Submit
                </Button>
            </Stack>
        </Layout>
    )
};

export default MoveDate;