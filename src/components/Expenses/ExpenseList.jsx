import React from "react";
import { Card, Stack, Typography } from "@mui/material";

const ExpenseList = ({ title, children }) => {
  return (
    <>
      <Typography marginLeft="10px" color="white" variant="button">
       {title}
      </Typography>
      <Card sx={{ margin: "0.625rem" }}>
        <Stack>{children}</Stack>
      </Card>
    </>
  );
};

export default ExpenseList;
