import React from 'react'

const Input = ({onChangeNumber1,onChangeNumber2}) => {
  return (
    <>
    <div className="input-group mb-3">
          <input
          onChange={onChangeNumber1}
            type="number"
            className="form-control"
            placeholder="Number 1"    
          />
          <span className="input-group-text">&</span>
          <input
          onChange={onChangeNumber2}
            type="number"
            className="form-control"
            placeholder="Number 2"
          />
        </div>
    </>
  )
}

export default Input