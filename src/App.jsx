import "./App.css";
import "./css/fonts.css";
import LoveItNow from "./components/LoveItNow";
import Filter from "./components/Filter";
import ActionListProduct from "./components/ActionListProduct";
import ListProduct from "./components/ListProduct";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <>
      <Container>
        <LoveItNow />
        <Filter />
        <ActionListProduct />
        <ListProduct />
      </Container>
    </>
  );
}

export default App;
