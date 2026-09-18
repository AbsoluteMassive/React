import { useState } from "react";
const JobCounter = () => {
  const [jobCount, setJobCount] = useState(0);
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
  return (
    <div>
      <h1>Job Counter</h1>
      <p>{jobCount}</p>
      <button className="btn btn-outline-primary" onClick={handleAddJob}>
        Add Job
      </button>
      <button className="btn btn-outline-primary" onClick={handleRemoveJob}>
        Remove job
      </button>
      <button className="btn btn-outline-danger" onClick={handleResetJob}>
        Reset job
      </button>
    </div>
  );
};

export default JobCounter;
