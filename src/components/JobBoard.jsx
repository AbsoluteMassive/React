const JobBoard = ({ jobCount = 0 }) => {
  // jobCount has a prop to allow reusability(App.jsx )
  // change jobCount value here(default) or in the App.jsx
  // (0, 4, 5+, negative) to see all messages

  const expectedCount = jobCount < 0 ? 0 : Math.round(jobCount * 1.5);
  const companyName = "TechCorp";
  function getJobMessage() {
    /*  return jobCount === 0
      ? "No jobs to schedule today"
      : `Jobs running today from bot: ${jobCount}`;*/
    if (jobCount < 0) {
      return "Job count cannot be negative";
    }
    if (jobCount === 0) {
      return "No jobs today";
    }
    if (jobCount < 5) {
      return `Only ${jobCount} jobs are running today`;
    }
    if (jobCount >= 5) {
      return `High volume of jobs today: ${jobCount} jobs are currently running`;
    }
    return `Jobs running today from bot: ${jobCount}`;
  }

  return (
    <div className="card p-3 mt-2">
      <h1 className="text-center">{companyName}</h1>
      <p>{getJobMessage()}</p>
      <p>Expected job count in a week: {expectedCount}</p>
    </div>
  );
};

export default JobBoard;
