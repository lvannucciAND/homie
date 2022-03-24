import React from 'react';
import List from 'components/List/List';

const Box = ({
    box,
    onBoxNameUpdate,
    onBoxItemAdd,
    onBoxItemCheck,
    onBoxItemDelete,
}) => (
    <List 
        listName={box.name}
        listId={box.id}
        items={box.items}
        onListNameUpdate={onBoxNameUpdate}
        onItemAdd={onBoxItemAdd}
        onItemCheck={onBoxItemCheck}
        onItemDelete={onBoxItemDelete}
    />
);

export default Box;