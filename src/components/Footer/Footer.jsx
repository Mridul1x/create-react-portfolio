import SocialMediaIcons from "../SocialMediaIcons";
import Lottie from "lottie-react";
import animation02 from "../../assets/girl_bike.json";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="flex bottom-0  align-end justify-end h-96 md:h-64 bg-dark-purple pt-10  my-5 py-5"
    >
      <div className="w-10/12 mx-auto">
        <div className=" flex flex-col md:flex-row items-center justify-center md:justify-between">
          <SocialMediaIcons />
          <Lottie
            animationData={animation02}
            loop={true}
            className="z-10 items-center w-[80px]
              md:w-[120px] "
          />
        </div>
        <div className="md:flex flex-col md:flex-row justify-center md:justify-between text-center">
          <div className="flex flex-col items-center ">
            <span className="flex flex-row gap-3 ">
              <img src="../../assets/email.svg" alt="email icon" width={20} />
              <p className=" text-l">anushrighose@gmail.com</p>
            </span>
            <p className="font-playfair font-semibold text-2xl text-yellow">
              ANUSHRI GHOSH
            </p>
          </div>
          <p className="font-playfair text-md text-yellow mb-2">
            ©2023 ANUSHRI GHOSH. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
