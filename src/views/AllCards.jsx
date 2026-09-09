import Card from "../components/card/Card";
import Header from "../components/header/Header";
import { Link } from "react-router-dom";
import "../App.css";
import { useSelector } from "react-redux";

function AllCards() {
  const cards = useSelector((state) => state.card.cards);

  return (
    <>
      <Header header="E-WALLET" activeCard="ACTIVE CARD" />
      {cards.map((card, index) => (
        <Card key={index} card={card} />
      ))}
      <Link to="/AddCard" className="navBtn">
        ADD A NEW CARD
      </Link>
    </>
  );
}

export default AllCards;
