const pool = require("../../dbConfig");

const getAllNotifications = (req, res)=>{
    const id = parseInt(req.params.id);
    pool.query("SELECT * FROM notifications WHERE user_id = $1", [id], (err, results)=>{
        if(err){
            throw err;
        }
        res.status(200).json(results.rows);
    })
}

const createNewNotification = (req, res)=>{
    const id = parseInt(req.params.id);
    const {notificationDescription, dueDate, completed} = req.body;

    pool.query("INSERT INTO notifications (notification_description, due_date, completed, user_id) VALUES ($2, $3, $4, $1)", [id, notificationDescription, dueDate, completed], (err, results)=>{
        if(err){
            throw err;
        }
        res.status(201).json();
    })
}

const updateNotification = (req, res)=>{
    const id = parseInt(req.params.id);
    const {notificationDescription, dueDate, completed} = req.body;

    pool.query("UPDATE notifications SET notification_description = $2, completed = $4, due_date = $3, updated_at = now() WHERE id = $1", [id, notificationDescription, dueDate, completed], (err, results)=>{
        if(err){
            throw err;
        }
        res.status(200).json();
    })
}

const deleteNotification = (req, res)=>{
    const id = parseInt(req.params.id);

    pool.query("DELETE FROM notifications WHERE id = $1", [id], (err, results)=>{
        if(err){
            throw err;
        }
        res.status(200).json();
    })
}


module.exports = {
    getAllNotifications,
    createNewNotification,
    updateNotification,
    deleteNotification
}