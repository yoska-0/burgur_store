import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Slider from "react-slick";

//import compontes
import ButtonOrder from "./ButtonOrder";

export default function BodyHeaderSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <div className="slider-container" style={{ height: "100%" }}>
      <Slider {...settings}>
        <div>{cardContent()}</div>
        <div>{cardContent()}</div>
        <div>{cardContent()}</div>
      </Slider>
    </div>
  );

  function cardContent() {
    return (
      <Box
        style={{
          textAlign: "left",
          color: "white",
          marginTop: "300px",
          padding: "10px",
        }}
        sx={{ maxWidth: { xs: "90%", md: "45%" } }}
      >
        <Typography
          variant="h3"
          style={{ fontFamily: "pacifico", marginBottom: "12px" }}
          sx={{ fontSize: { xs: "30px", md: "50px" } }}
        >
          Fast Food Restaurant
        </Typography>
        <Typography
          variant="h6"
          style={{ fontWeight: "100" }}
          sx={{ fontSize: { xs: "12px", md: "14px" } }}
        >
          Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente
          ad mollitia laborum quam quisquam esse error unde. Tempora ex
          doloremque, labore, sunt repellat dolore, iste magni quos nihil
          ducimus libero ipsam.
        </Typography>
        <ButtonOrder text={"Order Now"} style={{ marginTop: "20px" }} />
      </Box>
    );
  }
}
