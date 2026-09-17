import React from "react";

function Title({ title }) {
  //return React.createElement("h1", null, title);
  return <h1 className="text-center mt-2">{title}</h1>;
}
export default Title;
