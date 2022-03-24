import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Layout from "components/Layout";
import AddButton from "components/AddButton";
import RoomTitle from "components/RoomTitle";
import { useHistory } from "react-router-dom";
import ListedItem from "components/ListedItem";
import { Card, Stack, Divider } from "@mui/material";
import CreateExpenseModal from "components/Expenses/CreateExpenseModal";
import ExpenseItem from "components/Expenses/ExpenseItem";
import OptionsModal from "components/Rooms/OptionsModal";
import ExpenseList from "components/Expenses/ExpenseList";

const Expenses = () => {
  const history = useHistory();
  const [paid, setPaid] = useState(12);
  const [toPay, setToPay] = useState(910);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [expenseName, setExpenseName] = useState("");
  const [expenseCost, setExpenseCost] = useState("");
  const [selectedExpense, setSelectedExpense] = useState("");
  const [openOptionsModal, setOpenOptionsModal] = useState(false);
  const [editedExpenseName, setEditedExpenseName] = useState(null);
  const [editedExpenseCost, setEditedExpenseCost] = useState(null);
  const [expenses, setExpenses] = useState([
    {
      room_ID: 1,
      expense_ID: 1,
      paid: true,
      created_at: "",
      updated_at: "",
      is_viewable: true,
      expense_type: "room",
      expense_cost: 12.0,
      expense_description: "Kitchen Items",
    },
    {
      room_ID: 2,
      expense_ID: 2,
      paid: false,
      created_at: "",
      updated_at: "",
      is_viewable: true,
      expense_type: "room",
      expense_cost: 10.0,
      expense_description: "Bathroom Items",
    },
    {
      room_ID: 3,
      expense_ID: 3,
      paid: false,
      created_at: "",
      updated_at: "",
      is_viewable: true,
      expense_type: "bill",
      expense_cost: 900.0,
      expense_description: "Rent",
    },
  ]);

  let sumToPay = 0;
  let sumPaid = 0;
  expenses.forEach(function (expense, index, arry) {
    expense.paid === false && (sumToPay += expense.expense_cost);
    expense.paid === true && (sumPaid += expense.expense_cost);
  });
  console.log(sumToPay);
  console.log(sumPaid);

  const updateExpense = (expense_description, expense_cost, expense_ID) => {
    const newExpense = expenses.map((expense) =>
      expense.expense_ID === expense_ID
        ? { expense_description, expense_cost, expense_ID }
        : expense
    );
    setExpenses(newExpense);
    setEditedExpenseName("");
    setEditedExpenseCost("");
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (!editedExpenseName) {
      setExpenses([
        ...expenses,
        {
          paid: false,
          is_viewable: false,
          expense_ID: uuidv4(),
          expense_type: "other",
          expense_cost: expenseCost,
          expense_description: expenseName,
        },
      ]);
      setExpenseName("");
      setExpenseCost("");
      handleClose();
    } else {
      updateExpense(expenseName, expenseCost, editedExpenseName.expense_ID);
      setExpenseName("");
      setExpenseCost("");
      handleClose();
    }

    const expenseTotal = expenses.expense_cost; // WIP: return a number not string
    console.log(expenseTotal);
  };

  const handleChange = (e, id, cost) => {
    if (e.target.checked === true) {
      const toPay = sumToPay - cost;
      const paid = sumPaid + cost;
      setToPay(toPay);
      setPaid(paid);
    }
  };

  const handleExpenseNameChange = (e) => {
    setExpenseName(e.target.value);
  };

  const handleExpenseCostChange = (e) => {
    setExpenseCost(e.target.value);
  };

  const handleOptionsClick = (e, id) => {
    e.stopPropagation();
    setOpenOptionsModal(true);
    setSelectedExpense(id);
  };

  const handleEdit = () => {
    setOpenOptionsModal(false);
    console.log("editing");
    handleOpen();
    const findExpense = expenses.find(
      (expense) => expense.expense_ID === selectedExpense
    );
    setEditedExpenseName(findExpense);
  };

  const handleDelete = () => {
    console.log("deleting");
    setExpenses(
      expenses.filter((expense) => expense.expense_ID !== selectedExpense)
    );
    setOpenOptionsModal(false);
  };

  return (
    <Layout>
      <RoomTitle text="Expenses" button={<AddButton onClick={handleOpen} />} />
      <Card sx={{ bgcolor: "#7677E5" }}>
        <Card sx={{ margin: "0.625rem" }}>
          <Stack spacing={0}>
            <ListedItem style={style} text="To Pay" amount={toPay} />{" "}
            <Divider />
            <ListedItem style={style} text="Paid" amount={paid} />
          </Stack>
        </Card>
        <ExpenseList title="Bills & Other Expenses">
          {expenses
            .filter((expense) => expense.expense_type !== "room")
            .map((expense) => (
              <React.Fragment key={expense.expense_ID}>
                <ExpenseItem
                  checked
                  view={expense.is_viewable}
                  amount={expense.expense_cost}
                  defaultChecked={expense.paid}
                  text={expense.expense_description}
                  onViewClick={() => history.push(`/estimation`)}
                  onChange={(e) =>
                    handleChange(e, expense.expense_ID, expense.expense_cost)
                  }
                  onOptionsClick={(e) =>
                    handleOptionsClick(e, expense.expense_ID)
                  }
                />
                <Divider />
              </React.Fragment>
            ))}
        </ExpenseList>
        <ExpenseList title="Room Items cost">
          {expenses
            .filter((expense) => expense.expense_type === "room")
            .map((expense) => (
              <React.Fragment key={expense.expense_ID}>
                <ExpenseItem
                  checked
                  view={expense.is_viewable}
                  amount={expense.expense_cost}
                  defaultChecked={expense.paid}
                  text={expense.expense_description}
                  onChange={(e) =>
                    handleChange(e, expense.expense_ID, expense.expense_cost)
                  }
                  onViewClick={() => history.push(`/rooms/${expense.room_ID}`)}
                />
                <Divider />
              </React.Fragment>
            ))}
        </ExpenseList>
      </Card>
      <CreateExpenseModal
        open={open}
        onSave={handleSave}
        onClose={handleClose}
        expenseCost={expenseCost}
        expenseName={expenseName}
        onExpenseNameChange={handleExpenseNameChange}
        onExpenseCostChange={handleExpenseCostChange}
      />
      <OptionsModal
        onEdit={handleEdit}
        onDelete={handleDelete}
        open={openOptionsModal}
        labelRight="Edit Expense"
        labelLeft="Delete Expense"
        onClose={() => setOpenOptionsModal(false)}
      />
    </Layout>
  );
};

const style = { fontWeight: "bold", fontSize: "1.125rem" };

export default Expenses;
