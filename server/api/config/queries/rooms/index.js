const pool = require("../../dbConfig");


//GEt rooms

const createRoom = (req, res)=>{
    const id = parseInt(req.params.id);
    const {roomDescription} = req.body;

    pool.query("INSERT INTO rooms (user_id, room_description) VALUES ($1, $2)", [id, roomDescription], (err, results)=>{
        if(err){
            throw err;
        }
        res.status(201).json();
    })
}

const getAllRooms = (req, res)=>{
    const id = parseInt(req.params.id);

    pool.query("SELECT * FROM rooms WHERE user_id = $1", [id], (err, results)=>{
        if(err){
            throw err;
        }
        res.status(200).json(results.rows);
    })
}

const updateRoom = (req, res)=>{
    const id = parseInt(req.params.id);
    const {roomDescription} = req.body;

    pool.query("UPDATE rooms SET room_description = $2, updated_at = now() WHERE id = $1", [id, roomDescription], (err, results)=>{
        if(err){
            throw err;
        }
        res.status(200).json();
    })
}

const deleteRoom = (req, res)=>{
    const id = parseInt(req.params.id);

    pool.query("DELETE FROM rooms  WHERE id = $1", [id], (err, results)=>{
        if(err){
            throw err;
        }
        res.status(200).json();
    })
}

module.exports = {
    getAllRooms,
    createRoom,
    updateRoom,
    deleteRoom
}