import React from "react";

const SwitchButton = ({ idname, state }) => {
  return (
    <div className="switchbtn">
      <span className="title">{idname}</span>
      <input
        type="checkbox"
        className="switchinp"
        id={idname}
        onChange={(event) => {
          state(event.target.checked);
        }}
      />
      <label htmlFor={idname} className="switchbox">
        <span />
      </label>
    </div>
  );
};

export default SwitchButton;
