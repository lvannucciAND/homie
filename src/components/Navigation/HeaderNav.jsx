import React from "react";
import HomieLogo from "components/HomieLogo";
import { Link } from "react-router-dom";
import { Toolbar, Button, AppBar } from "@mui/material";

export const NavItem = ({ to, label }) => (
  <Button
    sx={{ color: "secondary.contrastText", textTransform: "capitalize" }}
    component={Link}
    to={to}
  >
    {label}
  </Button>
);

const HeaderNav = () => {
  return (
    <AppBar position="static" sx={{ bgcolor: "#3c3486" }}>
      <Toolbar>
        <HomieLogo/>

          <NavItem to="/actions" label="Actions" />
          <NavItem to="/expenses" label="Expenses" />
          <NavItem to="/rooms" label="Rooms" />
          <NavItem to="/profile" label="Profile" />

      </Toolbar>
    </AppBar>
  );
};

export default HeaderNav;
