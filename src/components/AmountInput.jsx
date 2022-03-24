import React from 'react';
import { 
    Stack,
    Divider,
    Box,
    Input,
} from '@mui/material';

const AmountInput = ({ description, amount, onChange }) => {
    return (
        <Box
            sx={{
                bgcolor: '#FFFFFF',
                padding: '10px',
                borderRadius: '20px',
            }}
        >
            <Stack
                direction="row"
                divider={<Divider orientation="vertical" flexItem />}
                spacing={2}
                alignItems="center"
            >
                <div style={{ fontSize: '12px', width: '45px', color: '#3D3486' }}>{description}</div>
                {onChange ? (
                    <Input defaultValue={amount} sx={{ fontSize: '14px', width: '45px', fontWeight: 'bold', color: '#3D3486' }} onChange={onChange} />
                ) : (
                    <div style={{ fontSize: '16px', width: '45px', color: '#3D3486', fontWeight: 'bold', padding: '5px' }}>{amount}</div>
                )}
            </Stack>
        </Box>
    )

};

export default AmountInput;