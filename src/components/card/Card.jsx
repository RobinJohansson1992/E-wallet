import bitCoin from "../../assets/vendor-bitcoin.svg";
import blockChain from "../../assets/vendor-blockchain.svg";
import evil from "../../assets/vendor-evil.svg";
import ninja from "../../assets/vendor-ninja.svg";
import chipLight from "../../assets/chip-light.svg";
import chipDark from "../../assets/chip-dark.svg";
import "./Card.css";

function Card({ card, onClick }) {
  const vendorLogo = getVendorLogo(card.vendor);

  const chip =
    !card.vendor || card.vendor === "formCard" ? chipDark : chipLight;

  function getVendorLogo(vendor) {
    switch (vendor) {
      case "bitcoin":
        return bitCoin;

      case "ninja":
        return ninja;

      case "blockchain":
        return blockChain;

      case "evil":
        return evil;

      default:
        return null;
    }
  }
  return (
    <section className="cardContainer" onClick={onClick}>
      <div className={`card ${card.vendor}`}>
        <div className="cardTop">
          <div className="rightIcons">
            <img src={chip} />
          </div>
          <div className="leftIcons">
            {vendorLogo && <img src={vendorLogo} />}
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
