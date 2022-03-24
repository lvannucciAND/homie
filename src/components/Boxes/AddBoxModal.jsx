    import React, { useState } from "react";
    import { v4 as uuidv4 } from "uuid";
    import Modal from "components/Modal/Modal";
    import {
        Button,
        TextField,
        Typography,
        CardContent,
        CardActions,
    } from "@mui/material";

    const AddBoxModal = ({
    open,
    boxes,
    onClose,
    onSave,
    }) => {
        
    const [boxName, setBoxName] = useState('');

    const handleSave = (e) => {
        e.preventDefault();
        onSave({ 
            id: uuidv4(), 
            name: boxName,
            items: [],
        });
        setBoxName("");
        onClose();
    };

    return (
        <Modal open={open} onClose={onClose}>
        <CardContent>
            <Typography variant="button" component="div">
            Create A New Box
            </Typography>
            <br />
            <TextField
                fullWidth
                id="fullWidth"
                value={boxName}
                onChange={(e) => setBoxName(e.target.value)}
                label="Type in a box name"
            />
        </CardContent>
        <CardActions>
            <Button
                size="small"
                color="secondary"
                variant="contained"
                onClick={onClose}
                sx={{ bgcolor: "warning.main", flex: 1 }}
            >
            Cancel
            </Button>
            <Button
                size="small"
                color="secondary"
                variant="contained"
                onClick={handleSave}
                sx={{ bgcolor: "warning.main", flex: 1 }}
            >
            Save
            </Button>
        </CardActions>
        </Modal>
    );
    };

    export default AddBoxModal;
