import React from "react";
import CreateModal from "components/Modal/CreateModal";
import { TextField } from "@mui/material";

const CreateExpenseModal = ({ open, onClose, onSave, expenseCost, expenseName, onExpenseNameChange, onExpenseCostChange }) => {
  return (
    <CreateModal
      open={open}
      onButtonSave={onSave}
      onModalClose={onClose}
      onButtonCancel={onClose}
      expenseCost={expenseCost}
      expenseName={expenseName}
      modalTitle="Create An Expense"
      cardContent={
        <>
          <TextField
            fullWidth
            id="fullWidth"
            value={expenseName}
            onChange={onExpenseNameChange}
            label="Type in an expense name"
            required
          /><br/><br/>
          <TextField
            fullWidth
            id="fullWidth"
            type="number"
            value={expenseCost}
            onChange={onExpenseCostChange}
            label="Type in the expense cost"
            required
          />
        </>
      }
    />
  );
};

export default CreateExpenseModal;
