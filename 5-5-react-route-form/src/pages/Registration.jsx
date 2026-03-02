import { useState } from "react";

export default function Registration() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");

  const [errors, setErrors] = useState({});

  function handleSubmit(e) {
    e.preventDefault();

    const nextErrors = {};

    if (!fullName.trim()) nextErrors.fullName = "Full name is required";

    if (!email.trim()) nextErrors.email = "Email is required";
    else if (!(email.includes("@") && email.endsWith(".com")))
      nextErrors.email = "Enter a valid email address";

    if (!password.trim()) nextErrors.password = "Password is required";

    if (!gender) nextErrors.gender = "Please select your gender";

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) return;

    alert(`User Registered: ${email}`);
  }

  return (
    <section>
      <h1>Student Registration</h1>
      <p className="muted">
        Create your portal access. Your email will be used for course updates.
      </p>

      <form onSubmit={handleSubmit} className="card form neon">
        <div className="form-row">
          <label htmlFor="fullName">Full Name</label>
          <input
            id="fullName"
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          {errors.fullName && <p className="error">{errors.fullName}</p>}
        </div>

        <div className="form-row">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div className="form-row">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>

        <fieldset className="form-row">
          <legend>Gender</legend>

          <label className="radio">
            <input
              type="radio"
              name="gender"
              value="male"
              checked={gender === "male"}
              onChange={(e) => setGender(e.target.value)}
            />
            Male
          </label>

          <label className="radio">
            <input
              type="radio"
              name="gender"
              value="female"
              checked={gender === "female"}
              onChange={(e) => setGender(e.target.value)}
            />
            Female
          </label>

          {errors.gender && <p className="error">{errors.gender}</p>}
        </fieldset>

        {/* Button is now clickable so errors will show */}
        <button type="submit" className="btn">
          Register
        </button>
      </form>

      <div className="card info">
        <h3>Why Register?</h3>
        <ul className="list">
          <li>📘 Access course materials & assignments</li>
          <li>💬 Join the discussion forum</li>
          <li>🎓 Track your progress & get certified</li>
        </ul>
      </div>
    </section>
  );
}