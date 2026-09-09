import "./Header.css";

function Header({ header, activeCard }) {
  return (
    <div className="pageTop">
      <h1>{header}</h1>
      <p>{activeCard}</p>
    </div>
  );
}

export default Header;
