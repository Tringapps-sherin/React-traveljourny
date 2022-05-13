import "../assets/NavBar.css";
import travel_logo from '../assets/travel_image.png'
export default function NavBar() {
  return (
    <div className="navBarHead">
      <nav>
        <ul>
          <li>
            <img src={travel_logo} alt="logo"></img>
          </li>
          <li className="head">my travel journey</li>
        </ul>
      </nav>
    </div>
  );
}