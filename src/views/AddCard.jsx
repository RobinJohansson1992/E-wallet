import Card from "../components/card/Card";
import Header from "../components/header/Header";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";
import { useState } from "react";
import CardForm from "../components/cardForm/CardForm";
import { useDispatch, useSelector } from "react-redux";
import { addToCardStack, setActiveCard } from "../reducers/CardReducer";

function AddCard() {
  const [card, setCard] = useState({
    id: crypto.randomUUID(),
    cardNumber: "",
    cardHolder: "",
    validThru: "",
    ccv: "",
    vendor: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const activeCard = useSelector((state) => state.card.activeCard);

  const handleAddCard = () => {
    dispatch(addToCardStack(card));

    if (!activeCard) {
      dispatch(setActiveCard(card));
    }
    navigate("/");
  };

  return (
    <section className="appContainer">
      <Header header="ADD CARD" activeCard="NEW CARD" />
      <Card card={card} />
      <CardForm card={card} setCard={setCard} />
      <button onClick={handleAddCard} className="navBtn">
        ADD CARD
      </button>
      <Link to="/" className="navBtn">
        Back
      </Link>
    </section>
  );
}
export default AddCard;
