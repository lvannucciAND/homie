const pool = require("../../dbConfig");

const getAllBoxItems = (req, res)=>{
    const id = parseInt(req.params.id);
    pool.query("SELECT * FROM box_items WHERE box_id = $1", [id], (err, results)=>{
        if(err){
            throw err;
        }
        res.status(200).json(results.rows);
    })
}

const createNewBoxItem = (req, res)=>{
    const id = parseInt(req.params.id);
    const {itemDescription, packed} = req.body;

    pool.query("INSERT INTO box_items (item_description, packed, box_id) VALUES ($2, $3, $1)", [id, itemDescription, packed], (err, results)=>{
        if(err){
            throw err;
        }
        res.status(201).json();
    })
}

const updateBoxItem = (req, res)=>{
    const id = parseInt(req.params.id);
    const {itemDescription, packed} = req.body;

    pool.query("UPDATE box_items SET item_description = $3, packed = $2, updated_at = now() WHERE id = $1", [id, packed, itemDescription], (err, results)=>{
        if(err){
            throw err;
        }
        res.status(200).json();
    })
}

const deleteBoxItem = (req, res)=>{
    const id = parseInt(req.params.id);

    pool.query("DELETE FROM box_items WHERE id = $1", [id], (err, results)=>{
        if(err){
            throw err;
        }
        res.status(200).json();
    })
}


module.exports = {
    getAllBoxItems,
    createNewBoxItem,
    updateBoxItem,
    deleteBoxItem
}