import { Container, Typography } from "@mui/material";

import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import Grow from "@mui/material/Grow";

import { useTheme } from "@emotion/react";

// icon
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";

import { v4 as uuidv4 } from "uuid";

import { useState } from "react";

export default function OurMenu() {
  const theme = useTheme();

  const [typeMenu, setTypeMenu] = useState("all");

  let allMenu = [
    {
      imge: "/imge/f1.png",
      title: "Delicious Pizza",
      price: "20$",
      desc: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
      type: "pizza",
    },
    {
      imge: "/imge/f2.png",
      title: "Delicious Burger",
      price: "15$",
      desc: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
      type: "burger",
    },
    {
      imge: "/imge/f3.png",
      title: "Delicious Pizza",
      price: "17$",
      desc: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
      type: "pizza",
    },
    {
      imge: "/imge/f4.png",
      title: "Delicious Pasta",
      price: "18$",
      desc: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
      type: "pasta",
    },
    {
      imge: "/imge/f5.png",
      title: "French Fries",
      price: "10$",
      desc: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
      type: "fries",
    },
    {
      imge: "/imge/f6.png",
      title: "Delicious Pizza",
      price: "15$",
      desc: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
      type: "pizza",
    },
    {
      imge: "/imge/f7.png",
      title: "Tasty Burger",
      price: "12$",
      desc: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
      type: "burger",
    },
    {
      imge: "/imge/f8.png",
      title: "Tasty Burger",
      price: "14$",
      desc: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
      type: "burger",
    },
    {
      imge: "/imge/f9.png",
      title: "Delicious Pasta",
      price: "14$",
      desc: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
      type: "pasta",
    },
  ];

  const listBurgur = allMenu.filter((item) => item.type === "burger");
  const listPizza = allMenu.filter((item) => item.type === "pizza");
  const listPasta = allMenu.filter((item) => item.type === "pasta");
  const listFries = allMenu.filter((item) => item.type === "fries");

  function filterMenu() {
    switch (typeMenu) {
      case "all":
        return allMenu;
      case "burger":
        return listBurgur;
      case "pizza":
        return listPizza;
      case "pasta":
        return listPasta;
      case "fries":
        return listFries;
      default:
        return allMenu;
    }
  }
  const listAllMenu = filterMenu().map((item) => {
    return (
      <Grow
        in={true}
        timeout={1000 + filterMenu().indexOf(item) * 500}
        style={{ transformOrigin: "0 0 0" }}
        key={uuidv4()}
      >
        <Grid
          item
          size={{ xs: 12, sm: 6, lg: 4 }}
          sx={{
            backgroundColor: theme.palette.secoundry.main,
            borderRadius: "10px",
          }}
          cliassName="up-imgeScale"
        >
          <div
            style={{
              backgroundColor: theme.palette.secoundry.light,
              padding: "40px 30px",
              borderRadius: "8px 8px 0px 40px",
              height: "30%",
            }}
          >
            <img
              src={item.imge}
              alt=""
              style={{
                maxWidth: "150px",
                maxHeight: "150px",
                transition: ".3s",
              }}
              cliassName="img-scaleWidth"
            ></img>
          </div>
          <Box sx={{ color: "white", textAlign: "left", padding: "20px" }}>
            <Typography variant="h5">{item.title}</Typography>
            <Typography variant="body2" style={{ lineHeight: "1.9" }}>
              {item.desc}
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Typography variant="h6">{item.price}</Typography>
              <LocalGroceryStoreIcon
                sx={{
                  padding: "10px",
                  background: theme.palette.primary.main,
                  borderRadius: "50%",
                  cursor: "pointer",
                }}
              />
            </Box>
          </Box>
        </Grid>
      </Grow>
    );
  });

  return (
    <Box>
      <Container>
        <Typography variant="h3" style={{ fontFamily: "pacifico" }}>
          Our Menu
        </Typography>
        <div style={{ marginTop: "20px" }}>
          <ButtonGroup
            value={typeMenu}
            variant="none"
            style={{}}
            aria-label="text button group"
            onClick={(e) => setTypeMenu(e.target.value)}
          >
            <Button
              value="all"
              sx={{
                backgroundColor:
                  typeMenu === "all" ? theme.palette.secoundry.main : "white",
                color: typeMenu === "all" ? "white" : "black",
                borderRadius: "20px !important",
                fontSize: "15px",
                padding: "7px 20px",
                transition: ".3s",
                marginRight: "10px",
              }}
            >
              All
            </Button>
            <Button
              value="burger"
              sx={{
                backgroundColor:
                  typeMenu === "burger"
                    ? theme.palette.secoundry.main
                    : "white",
                color: typeMenu === "burger" ? "white" : "black",
                borderRadius: "20px !important",
                fontSize: "15px",
                padding: "7px 20px",
                transition: ".3s",
                marginRight: "10px",
              }}
            >
              Burger
            </Button>
            <Button
              value="pizza"
              sx={{
                backgroundColor:
                  typeMenu === "pizza" ? theme.palette.secoundry.main : "white",
                color: typeMenu === "pizza" ? "white" : "black",
                borderRadius: "20px !important",
                fontSize: "15px",
                padding: "7px 20px",
                transition: ".3s",
                marginRight: "10px",
              }}
            >
              Pizza
            </Button>
            <Button
              value="pasta"
              sx={{
                backgroundColor:
                  typeMenu === "pasta" ? theme.palette.secoundry.main : "white",
                color: typeMenu === "pasta" ? "white" : "black",
                borderRadius: "20px !important",
                fontSize: "15px",
                padding: "7px 20px",
                transition: ".3s",
                marginRight: "10px",
              }}
            >
              Pasta
            </Button>
            <Button
              value="fries"
              sx={{
                backgroundColor:
                  typeMenu === "fries" ? theme.palette.secoundry.main : "white",
                color: typeMenu === "fries" ? "white" : "black",
                borderRadius: "20px !important",
                fontSize: "15px",
                padding: "7px 20px",
                transition: ".3s",
                marginRight: "10px",
              }}
            >
              Fries
            </Button>
          </ButtonGroup>
          <Grid container spacing={4} auto style={{ marginTop: "20px" }}>
            {listAllMenu}
          </Grid>
        </div>
      </Container>
    </Box>
  );
}
