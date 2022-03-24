const pool = require("../../dbConfig");

const getAllExpenses = (req, res)=>{
    const id = parseInt(req.params.id);
    pool.query("SELECT * FROM expenses WHERE user_id = $1", [id], (err, results)=>{
        if(err){
            throw err;
        }
        res.status(200).json(results.rows);
    })
}

const createNewExpense = (req, res)=>{
    const id = parseInt(req.params.id);
    const {expenseDescription, expenseCost, paid, roomID} = req.body;

    pool.query("INSERT INTO expenses (expense_description, expense_cost, paid, user_id, room_id) VALUES ($2, $3, $4, $1, $5)", [id, expenseDescription, expenseCost, paid, roomID], (err, results)=>{
        if(err){
            throw err;
        }
        res.status(201).json();
    })
}

const updateExpense = (req, res)=>{
    const id = parseInt(req.params.id);
    const {expenseDescription, expenseCost, paid, roomID} = req.body;

    pool.query("UPDATE expenses SET expense_description = $2, expense_cost = $3, paid = $4, updated_at = now(), room_id = $5 WHERE id = $1", [id, expenseDescription, expenseCost, paid, roomID], (err, results)=>{
        if(err){
            throw err;
        }
        res.status(200).json();
    })
}

const deleteExpense = (req, res)=>{
    const id = parseInt(req.params.id);

    pool.query("DELETE FROM expenses WHERE id = $1", [id], (err, results)=>{
        if(err){
            throw err;
        }
        res.status(200).json();
    })
}


module.exports = {
    getAllExpenses,
    createNewExpense,
    updateExpense,
    deleteExpense
}