import React from "react";
import threads from "../assets/threads.svg";
import instagram from "../assets/instagram.svg";
import facebook from "../assets/facebook.svg";

function SocialMediaIcons() {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition durantion-500"
        href="https://www.instagram.com/anushriii_"
        target="_blank"
        rel="noreferrer"
      >
        <img src={instagram} style={{ width: "60px" }} alt="Instagram Icon" />
      </a>
      <a
        className="hover:opacity-50 transition durantion-500"
        href="https://www.facebook.com/anushri.ghosh.583"
        target="_blank"
        rel="noreferrer"
      >
        <img src={facebook} style={{ width: "60px" }} alt="Facebook icon" />
      </a>
      <a
        className="hover:opacity-50 transition durantion-500"
        href="https://www.threads.net/@anushriii_"
        target="_blank"
        rel="noreferrer"
      >
        <img src={threads} style={{ width: "60px" }} alt="Threads icon" />
      </a>
    </div>
  );
}

export default SocialMediaIcons;
