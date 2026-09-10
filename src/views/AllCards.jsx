import Card from "../components/card/Card";
import Header from "../components/header/Header";
import { Link } from "react-router-dom";
import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import { setActiveCard } from "../reducers/CardReducer";

function AllCards() {
  const cards = useSelector((state) => state.card.cards);

  const activeCard = useSelector((state) => state.card.activeCard);

  const dispatch = useDispatch();

  const handleCardClick = (card) => {
    dispatch(setActiveCard(card));
  };

  return (
    <section className="appContainer">
      <Header header="E-WALLET" activeCard="ACTIVE CARD" />
      {activeCard && <Card card={activeCard} />}
      <div className="cardStack">
        {cards
          .filter((card) => card !== activeCard)
          .map((card, index) => (
            <Card
              key={index}
              card={card}
              onClick={() => handleCardClick(card)}
            />
          ))}
      </div>
      <Link to="/AddCard" className="navBtn">
        ADD A NEW CARD
      </Link>
    </section>
  );
}

export default AllCards;
