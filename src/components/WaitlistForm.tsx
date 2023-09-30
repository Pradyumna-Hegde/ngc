import { FormEvent, useState } from "react";

const WaitlistForm = () => {
  const [fullName, setFullName] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(fullName);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="full-name" className="form-label">
          Full Name
        </label>
        <input
          onChange={(event) => setFullName(event?.target.value)}
          value={fullName}
          type="text"
          id="full-name"
          className="form-control"
          autoComplete="full-name"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default WaitlistForm;
