import Card from "../components/card/Card";
import Header from "../components/header/Header";

function AllCards() {
  const cardStack = [];
  return (
    <>
      <Header header="E-WALLET" activeCard="ACTIVE CARD" />
      <Card />
    </>
  );
}

export default AllCards;
