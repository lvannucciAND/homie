const pool = require("../../dbConfig");

const getAllBoxes = (req, res)=>{
    const id = parseInt(req.params.id);
    pool.query("SELECT * FROM boxes WHERE room_id = $1", [id], (err, results)=>{
        if(err){
            throw err;
        }
        res.status(200).json(results.rows);
    })
}

const createNewBox = (req, res)=>{
    const id = parseInt(req.params.id);
    const {boxDescription} = req.body;

    pool.query("INSERT INTO boxes (box_description, room_id) VALUES ($2, $1)", [id, boxDescription], (err, results)=>{
        if(err){
            throw err;
        }
        res.status(201).json();
    })
}

const updateBox = (req, res)=>{
    const id = parseInt(req.params.id);
    const {boxDescription} = req.body;

    pool.query("UPDATE boxes SET box_description = $2, updated_at = now() WHERE id = $1", [id, boxDescription], (err, results)=>{
        if(err){
            throw err;
        }
        res.status(200).json();
    })
}

const deleteBox = (req, res)=>{
    const id = parseInt(req.params.id);

    pool.query("DELETE FROM boxes WHERE id = $1", [id], (err, results)=>{
        if(err){
            throw err;
        }
        res.status(200).json();
    })
}


module.exports = {
    getAllBoxes,
    createNewBox,
    updateBox,
    deleteBox
}