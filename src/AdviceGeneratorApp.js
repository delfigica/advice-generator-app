import React from "react";
import { Advice } from "./Advice";

export const AdviceGeneratorApp = () => {
  return (
    <>
      <div className="container">
        <Advice />
      </div>
      <div className="attribution">
        Challenge by 
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="https://www.delfi.ar">Delfina Cañas</a>.
      </div>
    </>
  );
};
