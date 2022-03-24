import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Container, Toolbar, AppBar } from "@mui/material";

import HomieLogo from "components/HomieLogo";
import MobileNav from "./Navigation/MobileNav";
import HeaderNav from "./Navigation/HeaderNav";

const Layout = ({ children }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <div>
      {isMobile ? (
        <>
          <AppBar position="static" sx={{ bgcolor: "#3c3486" }}>
            <Toolbar sx={{ justifyContent: "center" }}>
            <HomieLogo/>
            </Toolbar>
          </AppBar>
          <Container sx={{ marginTop: "2.5rem" }}>{children}</Container>
          <MobileNav/>
        </>
      ) : (
        <>
          <HeaderNav/>
          <Container sx={{ marginTop: "2.5rem" }}>{children}</Container>
        </>
      )}
    </div>
  );
};

export default Layout;
