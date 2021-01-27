import React, { useState } from "react";

function toDoItem(props) {
  const [isChecked, setIsChecked] = useState(false);
  function handleClick() {
    setIsChecked((prevValue) => {
      return !prevValue;
    });
  }

  return (
    <div onClick={handleClick}>
      <li style={{ textDecoration: isChecked ? "line-through" : "none" }}>
        {props.text}
      </li>
    </div>
  );
}

export default toDoItem;
