import React from "react";

const AttractionList = (props) => {
  console.log(props.attractions.attraction);
  //   const attraction = props.attractions.attraction;

  return (
    <div className="attraction">
      <div>
        {/* <img
          src={attraction[0].image_url}
          width="500"
          height="300"
          alt="attraction image"
        />
      </div>
      <div>
        <h3>{attraction[0].name}</h3>
        <p>{attraction[0].description}</p> */}

        {props.attractions.attraction &&
          props.attractions.attraction.length > 0 &&
          props.attractions.attraction.map((attraction) => {
            return (
              <div className="center">
                <h3 className="attraction-title">
                  {/* <a href={"www.google.com/search?q=" + attraction.name}> */}
                  {attraction.name}
                  {/* </a> */}
                </h3>
                <img
                  src={attraction.image_url}
                  width="500"
                  height="300"
                  alt="attraction image"
                  className="attraction-image"
                />

                <p className="attraction-description resultp">
                  {attraction.description}
                </p>

                <br />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default AttractionList;
