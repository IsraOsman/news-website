import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <div>
        <div className="nav">
          <Link to="/" style={{ textDecoration: "none" }}>
            <h1>NEWS</h1>
          </Link>
          <nav>
            <ul className="nav_links">
              <li>
                <a>Health</a>
              </li>

              <li>
                <a>Politics</a>
              </li>

              <li>
                <a>Technology</a>
              </li>

              <li>
                <a>Sports</a>
              </li>

              <li>
                <a>Entertainment</a>
              </li>
            </ul>
          </nav>

          <a className="btn" href="/publish">
            Publish
          </a>
        </div>
      </div>
    );
  }
}

export default Header;
