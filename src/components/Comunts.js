import { Container, Typography } from "@mui/material";
import Slider from "react-slick";

//genrate key
import { v4 as uuidv4 } from "uuid";

//import compontes
import FeedBack from "./FeedBack";
export default function Comunts() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  const cardContent = [
    {
      body: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      name: "John Doe",
      job: "magna aliqua",
      imge: "/imge/client2.jpg",
    },
    {
      body: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      name: "maical Yong",
      job: "magna aliqua",
      imge: "/imge/member-1.jpg",
    },
    {
      body: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      name: "John Doe",
      job: "magna aliqua",
      imge: "/imge/client2.jpg",
    },
    {
      body: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      name: "maical Yong",
      job: "magna aliqua",
      imge: "/imge/member-1.jpg",
    },
  ];

  const listFeedBack = cardContent.map((item) => {
    return (
      <div>
        <FeedBack
          key={uuidv4()}
          body={item.body}
          name={item.name}
          job={item.job}
          imge={item.imge}
        />
      </div>
    );
  });

  return (
    <Container>
      <Typography
        variant="h3"
        style={{ fontFamily: "pacifico", marginBottom: "75px" }}
      >
        What Says Our Customers
      </Typography>

      <div className="slider-container">
        <Slider {...settings}>{listFeedBack}</Slider>
      </div>
    </Container>
  );
}
