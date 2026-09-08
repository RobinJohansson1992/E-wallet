import bitCoin from "../../assets/vendor-bitcoin.svg";
import chipLight from "../../assets/chip-light.svg";
import "./Card.css";

function Card() {
  return (
    <section className="cardContainer">
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
          <h2>1234 5678 9101 1123</h2>
          <div className="cardInfoSmall">
            <p>CARDHOLDER NAME</p>
            <p>VALID THRU</p>
          </div>
          <div className="cardInfoBig">
            <h3>ROBIN JOHANSSON</h3>
            <h3>12/28</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Card;
