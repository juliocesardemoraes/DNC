import { useState } from "react";

function Card({ image, name, button = true, setModal = null }) {
  return (
    <div className="card">
      <img src={image}></img>
      <h3>{name}</h3>
      {button ? (
        <button onClick={() => setModal({ image, name })}>Adicionar</button>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Card;
