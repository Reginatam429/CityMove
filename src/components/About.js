import React from "react";
import aboutimg from "../images/aboutimg.png";

function About() {
  return (
    <div className=" about center">
      <header>
        <h1>About CityMove</h1>
      </header>
      <img
        src={aboutimg}
        width="600"
        height="200"
        alt="CityMove about"
        className="aboutimg"
      />
      <p>
        {" "}
        CityMove is an app to help people who want to move or are thinking of
        moving to another city. We currently have only 10 cities but plan to add
        more in the future.
      </p>
      <p className="resultsp">
        City move obtains city data from Numbeo. Please see{" "}
        <a href="https://www.numbeo.com/cost-of-living/">Numbeo's</a> site for
        more information on how scores and ratings are calculated.
      </p>
    </div>
  );
}

export default About;
