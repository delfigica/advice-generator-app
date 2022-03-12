import React, { useEffect, useState } from "react";
import { getAdvice } from "./helpers/getAdvice";

export const Advice = () => {
  const [advice, setAdvice] = useState({});

  useEffect(() => {
    getAdvice().then(setAdvice);
  }, []);

  const handleNewAdvice = () => {
    getAdvice().then(setAdvice)
  }

  return (
    <div className="card" key={advice.id}>
      <p className="nro-advice">ADVICE #{advice.id}</p>
      <blockquote className="advice">"{advice.advice}"</blockquote>
      <div className="line">
        <hr className="hr" />
        <span className="material-icons">pause</span>
        <hr className="hr" />
      </div>
      <button onClick={handleNewAdvice} className="btn-advice">
        <span className="material-icons dado">casino</span>
      </button>
    </div>
  );
};
