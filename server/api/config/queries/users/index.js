const pool = require("../../dbConfig");

//GET api/users
const getProfile = (req, res)=>{
    const id = parseInt(req.params.id)
    pool.query("SELECT * FROM users WHERE id = $1", [id], (err, results)=>{
        if(err){
            throw err;
        }
        res.status(200).json(results.rows);
    });
};


const createNewUser = (req, res)=>{
    const {email, password, address, postcode, moveInDate, furnished} = req.body;
    pool.query("INSERT INTO users (email, password, address, postcode, move_date, furnished) VALUES ($1, $2, $3, $4, $5, $6)",
    [email, password, address, postcode, moveInDate, furnished],
    (err, results)=>{
        if(err){
            throw err;
        }
        res.status(201).json();
    });
};

const updateUser = (req, res)=>{
    const id = parseInt(req.params.id)
    const {password, moveInDate} = req.body;

    pool.query("UPDATE users SET password = $2, move_date = $3, updated_at = now() WHERE id = $1",
    [id, password, moveInDate],
    (err, results)=>{
        if(err){
            throw err;
        }
        res.status(200).json();
    })
}

const deleteProfile = (req, res)=>{
    const id = parseInt(req.params.id)
    pool.query("DELETE FROM users WHERE id = $1", [id], (err, results)=>{
        if(err){
            throw err;
        }
        res.status(200).json();
    });
};

module.exports = {
    getProfile,
    createNewUser,
    updateUser,
    deleteProfile,
}


