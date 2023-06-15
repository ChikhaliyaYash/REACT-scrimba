import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

export default function Card() {
  // return <h1>This where card components goes...</h1>;
  return (
    <div className="card">
      <div className="profile"></div>
      <div className="v0_185"></div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
