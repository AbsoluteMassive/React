import { useState } from "react";

const StyledButton = () => {
  // useState to allow react to render the changes
  const [isDisabled, setIsDisabled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [text, setText] = useState(
    `Centered text with white text color and red background`,
  );
  const style = {
    // camelCase instead of -
    textAlign: "center",
    color: "white",
    backgroundColor: "red",
    padding: "10px",
    marginTop: "5px",
  };
  const buttonStyle = {
    color: "white",
    display: "block",
    margin: "5px auto",
    width: "200px",
    padding: "0",
    // hover using onMouseEnter onMousLeave attr and useState to render
    backgroundColor: isHovered ? "purple" : "red",
    border: " 1px solid transparent",
    borderRadius: "5px",
  };
  function disabledButton() {
    setIsDisabled(true);
    setText("The button is disabled");
  }
  return (
    <div className="container">
      <h1 style={style}>{text}</h1>
      <button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={disabledButton}
        className="btn"
        style={buttonStyle}
        disabled={isDisabled}
      >
        StyledButton
      </button>
    </div>
  );
};

export default StyledButton;
