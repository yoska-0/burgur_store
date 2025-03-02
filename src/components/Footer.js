import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useTheme } from "@emotion/react";

// icons
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";

export default function Footer() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        // width: "100%",
        backgroundColor: theme.palette.secoundry.main,
        padding: "50px",
      }}
    >
      <Container>
        <Grid container spacing={2}>
          {/* contentUs */}
          <Grid
            item
            size={{ xs: 12, md: 4 }}
            sx={{
              color: "white",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginBottom: "15px",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontFamily: "pacifico",
                textAlign: "center",
                marginBottom: "15px",
              }}
            >
              Contact Us
            </Typography>
            <a
              className="linkHover"
              href="#1"
              style={{
                textDecoration: "none",
                color: "white",
                display: "flex",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <FmdGoodIcon sx={{ marginRight: "5px" }} />
              Location
            </a>
            <a
              className="linkHover"
              href="+201065160981"
              style={{
                textDecoration: "none",
                color: "white",
                display: "flex",
                alignItems: "center",
                marginTop: "10px",
                textAlign: "center",
              }}
            >
              <LocalPhoneIcon sx={{ marginRight: "5px" }} />
              call +201065160981
            </a>
            <a
              className="linkHover"
              href="yoska750@gmail.com"
              style={{
                textDecoration: "none",
                color: "white",
                display: "flex",
                alignItems: "center",
                marginTop: "10px",
                textAlign: "center",
              }}
            >
              <EmailIcon sx={{ marginRight: "5px" }} />
              yoska750@gmail.com
            </a>
          </Grid>
          {/* ===contentUs=== */}
          {/* Feane */}
          <Grid
            item
            size={{ xs: 12, md: 4 }}
            sx={{
              color: "white",
              marginBottom: "15px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h6"
              sx={{ fontFamily: "pacifico", textAlign: "center" }}
            >
              Feane
            </Typography>
            <Typography
              variant="h6"
              sx={{ marginTop: "10px", fontWeight: "400", fontSize: "14px" }}
            >
              Necessary, making this the first true generator on the Internet.
              It uses a dictionary of over 200 Latin words, combined with
            </Typography>
            <Box sx={{ display: "flex" }}>
              <a
                href="https://www.facebook.com/profile.php?id=100073551673496"
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
                rel="noopener noreferrer"
                target="_blank"
              >
                <FacebookOutlinedIcon
                  style={{
                    cursor: "pointer",
                    fontSize: "25px",
                    borderRadius: "50%",
                    marginRight: "5px",
                  }}
                />
              </a>
              <a
                href="https://www.linkedin.com/in/youssef-abdul-rahman-575907321/"
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaLinkedin
                  style={{
                    cursor: "pointer",
                    fontSize: "25px",
                    borderRadius: "50%",
                    marginRight: "5px",
                  }}
                />
              </a>
              <a
                href="https://www.youtube.com/@yoska00/featured"
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaYoutube
                  style={{
                    cursor: "pointer",
                    fontSize: "25px",
                    borderRadius: "50%",
                    marginRight: "5px",
                  }}
                />
              </a>
              <a
                href="https://twitter.com"
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
                rel="noopener noreferrer"
                target="_blank"
              >
                <CiTwitter
                  style={{
                    cursor: "pointer",
                    fontSize: "25px",
                    borderRadius: "50%",
                    marginRight: "5px",
                  }}
                />
              </a>
            </Box>
          </Grid>
          {/*=== Feane=== */}
          {/* Opening Hours  */}
          <Grid item size={{ xs: 12, md: 4 }} sx={{ color: "white" }}>
            <Typography style={{ fontFamily: "pacifico" }}>
              Opening Hours
            </Typography>
            <Typography
              variant="h6"
              sx={{ marginTop: "10px", fontSize: "14px" }}
            >
              Everyday
            </Typography>
            <Typography
              variant="h6"
              sx={{ marginTop: "10px", fontSize: "14px" }}
            >
              10.00 Am -10.00 Pm
            </Typography>
          </Grid>
          {/* == Opening Hours == */}
        </Grid>
        {/* todo Footer copyRight */}
        <Box></Box>
      </Container>
    </Box>
  );
}
