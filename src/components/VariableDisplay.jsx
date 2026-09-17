export const VariableDisplay = () => {
  // boolean is not shown
  // obj without property throws "Objects are not valid as a React child"
  let string = "string";
  let number = 7;
  let boolean = true;
  let obj = {
    name: "John Doe",
    age: 50,
    job: "Web Developer",
  };
  let random = Math.random();
  let range = random > 0.5 ? "HIGH" : "LOW";
  let array = [string, number, boolean, obj.name];
  //Remove "//" underneath to check the console logg
  // console.log(range, random);
  return (
    <div className="d-none">
      <h2>{array}</h2>
    </div>
  );
};

export function List({ array }) {
  return (
    <div>
      <ul className="list-group">
        {array.map((item) => (
          <li className="list-group-item" key={item.name}>
            {item.name}
            {<br></br>} {item.jobTitle}
          </li>
        ))}
      </ul>
    </div>
  );
}
