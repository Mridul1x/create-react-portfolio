import React from "react";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import "./Button.css";

function Navbar() {
  return (
    <nav className=" flex z-40 align-center justify-between  bg-purple ">
      <div className="pt-6">
        <LinkR to="/">
          <img src={"../assets/sara_logo.svg"} alt="logo" width={120} />
        </LinkR>
      </div>
      <div className="flex align-center justify-center pt-9 gap-3 pr-[20em]">
        <ul>
          <li>
            <LinkR
              /*  onClick={() => props.history.push("/")} */
              to="/#projects"
              smooth={true}
              durantion={1500}
              spy={true}
              exact={true}
              offset={70}
              location={{
                pathname: "/",

                hash: "#projects",
              }}
            >
              {" "}
              Projects
            </LinkR>
          </li>
          <li>
            <LinkS to="contact">Contact</LinkS>
          </li>{" "}
        </ul>
        <button className="button-54">Hello</button>
      </div>
    </nav>
  );
}

export default Navbar;
