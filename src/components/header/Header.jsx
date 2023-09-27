import "./header.css";
import { Link, } from "react-router-dom";
import { FaBars } from "react-icons/fa";

function Header() {
  return (
    <div className="Header">
      <div className="logo-name-container">
        <div className="header-logo">
          <img
            className="champions-logo"
            src="https://media-4.api-sports.io/football/leagues/2.png"
            alt=""
          />
        </div>
        <div className="champions-name">
            Champions League API
        </div>
      </div>
      <div className="links-container">
        <div className="standings link">
            <Link to="/" className="header-links">
              Standings
            </Link>
        </div>
        <div className="team-statistic link">
            <Link to="/" className="header-links">
              Team Statistics
            </Link>
        </div>
        <div className="player-statistic link">
            <Link to="/" className="header-links">
              Player Statistics
            </Link>
        </div>
        <div className="fixtures link">
            <Link to="/" className="header-links">
              Fixtures
            </Link>
        </div>
      </div>
      <div className="icon-bars">
        <FaBars />
      </div>
    </div>
  );
}

export default Header;
