import { useSelector } from "react-redux";
import Card from "../card/Card";
import "./CardStack.css";

function CardStack({ onCardClick, activeCard }) {
  const cards = useSelector((state) => state.card.cards);

  const otherCards = cards.filter((card) => card !== activeCard);
  return (
    <section className="cardStack">
      {otherCards.map((card) => (
        <Card key={card.id} card={card} onClick={() => onCardClick(card)} />
      ))}
    </section>
  );
}

export default CardStack;
