import React from "react";
import "../styles/global.scss";
import "../styles/AdviceContainer.scss";
import "../styles/DesktopAdviceContainer.scss";

// Las props se reciben con destructuracion para un mejor manejo.
const AdviceContainer = ({ advice, generateAdvice }) => {
  // Aqui se usa la funcion que se mando por props para asi hacer
  // un llamado a la API y cambiar el estado cada que se haga un click.
  const generateNewAdvice = async () => {
    await generateAdvice();
  };

  return (
    <section className="mainContainer">
      <div className="mainContainer__advice">
        <h3>ADVICE #117</h3>
        <p>{advice}</p>
      </div>
      <div className="figuresContainer">
        <figure className="figureContainer" onClick={generateNewAdvice}>
          <img
            src="https://res.cloudinary.com/dwdz4mn27/image/upload/v1682102023/advice-generator-app-main/images/icon-dice_qywx7h.svg"
            alt="dice icon"
          />
        </figure>
      </div>
    </section>
  );
};

export { AdviceContainer };
