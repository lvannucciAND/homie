import React from 'react';
import List from 'components/List/List';

const Box = ({
    box,
    onBoxNameUpdate,
}) => {

    const handleBoxItemCheck = (itemId, isPaid) => {
        // TODO update api 
    };



    const handleBoxItemDelete = (itemId) => {
        // TODO update api 
    };



    const handleBoxItemAdd = (item, boxId) => {
        // TODO update api 
        // update price for the room in expenses

    };

    return(
    <List 
        listName={box.box_description}
        listId={box.id}
        items={[]}
        onListNameUpdate={onBoxNameUpdate}

    />
    )};

export default Box;