import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div>
        <div className="nav">
          <h1>NEWS</h1>
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
                <a>Food</a>
              </li>
              <li>
                <a>Entertainment</a>
              </li>
            </ul>
          </nav>
          <a className="btn" href="#">
            Publish
          </a>
          <a className="btn" href="#">
            Subscribe
          </a>
        </div>
      </div>
    );
  }
}

export default Header;
