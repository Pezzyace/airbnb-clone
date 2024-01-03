import Logo from "../assets/airbnb 1.png";

export default function Nav() {
  return(
    <nav className="navbar">
      <img className="logo" src={Logo} alt="Airbnb Logo" />
    </nav>
  )
}