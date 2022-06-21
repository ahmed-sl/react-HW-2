import React from "react";

const Result = ({total}) => {
  return (
    <>
      <input
      readOnly
        type="text"
        className="form-control mt-3"
        value={total}
      />
    </>
  );
};

export default Result;
