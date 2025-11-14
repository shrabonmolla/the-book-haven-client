import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { Authcontext } from "../../Provider/AuthProvider";
import { PlayCircle } from "lucide-react";
import { toast } from "react-hot-toast";
export default function Register() {
  const [err, setErr] = useState(false);
  const { googleLogIn, setUser, createUser, updateUser } =
    useContext(Authcontext);

  const navigate = useNavigate();
  const loacation = useLocation();

  // login
  function handleGoogleLogIN() {
    googleLogIn()
      .then((res) => {
        setUser(res.user);
        toast.success("logged in succesfully");
        navigate(loacation.state ? loacation.state : "/");
      })
      .catch((err) => console.log(err.message));
  }

  // register a user

  function handleRegister(e) {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;
    console.log(name, email, photo, password);
    // password validation
    const upperCaseRegex = /[A-Z]/;
    const lowerCaseRegex = /[a-z]/;
    const lengthRegex = /.{6,}/;
    if (!upperCaseRegex.test(password)) {
      return setErr("❌ Must contain at least one uppercase letter");
    } else if (!lowerCaseRegex.test(password)) {
      return setErr("❌ Must contain at least one lowercase letter");
    } else if (!lengthRegex.test(password)) {
      return setErr("❌ Must be at least 6 characters long");
    } else {
      setErr("✅ Password is valid");
    }
    createUser(email, password)
      .then((res) => {
        const user = res.user;
        updateUser({
          displayName: name,
          photoURL: photo,
        })
          .then((res) =>
            setUser({ ...user, displayName: name, photoURL: photo })
          )
          .catch((err) => toast.error("cant update your profie"));
        e.target.reset();
        toast.success("registration is successful");
        navigate(loacation.state ? loacation.state : "/");
      })
      .catch((err) => toast.error(err.message));
  }
  return (
    <div className="flex flex-col justify-center items-center ">
      <h1 className="text-center">
        <div className="font-bold text-2xl">Register Now</div>
      </h1>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl ">
        <div className="card-body">
          {/* form */}
          <form onSubmit={handleRegister} className="fieldset">
            {/* Name */}
            <label className="label">Name</label>
            <input
              name="name"
              type="text"
              className="input"
              placeholder="Name"
            />
            {/* Email */}
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
            />
            {/* Photo Url */}
            <label className="label">Photo Url</label>
            <input
              name="photo"
              type="text"
              className="input"
              placeholder="Photo Url"
            />

            {/* password */}
            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Password"
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Register</button>
            {err && <p className="text-red-500">{err}</p>}
            <p>
              Already have an account?{" "}
              <Link className="text-blue-400" to="/login">
                Login
              </Link>
            </p>
          </form>
          {/* divider */}
          <div className="flex w-full flex-col">
            <div className="divider">OR</div>
          </div>

          {/* Google */}
          <button
            onClick={handleGoogleLogIN}
            className="btn bg-white text-black border-[#e5e5e5]"
          >
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
}
