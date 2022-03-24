import React from "react";
import { Typography } from "@mui/material";
import HomieIcon from "../assets/HomieIcon";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const HomieLogo = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  return (
    <>
      <HomieIcon fill="#ed6c02" />
      <Typography
        noWrap
        component="div"
        sx={{
          fontSize: "1.25rem",
          fontWeight: "bold",
          ...(!isMobile && {
            flexGrow: 1,
            display: "flex",
          }),
        }}
      >
        Homîe
      </Typography>
    </>
  );
};

export default HomieLogo;
