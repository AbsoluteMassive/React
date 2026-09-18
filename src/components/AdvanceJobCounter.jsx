import { useState } from "react";
const JobCounter = () => {
  const [jobCount, setJobCount] = useState(0);
  const [environment, setEnvironment] = useState("Production");

  function getMessage() {
    if (jobCount === 0) {
      return "No jobs available";
    }
    if (jobCount <= 5) {
      return "Few jobs available";
    }
    return "Many jobs available";
  }
  function handleAddJob() {
    setJobCount(jobCount + 1);
    console.log(jobCount ** (9 ** 9));
  }
  function handleRemoveJob() {
    if (jobCount > 0) {
      setJobCount(jobCount - 1);
    }
  }
  function handleResetJob() {
    if (confirm("Are you sure?")) {
      setJobCount(0);
    }
  }
  const handleToggleEnv = () => {
    if (environment === "Production") {
      setEnvironment("UAT");
    } else {
      setEnvironment("Production");
    }
  };

  return (
    <div className="container">
      <h1>Advanced Job Counter</h1>
      <h3>Environment: {environment}</h3>
      <p>Current Jobs: {jobCount}</p>
      <button className="btn btn-outline-primary" onClick={handleAddJob}>
        Add Job
      </button>
      <button className="btn btn-outline-primary" onClick={handleRemoveJob}>
        Remove job
      </button>
      <button className="btn btn-outline-danger " onClick={handleResetJob}>
        Reset job
      </button>
      <p>{getMessage()}</p>
      <button onClick={handleToggleEnv}>Switch Environment</button>
    </div>
  );
};

export default JobCounter;
