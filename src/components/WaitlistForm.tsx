import { FormEvent, useState } from "react";
import { genderList, answerList, backgroundStatus } from "./StaticValues.ts";

const WaitlistForm = () => {
  const [person, setPerson] = useState({
    fullName: "",
    gender: "",
    phone: "",
    email: "",
    qna: "",
    status: "",
    graduationYear: "",
  });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(person);
  };
  return (
    <form onSubmit={handleSubmit}>
      {/* Full Name Input Field */}
      <div className="mb-3">
        <label htmlFor="full-name" className="form-label">
          Full Name
        </label>
        <input
          onChange={(event) =>
            setPerson({ ...person, fullName: event?.target.value })
          }
          value={person.fullName}
          type="text"
          id="full-name"
          className="form-control"
          autoComplete="full-name"
        />
        <p className="text-secondary" style={{ fontSize: "12px" }}>
          Please fill out your official name here. Please do not provide your
          Discord or social media name *
        </p>
      </div>

      {/* Gender Input Field */}
      <div className="mb-3">
        <label htmlFor="gender" className="form-label">
          Gender
        </label>
        <select
          autoComplete="gender"
          id="gender"
          className="form-select"
          onChange={(event) =>
            setPerson({ ...person, gender: event?.target.value })
          }
        >
          <option defaultValue={"Select Gender"}>Select gender</option>
          {genderList.map((gender) => (
            <option key={gender} value={gender}>
              {gender}
            </option>
          ))}
        </select>
      </div>

      {/* Phone Number Input Field */}
      <div className="mb-3">
        <label htmlFor="phone" className="form-label">
          Phone Number
        </label>
        <input
          onChange={(event) =>
            setPerson({ ...person, phone: event?.target.value })
          }
          value={person.phone}
          type="tel"
          id="phone"
          className="form-control"
          autoComplete="phone"
        />
        <p className="text-secondary" style={{ fontSize: "12px" }}>
          active phone number *
        </p>
      </div>

      {/* Email Input Field */}
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          onChange={(event) =>
            setPerson({ ...person, email: event?.target.value })
          }
          type="email"
          id="email"
          value={person.email}
          autoComplete="email"
          className="form-control"
        />
        <p className="text-secondary" style={{ fontSize: "12px" }}>
          please share your active email address *
        </p>
      </div>

      {/* Why Input Field */}
      <div className="mb-3">
        <label htmlFor="qna" className="form-label">
          Why do you want to join the camp?
        </label>
        <select
          autoComplete="qna"
          id="qna"
          className="form-select"
          onChange={(event) =>
            setPerson({ ...person, qna: event?.target.value })
          }
        >
          <option defaultValue={"Select"}>Select</option>
          {answerList.map((answer) => (
            <option key={answer} value={answer}>
              {answer}
            </option>
          ))}
        </select>
      </div>

      {/* current educational/professional status Input Field */}
      <div className="mb-3">
        <label htmlFor="status" className="form-label">
          What is your current educational/professional status?
        </label>
        <select
          autoComplete="status"
          id="status"
          className="form-select"
          onChange={(event) =>
            setPerson({ ...person, status: event?.target.value })
          }
        >
          <option defaultValue={"Select Status"}>Select Status</option>
          {backgroundStatus.map((answer) => (
            <option key={answer} value={answer}>
              {answer}
            </option>
          ))}
        </select>
      </div>

      {/* Year of Graduation Input Field */}
      <div className="mb-3">
        <label htmlFor="graduation-year" className="form-label">
          Year of Graduation
        </label>
        <input
          onChange={(event) =>
            setPerson({ ...person, graduationYear: event?.target.value })
          }
          value={person.graduationYear}
          type="number"
          id="graduation-year"
          className="form-control"
          autoComplete="graduation-year"
        />
        <p className="text-secondary" style={{ fontSize: "12px" }}>
          Your degree does not define your success. We need it to prepare you
          better. Please write your year of graduation (latest degree). eg:
          2023. Please write 1111 if you have not been to college or are a drop
          out.*
        </p>
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default WaitlistForm;
