import React, { useState } from "react";
import AppContainer from "components/AppContainer";
import Helmet from "react-helmet";
import { Stack, TextField, Button, Typography } from "@mui/material";
import { logIn } from "utilities/axios";
import HomieIcon from "assets/HomieIcon";
import FormText from "components/FormText";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "email") {
      setEmail(value);
    } else {
      setPassword(value);
    }
  };
  const loginAxios = async (e) => {
    e.preventDefault();

    const user = await logIn(email, password);
    if (user.length > 0) {
      //Move To next page
      console.log("Succesful login");
    } else {
      console.log("Login Failed");
    }
  };

  return (
    <>
      <Helmet
        bodyAttributes={{
          style: "background-color : #3c3486",
          marginTop: "2.5rem",
          marginBottom: "2.5rem",
        }}
      />
      <AppContainer>
        <Stack
          spacing={10}
          justifyContent="center"
          alignItems="center"
          sx={{ margin: "6rem 2.5rem" }}
        >
          <Stack sx={{ display: "-webkit-inline-box" }}>
            <HomieIcon fill="#ed6c02" width="3.125rem" height="3.125rem" />
            <Typography
              noWrap
              component="div"
              sx={{
                fontSize: "2.1875rem",
                marginLeft: "0.3125rem",
                color: "#fff",
                fontWeight: "bold",
              }}
            >
              Homîe
            </Typography>
          </Stack>

          <Stack spacing={2}>
            <form onSubmit={""}>
              <div style={{ marginBottom: "20px" }}>
                <TextField
                  id="email"
                  name="email"
                  label="Email"
                  variant="filled"
                  sx={{
                    borderRadius: "0.3125rem",
                    width: "16.25rem",
                    bgcolor: "white",
                    color: "#3C3486",
                  }}
                  onChange={handleChange}
                />
              </div>
              <div>
                <TextField
                  id="password"
                  name="password"
                  type="password"
                  label="Password"
                  variant="filled"
                  sx={{
                    borderRadius: "0.3125rem",
                    width: "16.25rem",
                    bgcolor: "white",
                    color: "#3C3486",
                  }}
                  onChange={handleChange}
                />
              </div>
            </form>
          </Stack>

          <Button
            style={{ width: "9.375rem", margin: "2.5rem 0 1.25rem 0" }}
            sx={{
              width: "9.375rem",
              margin: "2.5rem 0 1.25rem 0",
              color: "white",
              fontWeight: "bold",
              bgcolor: "warning.main",
              "&:hover": {
                bgcolor: "#7677E5",
              },
            }}
            size="medium"
            onClick={loginAxios}
          >
            Login
          </Button>
          <FormText margin="0px">New to homie?</FormText>
          <Button
            href="/#/signup"
            style={{
              marginTop: "0.625rem",
              width: "150px",
            }}
            sx={{
              width: "9.375rem",
              marginTop: "0.625rem",
              color: "white",
              fontWeight: "bold",
              bgcolor: "warning.main",
              "&:hover": {
                bgcolor: "#7677E5",
              },
            }}
            size="medium"
            onClick={""}
          >
            Register
          </Button>
        </Stack>
      </AppContainer>
    </>
  );
};

export default Login;
