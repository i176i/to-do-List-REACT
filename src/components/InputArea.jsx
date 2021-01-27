import React from "react";

function InputArea(props) {
  return (
    <div>
      <input onChange={props.change} type="text" value={props.text} />
      <button onClick={props.clicked}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
