import Card from "../components/card/Card";
import Header from "../components/header/Header";
import { Link } from "react-router-dom";
import "../App.css";

function AddCard() {
  return (
    <>
      <Header header="ADD CARD" activeCard="NEW CARD" />
      <Card />
      <section className="cardForm">
        <p>CARD NUMBER</p>
        <input type="text" className="bigInput" />
        <p>CARDHOLDER NAME</p>
        <input
          placeholder="FIRSTNAME LASTNAME"
          type="text"
          className="bigInput"
        />
        <div className="smallFields">
          <div className="smallFieldContainer">
            <p>VALID THRU</p>
            <input type="date" className="smallInput" />
          </div>
          <div className="smallFieldContainer">
            <p>CCV</p>
            <input type="text" className="smallInput" />
          </div>
        </div>
        <p>VENDOR</p>
        <select name="" id="" className="bigInput"></select>
      </section>
      <Link to="/" className="navBtn">
        ADD CARD
      </Link>
    </>
  );
}
export default AddCard;
