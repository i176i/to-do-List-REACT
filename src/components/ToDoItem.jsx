import React from "react";

function toDoItem(props) {
  return (
    <div
      onClick={() => {
        props.clickedItem(props.id);
      }}
    >
      <li>{props.text}</li>
    </div>
  );
}

export default toDoItem;
