//import css
import "../App.css";

import Grid from "@mui/material/Grid2";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";

// componts
import BodyHeaderSection from "./BodyHeaderSection";
import ButtonOrder from "./ButtonOrder";

// icons
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";

export default function NavBar() {
  //////////////////////////////////////////////////

  const [activation, setActivation] = useState("Home");

  let index = 1;
  const [state, setState] = useState({
    top: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const listAnchor = ["Home", "Menue", "About", "Book Table"];
  const showList = listAnchor.map((text) => (
    <Typography
      className="elementListNavbar"
      variant="h6"
      key={index++}
      sx={{
        marginBottom: { md: "10px", sm: "10px", xs: "10px", lg: "0px" },
        fontSize: { xs: "15px", lg: "15px" },
      }}
    >
      <a
        href={`#${text}`}
        className={activation === text ? "active" : ""}
        onClick={() => setActivation(text)}
      >
        {text}
      </a>
    </Typography>
  ));

  //////////////////////////////////////////////////
  return (
    <div className="sectionHeader">
      <Container style={{}}>
        <div className="navBar" style={{ paddingTop: "20px" }}>
          <Grid container spacing={2}>
            <Grid size={3}>
              <Typography
                variant="h4"
                style={{
                  fontFamily: "pacifico",
                  color: "white",
                  textAlign: "left",
                  cursor: "pointer",
                }}
              >
                Burgur
              </Typography>
            </Grid>
            <Grid size={5}>
              <Box
                style={{
                  justifyContent: "space-between",
                }}
                className="listNavBar"
                sx={{
                  display: { xs: "none", lg: "flex" },
                }}
                height={"100%"}
                alignItems={"center"}
              >
                {showList}
              </Box>
            </Grid>
            <Grid size={4}>
              <Box sx={{ display: { xs: "none", lg: "block" } }}>
                {butonNavBar()}
              </Box>

              <Box key={"top"} sx={{ display: { lg: "none" } }}>
                <IconButton
                  onClick={toggleDrawer("top", true)}
                  style={{ color: "white" }}
                >
                  {<FormatListBulletedIcon />}
                </IconButton>
                <Drawer
                  anchor={"top"}
                  open={state["top"]}
                  onClose={toggleDrawer("top", false)}
                >
                  <div
                    className="listNavBar"
                    style={{
                      backgroundColor: "#070708",
                      margin: "0",
                      padding: "15px",
                      flexDirection: "column",
                      textAlign: "center",
                    }}
                  >
                    {showList}
                    {butonNavBar()}
                  </div>
                </Drawer>
              </Box>
            </Grid>
          </Grid>
        </div>
        <Box
          className={"bodyHeaderSection"}
          style={{
            height: "100%",
          }}
        >
          <BodyHeaderSection />
        </Box>
      </Container>
    </div>
  );

  function butonNavBar() {
    return (
      <div>
        <IconButton style={{ color: "white" }}>
          <ShoppingCartIcon />
        </IconButton>
        <IconButton style={{ color: "white" }}>
          <PersonIcon />
        </IconButton>
        <ButtonOrder text={"Order Online"} />
      </div>
    );
  }
}
