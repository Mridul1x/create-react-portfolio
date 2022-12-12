import React from "react";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import "./Button.css";

function Navbar() {
  return (
    <nav className=" flex z-40 align-center justify-between backdrop-blur-[10px] bg-grey/30 rounded-[50em] border-solid border-[0.01em] border-white/50">
      <div className="pt-6">
        <LinkR to="/">
          <img src={"../assets/sara_logo.svg"} alt="logo" width={120} />
        </LinkR>
      </div>
      <div className="flex align-center justify-center pt-9 gap-3 pr-[20em]">
        <ul>
          <li>
            <LinkS to="projects">Projects</LinkS>
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
