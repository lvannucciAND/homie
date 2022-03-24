import React, { useState } from 'react';
import { v4 as uuidv4 } from "uuid";
import { 
    Stack,
    Input,
} from '@mui/material';

const ListInput = ({ onAddItem }) => {
    const [newItem, setNewItem] = useState('');

    return (
    <Stack
        direction="row"
        alignItems="center"
        spacing={2}
    >
        <div style={{
            width: '15px',
            height: '15px',
            border: '3px solid #3D3486'
        }}/>
        <form onSubmit={(e) => {
            e.preventDefault();
            onAddItem({
                id: uuidv4(),
                name: newItem,
                price: 0,
                isPaid: false,
            });
            setNewItem('');
        }}>
            <Input 
                sx={{
                    width: '220px',
                }}
                placeholder="Add item"
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
            />              
        </form>                           

    </Stack>
)};

export default ListInput;