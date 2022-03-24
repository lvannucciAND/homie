import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Layout from 'components/Layout';
import List from 'components/List/List';
import Box from 'components/Boxes/Box';
import Title from 'components/Title';
import AddButton from 'components/AddButton';
import AddBoxModal from 'components/Boxes/AddBoxModal';
import { 
    Stack,
} from '@mui/material';

const toBuyMockItems = [
    {
        id: 12349,
        name: 'Cups',
        price: 3.00,
        paid: true,
    },
    {
        id: 123459,
        name: 'Bowls',
        price: 4.00,
        paid: false,
    },
]

const mockBoxes = [
    {
        id: 123400,
        name: 'Box1',
        items: [
            {
                id: 12340,
                name: 'Bowls',
            },
            {
                id: 12380,
                name: 'Plates',
            },
        ]
    },
    {
        id: 123900,
        name: 'Box2',
        items: [
            {
                id: 12360,
                name: 'Pans',
            },
            {
                id: 12350,
                name: 'Forks',
            },
        ]
    },
]

const Room = () => {  
    const page = useParams();
    const [itemsToBuy, setItemsToBuy] = useState(toBuyMockItems); // TODO update default to []
    const [boxes, setBoxes] = useState(mockBoxes); // TODO update default to []
    const [open, setOpen] = useState(false);
    const [boxName, setBoxName] = useState("");

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const { id } = page;

    useEffect(() => {
        // TODO fetch room's data by id here
    }, []);

    const handleItemCheck = (itemId, isPaid) => {
        // TODO update api 
    };

    const handleBoxItemCheck = (itemId, isPaid) => {
        // TODO update api 
    };

    const handleItemDelete = (itemId) => {
        // TODO update api 

        const index = itemsToBuy.findIndex(i => itemId === i.id);
        const newArr = [...itemsToBuy];
        newArr.splice(index, 1);

        setItemsToBuy(newArr);
    };

    const handleBoxItemDelete = (itemId) => {
        // TODO update api 
    };

    const handleItemAdd = (item) => {
        // TODO update api 
        // update price for the room in expenses

        const newItemsToBuy = [
            ...itemsToBuy,
            item,
        ];

        setItemsToBuy(newItemsToBuy);
    };

    const handleBoxItemAdd = (item, boxId) => {
        // TODO update api 
        // update price for the room in expenses

    };

    const handleItemPriceChange = (itemId, price) => {
        // TODO update api 
        const item = itemsToBuy.find(i => itemId === i.id);
        const itemIndex = itemsToBuy.findIndex(i => itemId === i.id);

        const newItem = {
            ...item,
            price,
        };

        const newArr = [...itemsToBuy];
        newArr.splice(itemIndex, 1, newItem);
        setItemsToBuy(newArr);
    };

    const handleBoxNameUpdate = (listId) => {
        // TODO update api 
    };

    const handleBoxAdd = (newBox) => {
        // TODO update api 

        const newBoxes = [
            ...boxes,
            newBox,
        ]

        setBoxes(newBoxes);
    };

    return (
        <Layout>
            <AddBoxModal
                open={open}
                boxes={boxes}
                setBoxes={setBoxes}
                boxName={boxName}
                onClose={handleClose}
                onSave={handleBoxAdd}
                setBoxName={setBoxName}
            />
            <Stack
                justifyContent="center"
                alignItems="center"
                spacing={4}
                sx={{
                    marginBottom: '56px',
                }}
            >
                <Stack
                    spacing={1}
                >
                    <Title 
                        text="Kitchen" // TODO dynamic value
                        size="36px"
                    />
                    <List 
                        listName="To buy"
                        items={itemsToBuy}
                        onItemAdd={handleItemAdd}
                        onItemPriceChange={handleItemPriceChange}
                        onItemCheck={handleItemCheck}
                        onItemDelete={handleItemDelete}
                        />
                </Stack>
                <Stack spacing={1}>
                    <Stack
                        direction="row"
                        justifyContent="space-between"                        
                    >
                        <Title
                            text="Packing Boxes"
                            size="24px"
                        />
                        <AddButton 
                            onClick={handleOpen}
                        />
                    </Stack>
                    {!!boxes && !!boxes.length && (
                        boxes.map(box => (
                            <Box 
                                box={box}
                                onBoxNameUpdate={handleBoxNameUpdate}
                                onBoxItemAdd={handleBoxItemAdd}
                                onBoxItemCheck={handleBoxItemCheck}
                                onBoxItemDelete={handleBoxItemDelete}
                            />
                        ))
                    )}
                </Stack>
            </Stack>
        </Layout>
    );
};

export default Room; 
