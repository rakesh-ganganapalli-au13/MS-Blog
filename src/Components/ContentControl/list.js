import React from "react";
import "./style.scss";

function OrderList({ list, position }) {
  return (
    <ol style={{ textAlign: position }} className="custom-order-list">
      {list.map((i, idx) => {
        return <li key={idx}>{i}</li>;
      })}
    </ol>
  );
}

function UnorderList({ list, position }) {
  return (
    <ul style={{ textAlign: position }} className="custom-unorder-list">
      {list.map((i, idx) => {
        return <li key={idx}>{i}</li>;
      })}
    </ul>
  );
}

export { UnorderList, OrderList };
