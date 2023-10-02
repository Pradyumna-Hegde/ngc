import { genderList, answerList, backgroundStatus } from "./StaticValues.ts";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";

const schema = z.object({
  fullName: z.string().min(3),
  gender: z.string(),
  phone: z.number().max(14),
  email: z.string().max(25),
  qna: z.string(),
  status: z.string(),
  graduationYear: z.number().max(4),
});

type FormData = z.infer<typeof schema>;

const WaitlistForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });
  const onSubmit = handleSubmit((data: FieldValues) => console.log(data));

  return (
    <form onSubmit={onSubmit}>
      {/* Full Name Input Field */}
      <div className="mb-3">
        <label htmlFor="full-name" className="form-label">
          Full Name
        </label>
        <input
          {...register("fullName")}
          type="text"
          id="full-name"
          className="form-control"
        />
        {errors.fullName && (
          <p className="text-danger" style={{ fontSize: "12px" }}>
            {errors.fullName.message}
          </p>
        )}
      </div>

      {/* Gender Input Field */}
      <div className="mb-3">
        <label htmlFor="gender" className="form-label">
          Gender
        </label>
        <select
          {...register("gender", { required: true })}
          id="gender"
          className="form-select"
        >
          {genderList.map((gender) => (
            <option key={gender} value={gender}>
              {gender}
            </option>
          ))}
        </select>
        {errors.gender && (
          <p className="text-danger" style={{ fontSize: "12px" }}>
            {errors.gender.message}
          </p>
        )}
      </div>

      {/* Phone Number Input Field */}
      <div className="mb-3">
        <label htmlFor="phone" className="form-label">
          Phone Number
        </label>
        <input
          {...register("phone", { required: true })}
          type="tel"
          id="phone"
          className="form-control"
        />

        {errors.phone?.type === "required" && (
          <p className="text-danger" style={{ fontSize: "12px" }}>
            Required *
          </p>
        )}
      </div>

      {/* Email Input Field */}
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          {...register("email", { required: true })}
          type="email"
          id="email"
          className="form-control"
        />
        {errors.email?.type === "required" && (
          <p className="text-danger" style={{ fontSize: "12px" }}>
            Required *
          </p>
        )}
      </div>

      {/* qna Input Field */}
      <div className="mb-3">
        <label htmlFor="qna" className="form-label">
          Why do you want to join the camp?
        </label>
        <select
          {...register("qna", { required: true })}
          id="qna"
          className="form-select"
        >
          {answerList.map((answer) => (
            <option key={answer} value={answer}>
              {answer}
            </option>
          ))}
        </select>
        {errors.qna?.type === "required" && (
          <p className="text-danger" style={{ fontSize: "12px" }}>
            Required *
          </p>
        )}
      </div>

      {/* current educational/professional status Input Field */}
      <div className="mb-3">
        <label htmlFor="status" className="form-label">
          What is your current educational/professional status?
        </label>
        <select
          {...register("status", { required: true })}
          id="status"
          className="form-select"
        >
          {backgroundStatus.map((answer) => (
            <option key={answer} value={answer}>
              {answer}
            </option>
          ))}
        </select>
        {errors.status?.type === "required" && (
          <p className="text-danger" style={{ fontSize: "12px" }}>
            Required *
          </p>
        )}
      </div>

      {/* Year of Graduation Input Field */}
      <div className="mb-3">
        <label htmlFor="graduation-year" className="form-label">
          Year of Graduation
        </label>
        <input
          {...register("graduationYear", { required: true })}
          type="number"
          id="graduation-year"
          className="form-control"
        />
        {errors.graduationYear?.type === "required" && (
          <p className="text-danger" style={{ fontSize: "12px" }}>
            Required *
          </p>
        )}
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
