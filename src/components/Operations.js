import React from "react";

const Operations = ({onClickSum,onClickSub,onClickMult,onClickDiv,onClickPers}) => {
  return (
    <>
      <div className="d-flex justify-content-between">
        
          <button onClick={onClickSum} type="button" className="btn btn-secondary">
            +
          </button>
          <button onClick={onClickSub} type="button" className="btn btn-secondary">
            -
          </button>
          <button onClick={onClickMult} type="button" className="btn btn-secondary">
            *
          </button>
          <button onClick={onClickDiv} type="button" className="btn btn-secondary">
            /
          </button>
          <button onClick={onClickPers} type="button" className="btn btn-secondary">
            %
          </button>
        </div>
      
    </>
  );
};

export default Operations;
