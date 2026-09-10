import { useSelector } from "react-redux";
import Card from "../card/Card";

function CardStack({ onCardClick }) {
  const cards = useSelector((state) => state.card.cards);

  return (
    <section className="cardStack">
      {cards.map((card, index) => (
        <Card key={index} card={card} onClick={() => onCardClick(card)} />
      ))}
    </section>
  );
}

export default CardStack;
