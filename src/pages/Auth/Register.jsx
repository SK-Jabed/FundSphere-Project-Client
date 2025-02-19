import React, { useContext, useState } from "react";
import { RiGoogleFill } from "react-icons/ri";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { data, Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
  const { user, setUser, createNewUser, signInWithGoogle } =
    useContext(AuthContext);
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        setUser(result.user);
        Swal.fire({
          title: "Success!",
          text: "Registered Successfully!",
          icon: "success",
          confirmButtonText: "Okay",
        });
        navigate("/");
      })
      .catch((error) => setError("ERROR", error.message));
  };

  const handleRegister = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
    const terms = e.target.terms.checked;

    if (password.length < 6) {
      setError("Password must contain at least 6 characters");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords didn't match");
      return;
    }
    if (!/[a-z]/.test(password)) {
      setError("Password must contain at least one lowercase letter");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setError("Password must contain at least one uppercase letter");
      return;
    }
    if (!terms) {
      setError("Please accept our terms and conditions");
      return;
    }

    createNewUser(email, password)
      .then((result) => {
        setUser(result.user);

        const createdAt = result?.user?.metadata?.creationTime;

        const newUser = { name, email, photo, createdAt };

        // Save New User to The Database
        fetch("https://b10-assignment-10-server.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log("New User Created to Database", data);
            if (data.insertedId) {
              Swal.fire({
                title: "Success!",
                text: "Registered Successfully!",
                icon: "success",
                confirmButtonText: "Okay",
              });
            }
            e.target.reset();
            navigate("/");
          });
      })
      .catch((error) => {
        // console.log("ERROR", error.message);
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center my-10">
      <div className="card bg-base-100 w-full max-w-xl shrink-0 shadow-2xl rounded-none px-[53px] py-[56px]">
        <h2 className="text-2xl font-semibold text-[#403F3F] text-center pb-8 border-b-2">
          Register your account
        </h2>
        <form onSubmit={handleRegister} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Enter your photo url"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              className="input input-bordered"
              required
            />
            <Link
              onClick={() => setShowPassword(!showPassword)}
              className="btn btn-xs absolute right-3 top-12 rounded-full"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </Link>
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Confirm Password</span>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm your password"
              className="input input-bordered"
              required
            />
            <Link
              onClick={() => setShowPassword(!showPassword)}
              className="btn btn-xs absolute right-3 top-12 rounded-full"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </Link>
          </div>
          {error && <p className="font-semibold text-red-500">{error}</p>}
          <div className="form-control">
            <label className="label justify-start gap-2 cursor-pointer items-center">
              <input
                type="checkbox"
                name="terms"
                className="checkbox h-5 w-5"
              />
              <span className="label-text font-semibold">
                Accept our{" "}
                <Link className="underline">Terms and Conditions</Link>
              </span>
            </label>
          </div>
          <div className="form-control">
            <button className="btn btn-neutral rounded-md text-white font-semibold text-base">
              Register
            </button>
          </div>
        </form>
        <p className="text-center font-semibold text-[#706F6F]">
          Already Have An Account ?{" "}
          <Link to={"/auth/login"} className="text-red-500 font-bold">
            Login
          </Link>
        </p>
        <div className="divider">OR</div>
        <div>
          <div className="flex flex-col gap-2">
            <button
              onClick={handleGoogleSignIn}
              className="btn text-[#403F3F] text-lg font-medium bg-white border-2 border-[#403F3F] hover:text-white hover:bg-[#403F3F] hover:border-none hover:shadow-lg"
            >
              <RiGoogleFill />
              Login with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
