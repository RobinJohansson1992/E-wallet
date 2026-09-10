import Card from "../components/card/Card";
import Header from "../components/header/Header";
import CardStack from "../components/cardStack/CardStack";
import { Link } from "react-router-dom";
import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import { setActiveCard } from "../reducers/CardReducer";

function AllCards() {
  const activeCard = useSelector((state) => state.card.activeCard);

  const dispatch = useDispatch();

  const handleCardClick = (card) => {
    dispatch(setActiveCard(card));
  };

  return (
    <section className="appContainer">
      <Header header="E-WALLET" activeCard="ACTIVE CARD" />

      {activeCard && <Card card={activeCard} />}

      <CardStack onCardClick={handleCardClick} />

      <Link to="/AddCard" className="navBtn">
        ADD A NEW CARD
      </Link>
    </section>
  );
}

export default AllCards;
