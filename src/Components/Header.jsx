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
              <Link to="/">
                <li>
                  <a>Health</a>
                </li>
              </Link>
              <Link to="/">
                <li>
                  <a>Politics</a>
                </li>
              </Link>
              <Link to="/">
                <li>
                  <a>Technology</a>
                </li>
              </Link>
              <Link to="/">
                <li>
                  <a>Sports</a>
                </li>
              </Link>
              <Link to="/">
                <li>
                  <a>Entertainment</a>
                </li>
              </Link>
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
