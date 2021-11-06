import "./Button.css";

const Button = (props) => {
  return (
    <button {...props} className="btn">
      {" "}
      Enviar{" "}
    </button>
  );
};

export default Button;
