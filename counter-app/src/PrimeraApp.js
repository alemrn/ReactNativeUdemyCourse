import { Fragment } from "react";
import PropTypes from "prop-types";

//FC
const PrimeraApp = ({ saludo, subtitulo }) => {
  return (
    <>
      <h1>{saludo}</h1>
      <p>{subtitulo}</p>
      <p> {}</p>
    </>
  );
};

PrimeraApp.propTypes = {
  saludo: PropTypes.string.isRequired,
  subtitulo: PropTypes.string,
};
PrimeraApp.defaultProps = {
  subtitulo: "Soy un subtitulo",
};

export default PrimeraApp;
