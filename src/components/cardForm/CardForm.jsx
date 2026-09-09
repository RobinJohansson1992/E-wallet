import "./CardForm.css";

function CardForm({ card, setCard }) {
  const handleChange = (event) => {
    const { name, value } = event.target;

    setCard({
      ...card,
      [name]: value,
    });
  };

  return (
    <section className="cardForm">
      <p>CARD NUMBER</p>
      <input
        name="cardNumber"
        type="text"
        className="bigInput"
        value={card.cardNumber}
        onChange={handleChange}
      />
      <p>CARDHOLDER NAME</p>
      <input
        name="cardHolder"
        placeholder="FIRSTNAME LASTNAME"
        type="text"
        className="bigInput"
        value={card.cardHolder}
        onChange={handleChange}
      />
      <div className="smallFields">
        <div className="smallFieldContainer">
          <p>VALID THRU</p>
          <input
            name="validThru"
            type="text"
            className="smallInput"
            value={card.validThru}
            onChange={handleChange}
          />
        </div>
        <div className="smallFieldContainer">
          <p>CCV</p>
          <input
            name="ccv"
            type="text"
            className="smallInput"
            value={card.ccv}
            onChange={handleChange}
          />
        </div>
      </div>
      <p>VENDOR</p>
      <select
        name="vendor"
        className="bigInput"
        value={card.vendor}
        onChange={handleChange}
      >
        <option value="">Choose vendor</option>
        <option value="bitcoin">Bitcoin Inc</option>
        <option value="ninja">Ninja Bank</option>
        <option value="blockchain">Block Chain Inc</option>
        <option value="evil">Evil Corp</option>
      </select>
    </section>
  );
}

export default CardForm;
