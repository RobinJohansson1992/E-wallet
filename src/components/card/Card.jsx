import bitCoin from "../../assets/vendor-bitcoin.svg";
import chipLight from "../../assets/chip-light.svg";
import "./Card.css";

function Card({ card, onClick }) {
  return (
    <section className="cardContainer" onClick={onClick}>
      <div className="card">
        <div className="cardTop">
          <div className="rightIcons">
            <img src={chipLight} />
          </div>
          <div className="leftIcons">
            <img src={bitCoin} />
          </div>
        </div>
        <div className="cardBottom">
          <h2>{card.cardNumber || "XXXX XXXX XXXX XXXX"}</h2>
          <div className="cardInfoSmall">
            <p>CARDHOLDER NAME</p>
            <p>VALID THRU</p>
          </div>
          <div className="cardInfoBig">
            <h3>{card.cardHolder || "FIRSTNAME LASTNAME"}</h3>
            <h3>{card.validThru || "MM/YY"}</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Card;
