import React from "react";
import linkedIn from "../assets/imgs/linkedin.png";
import github from "../assets/imgs/gh.png";

export default function Header() {
  //   return <h1>This where header components goes...</h1>;
  return (
    <div>
      <div className="lead-txt">
        <span className="v0_201">YP</span>
        <span className="v0_202">Frontend Developer</span>
        <span className="v0_203">laurasmith.website</span>
      </div>
      <div className="social-btns">
        <img
          style={{ height: "21px", width: "21px" }}
          src={github}
          alt="github"
        />

        <span className="v0_229">Email</span>
      </div>
      <div className="v0_233">
        <img
          style={{ height: "21px", width: "21px" }}
          src={linkedIn}
          alt="linkedin"
        />
        <span className="v0_235">LinkedIn</span>
      </div>
    </div>
  );
}
