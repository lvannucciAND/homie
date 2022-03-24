const pool = require("../../dbConfig");

const login = (req,res)=>{
    const {email, password} = req.body;
    pool.query("SELECT * FROM users WHERE email = $1 AND password = $2", [email, password], (err, results)=>{
        if(err){
            throw err;
        }
        res.status(200).json(results.rows)
    });
};



module.exports = {
    login
}