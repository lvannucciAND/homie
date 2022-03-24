import React, { useParams, useState, useEffect } from 'react';
import Layout from 'components/Layout';
import List from 'components/List/List';
import Box from 'components/Boxes/Box';
import Title from 'components/Title';
import AddButton from 'components/AddButton';
import AddBoxModal from 'components/Boxes/AddBoxModal';
import { Stack,} from '@mui/material';
import { getAllBoxes, getRoomsByUserID, getAllExpenses } from 'utilities/axios';



const Room = () => {  
    const [itemsToBuy, setItemsToBuy] = useState([]); // TODO update default to []
    const [boxes, setBoxes] = useState([]); // TODO update default to []
    const [open, setOpen] = useState(false);
    const [boxName, setBoxName] = useState("");
    const [roomName, setRoomName] = useState("");
    const [rooms, setRooms] = useState([])

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    //const { id } = useParams();

    const id = 1;
    const user = {id: 1};

    useEffect(async () => {
        // TODO fetch room's data by id here

        const fetchData = async ()=>{
            const fetchedBoxes = await getAllBoxes(id)
            setBoxes(fetchedBoxes);

            const fetchedRooms = await getRoomsByUserID(id);
            setRooms(fetchedRooms)
            const fetchedRoom = rooms.filter(room=>room.id === "1");
            console.log(fetchedRoom)
            setRoomName(fetchedRoom?.room_description);

            const expenses = await getAllExpenses(user.id);
            setItemsToBuy(expenses.filter(expense=>expense.room_id === id));
        }

        fetchData()

            .catch(console.error)
        
    }, []);


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
    const handleItemCheck = (itemId, isPaid) => {
        // TODO update api 
    };
    const handleItemDelete = (itemId) => {
        // TODO update api 

        const index = itemsToBuy.findIndex(i => itemId === i.id);
        const newArr = [...itemsToBuy];
        newArr.splice(index, 1);

        setItemsToBuy(newArr);
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
    const handleBoxNameUpdate = () => {
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
                        text={roomName} // TODO dynamic value
                        size="36px"
                    />
         {!!itemsToBuy && !!itemsToBuy.length && (
                    <List 
                        listName="To buy"
                        items={itemsToBuy}
                        onItemAdd={handleItemAdd}
                        onItemPriceChange={handleItemPriceChange}
                        onItemCheck={handleItemCheck}
                        onItemDelete={handleItemDelete}
                        />
         )}
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
                            />
                        ))
                    )}
                </Stack>
            </Stack>
        </Layout>
    );
};

export default Room; 
