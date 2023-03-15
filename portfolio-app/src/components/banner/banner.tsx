import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import NavBar from "../nav_bar/nav_bar";

export default function Banner() {
  return (
    <AppBar
      position="static"
      color="default"
      sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
    >
      <Container maxWidth="xl" sx={{ alignItems: "baseline", paddingTop: 2 }}>
        <Toolbar>
          <Typography
            color="inherit"
            component={Link}
            noWrap
            sx={{ flexGrow: 1, textDecoration: "none" }}
            to="/"
            variant="h2"
          >
            Elton Dan
          </Typography>
          <NavBar />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
