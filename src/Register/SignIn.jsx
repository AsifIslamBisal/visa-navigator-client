import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignIn = () => {
  const navigate = useNavigate();
  const { signInUser, signInWithGoogle } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
      .then((result) => {
        toast.success("Login Successful! 🎉", { position: "top-center" });
        e.target.reset();
        navigate("/");
      })
      .catch((error) => {
        toast.error("Login Failed! ❌ " + error.message, {
          position: "top-center",
        });
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        toast.success("Google Sign-In Successful! 🎉", {
          position: "top-center",
        });
        navigate("/");
      })
      .catch((error) => {
        toast.error("Google Sign-In Failed! ❌ " + error.message, {
          position: "top-center",
        });
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-2xl font-bold">Login now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <button
                  type="button"
                  className="label-text-alt link link-hover text-blue-500"
                >
                  Forgot password?
                </button>
              </label>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
          </form>

          <p className="ml-4 mb-4 mr-4">
            New to this website?{" "}
            <Link to="/signup" className="text-blue-500">
              Register
            </Link>
          </p>

          <div className="pl-8 pb-6">
            <button onClick={handleGoogleSignIn} className="btn btn-ghost">
              Google Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
