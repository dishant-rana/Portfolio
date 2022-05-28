import React from "react";
import { BsInstagram } from "react-icons/bs";
import { GoMarkGithub } from "react-icons/go";
import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://github.com/dishantrana1999">
        <GoMarkGithub />
      </a>
    </div>
    <div>
      <a href="https://www.instagram.com/__shady__07/">
        <FaFacebookF />
      </a>
    </div>
    <div>
      <a href="https://www.facebook.com/dishant.rana/">
        <BsInstagram />
      </a>
    </div>
  </div>
);

export default SocialMedia;
