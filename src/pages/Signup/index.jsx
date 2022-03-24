import React, { useState } from "react";
import Helmet from "react-helmet";
import { Stack, TextField, Button, Typography } from "@mui/material";
import { Redirect } from "react-router-dom";
import AppContainer from "components/AppContainer";
import Radio from "@mui/material/Radio";
import RoomTitle from "components/RoomTitle";
import HomieIcon from "assets/HomieIcon";
import FormText from "components/FormText";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState("");
  const [user, setUser] = useState({
    email: "",
    password: "",
    postcode: "",
    address: "",
    moveInDate: "",
    furnished: false,
  });
  const [redirect, setRedirect] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "password2":
        setPassword2(value);
        break;
      default:
        return "";
    }
  };

  const handleClick = (e) => {
    e.preventDefault();

    if (password !== password2) {
      setError("Passwords are not matching");
    } else if (email.length === 0 || password.length === 0) {
      console.log("error");
      setError("Please insert a valid email or password");
    } else {
      setError("");
      setUser({
        email: email,
        password: password,
        postcode: "",
        address: "",
        moveInDate: "",
        furnished: false,
      });
      setRedirect(true);
    }
  };

  return redirect ? (
    <Redirect
      to={{
        pathname: "/property-details",
        state: { user: user },
      }}
    />
  ) : (
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

          {/* <RoomTitle> Register </RoomTitle> */}

          <Stack spacing={2} sx={{ alignItems: "center" }}>
            <TextField
              id="register_email"
              name="email"
              label="Email"
              required
              variant="filled"
              sx={{
                borderRadius: "0.3125rem",
                width: "16.25rem",
                bgcolor: "white",
                color: "#3C3486",
              }}
              onChange={handleChange}
            />

            <TextField
              required
              id="register_password"
              name="password"
              label="Enter Password"
              type="password"
              variant="filled"
              sx={{
                borderRadius: "0.3125rem",
                width: "16.25rem",
                bgcolor: "white",
                color: "#3C3486",
              }}
              onChange={handleChange}
            />

            <TextField
              required
              id="register_password2"
              name="password2"
              label="Re-enter Password"
              type="password"
              variant="filled"
              sx={{
                borderRadius: "0.3125rem",
                width: "16.25rem",
                bgcolor: "white",
                color: "#3C3486",
                "&:hover": {
                  bgcolor: "#7677E56",
                },
              }}
              onChange={handleChange}
            />

            <div
              style={{
                color: "#fff",
                fontSize: "0.625rem",
                margin: "1rem",
                textTransform: "uppercase",
                fontFamily: "Roboto",
                letterSpacing: "0.0625rem",
              }}
            >
              {error}
            </div>

            <FormText width="18.75rem">
              <Radio sx={{ color: "#fff" }} /> Agree with the Terms and
              Conditions
            </FormText>

            <Button
              onClick={handleClick}
              style={{
                marginTop: "0.625rem",
                width: "13.125rem",
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
            >
              Register
            </Button>

            <Button
              href="/#/"
              style={{
                marginTop: "0.625rem",
                width: "13.125rem",
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
            >
              Back to Login
            </Button>
          </Stack>
        </Stack>
      </AppContainer>
    </>
  );
};

export default Signup;
