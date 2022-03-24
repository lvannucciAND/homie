import React from 'react';
import { 
    Stack,
    Typography,
    IconButton,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

const ListHeader = ({
    listName,
    onListNameUpdate,
}) => {
    return (
        <Stack
            justifyContent="space-between"
            direction="row"
            sx={{
                bgcolor: '#7677E5',
                borderRadius: '5px',
            }}
        >
            <Typography sx={{
                color: 'white',
                fontSize: '24px',
                padding: '4px 10px',
            }}>
                {listName}
            </Typography>
            {onListNameUpdate && (
                <IconButton
                    onClick={onListNameUpdate}
                >
                    <EditIcon />
                </IconButton> 
            )}
        </Stack>
    );
};

export default ListHeader;