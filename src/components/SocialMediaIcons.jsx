import React from "react";
import behance_icon from "../assets/behance_icon.svg";
import github_icon from "../assets/github_icon.svg";
import instagram from "../assets/instagram.svg";

function SocialMediaIcons() {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition durantion-500"
        href="https://www.instagram.com/anushriii_"
        target="_blank"
        rel="noreferrer"
      >
        <img src={instagram} style={{ width: "60px" }} alt="linkedin Icon" />
      </a>
      <a
        className="hover:opacity-50 transition durantion-500"
        href="https://www.behance.net/saracarolic7cd"
        target="_blank"
        rel="noreferrer"
      >
        <img src={behance_icon} style={{ width: "60px" }} alt="behance icon" />
      </a>
      <a
        className="hover:opacity-50 transition durantion-500"
        href="https://github.com/saracsilva"
        target="_blank"
        rel="noreferrer"
      >
        <img src={github_icon} style={{ width: "60px" }} alt="behance icon" />
      </a>
    </div>
  );
}

export default SocialMediaIcons;
