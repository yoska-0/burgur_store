import { Box, Container, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";

//import compontes
import ButtonOrder from "./ButtonOrder";
export default function About() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.secoundry.main,
        padding: "50px 0px",
      }}
    >
      <Container>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: { xs: "column-reverse", md: "row" },
          }}
        >
          <img
            src="/imge/about-img.png"
            alt="about imge"
            style={{ width: "40%" }}
          ></img>
          <Box sx={{ textAlign: "left", color: "white", marginLeft: "70px" }}>
            <Typography
              variant="h4"
              sx={{ fontFamily: "pacifico", marginBottom: "20px" }}
            >
              We Are Buger Store
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontSize: "16px", fontWeight: "100" }}
            >
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All
            </Typography>
            <ButtonOrder
              text="Read More"
              style={{ marginTop: "20px" }}
            ></ButtonOrder>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
