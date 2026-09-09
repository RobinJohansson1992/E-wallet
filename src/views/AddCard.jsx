import Card from "../components/card/Card";
import Header from "../components/header/Header";
import { Link } from "react-router-dom";
import "../App.css";

function AddCard() {
  return (
    <>
      <Header header="ADD CARD" activeCard="NEW CARD" />
      <Card />
      <Link to="/" className="navBtn">
        ADD CARD
      </Link>
    </>
  );
}
export default AddCard;
