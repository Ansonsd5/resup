import React from "react";
import allTextConstants from "../../utils/textConstants";
import "./index.scss";

const EmptyConatiner = (props) => {
  const { bgImage } = props;
  return (
    <div className="empty-conatiner-wrapper   items-center align-middle sm:grid mt-5 sm:mt-0">
      <img
        className="empty-hero-img mx-auto"
        loading="lazy"
        src={bgImage}
        alt="bghero"
      />

      <article className="empty-conatiner-textwrapper mx-auto text-center p-4">
        <h3 className="empty-conatiner-header">
          {allTextConstants.EMPTY_LABEL.HEADER}
        </h3>
        <div className="empty-conatiner-label text-center">
          {allTextConstants.EMPTY_LABEL.DETAILS}
        </div>
      </article>
    </div>
  );
};

export default EmptyConatiner;
