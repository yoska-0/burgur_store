import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";

//componts
import NavBar from "./components/NavBar";
import OurMenu from "./components/OurMenu";
import About from "./components/About";
import BookTable from "./components/BookTable";
import Comunts from "./components/Comunts";
import Footer from "./components/Footer";

// slider library
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffbe33",
    },
    secoundry: {
      main: "#222831",
      light: "rgb(241, 242, 243)",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <div id="Home">
          <NavBar />
        </div>
        <div id="Menue" style={{ marginTop: "100px", marginBottom: "120px" }}>
          <OurMenu />
        </div>
        <div id="About" style={{ marginTop: "100px" }}>
          <About />
        </div>
        <div id="Book Table" style={{ marginTop: "90px", padding: "20px" }}>
          <BookTable />
        </div>
        <div style={{ marginTop: "90px", padding: "20px" }}>
          <Comunts />
        </div>
        <div style={{ marginTop: "90px" }}>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
