import { Container, Typography, TextField } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

import { useState } from "react";

// import compontes
import ButtonOrder from "./ButtonOrder";
export default function BookTable() {
  const [fromData, setFromData] = useState({
    name: "",
    phone: "",
    email: "",
    many: "",
    date: "",
  });

  const [reduired, setReduired] = useState(false);

  // How many function
  const [many, setMany] = useState("");

  const handleChange = (event) => {
    setMany(event.target.value);
    setFromData({ ...fromData, many: event.target.value });
  };

  return (
    <Container>
      <form>
        <Grid
          container
          spacing={3}
          sx={{
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "center", md: "flex-start" },
          }}
        >
          <Grid
            size={6}
            sx={{ marginTop: "20px", width: { xs: "100%", md: "48%" } }}
          >
            <Typography
              variant="h3"
              style={{
                fontFamily: "pacifico",
                textAlign: "left",
                fontSize: "30px",
                marginBottom: "20px",
              }}
            >
              Book Table
            </Typography>
            <TextField
              id="outlined-basic"
              label="Your Name"
              variant="outlined"
              sx={{ width: "100%", marginBottom: "20px" }}
              value={fromData.name}
              onChange={(e) =>
                setFromData({ ...fromData, name: e.target.value })
              }
            />
            <TextField
              id="outlined-basic"
              label="Your Phone"
              variant="outlined"
              sx={{ width: "100%", marginBottom: "20px" }}
              value={fromData.phone}
              onChange={(e) =>
                setFromData({ ...fromData, phone: e.target.value })
              }
            />
            <TextField
              id="outlined-basic"
              label="Your Email"
              variant="outlined"
              type="email"
              sx={{ width: "100%", marginBottom: "20px" }}
              value={fromData.email}
              onChange={(e) =>
                setFromData({ ...fromData, email: e.target.value })
              }
            />
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">How Many</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={many}
                label="How Many"
                onChange={handleChange}
                sx={{ marginBottom: "20px", textAlign: "left" }}
              >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
              </Select>
            </FormControl>

            <TextField
              id="outlined-basic"
              variant="outlined"
              type="date"
              sx={{ width: "100%", marginBottom: "20px" }}
              value={fromData.date}
              onChange={(e) =>
                setFromData({ ...fromData, date: e.target.value })
              }
            />
            <ButtonOrder
              text="Book Now"
              style={{ marginTop: "20px" }}
              sx={{
                width: { xs: "100%", md: "50%" },
              }}
            />
          </Grid>
          {/* section map  */}
          <Grid
            size={6}
            sx={{ marginTop: "20px", width: { xs: "100%", md: "48%" } }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1695.8966775221468!2d35.23659559493828!3d31.77612161822936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x150329c9c96f3a51%3A0x9d880658c9248aad!2z2KfZhNmF2LPYrNivINin2YTYo9mC2LXZiQ!5e0!3m2!1sar!2seg!4v1740309155168!5m2!1sar!2seg"
              width="100%"
              height="450"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="map"
            ></iframe>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}
