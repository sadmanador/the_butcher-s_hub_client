import React, { useContext, useState } from "react";
import { BsGithub } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import { toast } from "react-hot-toast";

const Register = () => {
  const { user, register, updateInfo, signUpWithGoogle, signInWithGitHub } =
    useContext(AuthContext);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();
    setError(null);
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirm_password.value;
    const displayName = form.name.value;
    const photoURL = form.photoUrl.value;
    const info = {
      displayName,
      photoURL,
    };

    if (password.length < 6 && confirmPassword.length < 6) {
      return setError("Please insert a password of at least 6 characters");
    }
    if (password !== confirmPassword) {
      return setError("Both the password and confirm password must match");
    }

    //creating an user
    register(email, password)
      .then((result) => {
        const user = result.user;
        toast.success(`${user.email} successfully registered`);
        updateInfo(info)
          .then()
          .catch((error) => setError(error.message));
        form.reset();
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  //google registration
  const handleGoogleRegister = () => {
    setError(null);
    signUpWithGoogle()
      .then((result) => {
        const user = result.user;
        toast.success(`${user.email} successfully logged in`);
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  //github registration
  const handleGitHubRegister = () => {
    setError(null);
    signInWithGitHub()
      .then((result) => {
        const user = result.user;
        toast.success(`${user.email} successfully logged in`);
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div
      className="hero min-h-screen text-white"
      style={{
        backgroundImage: `url("/assets/banner/banner-bg/banner.webp")`,
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content">
        <div className="card glass shadow-2xl p-8">
          <form onSubmit={handleRegister} className="card-body">
            <h1 className="text-center font-semibold text-3xl">Register</h1>
            <div className="grid grid-cols-2 gap-5">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  className="input input-bordered text-black"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered text-black"
                  required
                />
              </div>

              <div className="form-control col-span-2">
                <label className="label">
                  <span className="label-text">PhotoURL</span>
                </label>
                <input
                  type="text"
                  placeholder="photo URL"
                  name="photoUrl"
                  className="input input-bordered text-black"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered text-black"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  placeholder="confirm password"
                  name="confirm_password"
                  className="input input-bordered text-black"
                  required
                />
              </div>
            </div>
            <p className="text-center">
              Already have an account?{" "}
              <Link to="/login" href="#" className="link-hover text-blue-600">
                Login
              </Link>
            </p>
            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn btn-ghost btn-outline normal-case"
              >
                Register now
              </button>
            </div>
          </form>
          <div className="text-center mb-4 flex justify-center">
            <button
              onClick={handleGoogleRegister}
              className="btn btn-outline mr-4 normal-case tooltip tooltip-bottom"
              data-tip="Google"
            >
              Register with <FcGoogle className="text-2xl ml-1 inline" />
            </button>
            <button
              onClick={handleGitHubRegister}
              className="btn btn-outline normal-case tooltip tooltip-bottom"
              data-tip="GitHub"
            >
              Register with <BsGithub className="text-2xl ml-1 inline" />
            </button>
          </div>
          {error && (
            <div className="text-center mb-4 flex justify-center">
              <p>
                <span className="font-semibold">Error: </span>
                <span className="text-red-500">{error}</span>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Register;
