import Card from "../components/card/Card";
import Header from "../components/header/Header";
import { Link } from "react-router-dom";
import "../App.css";

function AllCards() {
  const cardStack = [];

  return (
    <>
      <Header header="E-WALLET" activeCard="ACTIVE CARD" />
      <Card />
      <Link to="/AddCard" className="navBtn">
        ADD A NEW CARD
      </Link>
    </>
  );
}

export default AllCards;
