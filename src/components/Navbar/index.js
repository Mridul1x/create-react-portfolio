import React from "react";
import { Link as LinkR } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <LinkR to="/">
            <img />
          </LinkR>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
