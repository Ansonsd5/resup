import React, { useState, useMemo } from "react";
import PropTypes from "prop-types";
import "./index.scss";
import CopyBody from "../CopyBody";
import CopyContainer from "../CopyContainer";

const Carousel = ({ data, leftArrow, rightArrow }) => {
  const [activeItem, setActiveItem] = useState(0);
  const max = useMemo(() => data.length - 1, [data.length]);

  const handleClick = (direction) => {
    if (direction === "left") {
      setActiveItem(activeItem === 0 ? max : activeItem - 1);
    } else {
      setActiveItem(activeItem === max ? 0 : activeItem + 1);
    }
  };

  if (!data || data.length === 0) {
    return <div>No data available.</div>;
  }

  if (data.length === 1) {
    return <div>Only one item available.</div>;
  }

  return (
    <>
      <div className=" ">
        <CopyContainer data={data[activeItem].sub} />
        <CopyBody data={data[activeItem].body} />

        <div className="carousel">
          <img
            className="arrow left-arrow"
            src={leftArrow}
            alt="Previous"
            onClick={() => handleClick("left")}
            aria-label="Previous"
            role="button"
          />
          <div className="carousel-content">
            <div className="template-label">{`Template ${activeItem + 1}/${
              data.length
            }`}</div>
          </div>
          <img
            className="arrow"
            src={rightArrow}
            alt="Next"
            onClick={() => handleClick("right")}
            aria-label="Next"
            role="button"
          />
        </div>
      </div>
    </>
  );
};

Carousel.propTypes = {
  data: PropTypes.array.isRequired,
  leftArrow: PropTypes.string.isRequired,
  rightArrow: PropTypes.string.isRequired,
};

export default Carousel;
