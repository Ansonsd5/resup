import React from "react";
import textConstants from "../../utils/textConstants";
import "./index.scss";

const EmptyConatiner = (props) => {
  const { bgImage } = props;
  return (
    <div className="empty-conatiner-wrapper   items-center align-middle sm:grid">
      <img
        className="empty-hero-img mx-auto"
        loading="lazy"
        src={bgImage}
        alt="bghero"
      />

      <article className="empty-conatiner-textwrapper mx-auto text-center p-4">
        <h3 className="empty-conatiner-header">
          {textConstants.EMPTY_LABEL.HEADER}
        </h3>
        <div className="empty-conatiner-label text-center">
          {textConstants.EMPTY_LABEL.DETAILS}
        </div>
      </article>
    </div>
  );
};

export default EmptyConatiner;
