import React, { useState } from 'react';
import { 
    Stack,
    Input,
    FormGroup,
    FormControlLabel,
    Checkbox,
    IconButton,
} from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import SaveIcon from '@mui/icons-material/Save';
import CurrencyPoundIcon from '@mui/icons-material/CurrencyPound';

const ListItem = ({
    itemId,
    itemName,
    isItemPaid,
    itemPrice,
    listId,
    onItemPriceChange,
    onItemCheck,
    onItemDelete,
}) => {
    const [price, setItemPrice] = useState(itemPrice);

    return (
        <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
        >
            <Stack
                direction="row"
                spacing={2}                
            >
                <FormGroup>
                    <FormControlLabel 
                        control={<Checkbox defaultChecked={isItemPaid} sx={{ '& .MuiSvgIcon-root': { color: '#3D3486' } }} />} 
                        label={itemName}
                        sx={{
                            textTransform: 'capitalize',
                        }}
                        onChange={() => onItemCheck(itemId, !isItemPaid)}
                    />
                </FormGroup>           
            </Stack>
            <Stack
                direction="row"
                spacing={1}
            >
                {(itemPrice || (itemPrice === 0)) && (
                    <Stack
                        alignItems="center"
                        direction="row"
                        spacing={1}
                    > 
                        <CurrencyPoundIcon 
                            sx={{ color: '#7677E5', fontSize: '20px', padding: 0 }}
                        />
                        <Input 
                            defaultValue={itemPrice.toFixed(2)} 
                            sx={{ fontSize: '14px', width: '45px', fontWeight: 'bold', color: '#3D3486' }} 
                            onChange={(e) => setItemPrice(e.target.value)}
                        />
                        <IconButton
                            sx={{
                                padding: 0,
                            }}
                            onClick={() => onItemPriceChange(itemId, Number(price))}
                        >
                            <SaveIcon sx={{ color: '#7677E5', fontSize: '20px' }} />
                        </IconButton>
                    </Stack>
                )}
                <IconButton
                    sx={{
                        padding: 0,
                    }}
                    onClick={() => onItemDelete(itemId)}
                >
                    <HighlightOffIcon sx={{ color: '#3C3486', fontSize: '20px' }} />
                </IconButton>
            </Stack>
        </Stack>
    );
};

export default ListItem;