const express = require("express");
const db = require("../../queries/expenses");

const expenses = express.Router();

expenses.get("/:id", db.getAllExpenses);
expenses.post("/:id", db.createNewExpense);
expenses.put("/:id", db.updateExpense);
expenses.delete("/:id", db.deleteExpense);

module.exports = expenses;


