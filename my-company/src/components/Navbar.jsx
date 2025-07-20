import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#f0f0f0",
        padding: "10px 20px",
      }}
    >
      <h2 style={{ margin: 0 }}>My Company</h2>
      <div style={{ display: "flex", gap: "15px" }}>
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>Home</Link>
        <Link to="/about" style={{ textDecoration: "none", color: "black" }}>About</Link>
        <Link to="/services" style={{ textDecoration: "none", color: "black" }}>Services</Link>
        <Link to="/contact" style={{ textDecoration: "none", color: "black" }}>Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
