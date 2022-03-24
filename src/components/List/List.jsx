import React from 'react';
import ListHeader from 'components/List/ListHeader';
import ListInput from 'components/List/ListInput';
import ListItem from 'components/List/ListItem';
import { 
    Box,
    Stack,
} from '@mui/material';

const List = ({ 
    listName, 
    listId,
    items,
    onListNameUpdate, 
    onItemAdd,
    onItemPriceChange,
    onItemCheck,
    onItemDelete,
}) => {

    return (
        <Stack>
            <Box
                sx={{
                    width: '300px',
                }}
            >
                <Stack spacing={1}>
                    <ListHeader 
                        listName={listName}
                        onListNameUpdate={onListNameUpdate}
                    />

                    <Box
                        sx={{
                            padding: '20px 15px',
                            bgcolor: '#F5F4F4',
                            borderRadius: '5px',
                            boxShadow: '2px 2px 10px 0px rgba(0,0,0,0.21)',
                            height: '150px',
                            overflowX: 'hidden',
                            overflowY: 'auto',
                        }}
                    >
                        <Stack
                            spacing={1}
                        >
                            <ListInput 
                                onAddItem={onItemAdd}
                            />
                            <Stack
                                spacing={1}
                            >
                                {!!items && !!items.length && items.map(item => (
                                    <ListItem
                                        itemId={item.id}
                                        listId={listId}
                                        itemName={item.name}
                                        itemPrice={item.price}
                                        isItemPaid={item.paid}
                                        onItemPriceChange={onItemPriceChange}
                                        onItemCheck={onItemCheck}
                                        onItemDelete={onItemDelete}
                                    />
                                ))}
                            </Stack>
                        </Stack>


                    </Box>

                </Stack>

            </Box>
        </Stack>
    );
};

export default List;