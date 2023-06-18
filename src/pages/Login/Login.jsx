import React, { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { toast } from "react-hot-toast";

const Login = () => {
  const [error, setError] = useState(null);
  const { user, login, signUpWithGoogle, signInWithGitHub } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    setError(null);
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    if (password.length < 6) {
      return setError("Please insert a password of at least 6 characters");
    }

    login(email, password)
      .then((result) => {
        const user = result.user;
        toast.success(`${user.email} successfully logged in`);
        navigate(from, { replace: true });
        form.reset();
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  //google signing
  const handleGoogleLogin = () => {
    setError(null);
    signUpWithGoogle()
      .then((result) => {
        const user = result.user;
        toast.success(`${user.email} successfully logged in`);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  //github signing
  const handleGitHubLogin = () => {
    setError(null);
    signInWithGitHub()
      .then((result) => {
        const user = result.user;
        toast.success(`${user.email} successfully logged in`);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div
      className="hero min-h-screen bg-base-200 text-white"
      style={{
        backgroundImage: `url("assets/restaurant.jpg")`,
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content">
        <div className="card shadow-2xl glass p-6">
          <form onSubmit={handleLogin} className="card-body">
            <h1 className="text-center font-semibold text-3xl">Login</h1>
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
              <p>
                New to Butcher's hub?{" "}
                <Link
                  to="/register"
                  href="#"
                  className="link-hover text-blue-600"
                >
                  Register now
                </Link>
              </p>
            </div>
            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn normal-case"
              >
                Login
              </button>
            </div>
          </form>
          <div className="text-center mb-4 flex justify-center">
            <button
              onClick={handleGoogleLogin}
              className="btn mr-4 normal-case tooltip tooltip-bottom"
              data-tip="Google"
            >
              Login with <FcGoogle className="text-2xl ml-1 inline" />
            </button>
            <button
              onClick={handleGitHubLogin}
              className="btn normal-case tooltip tooltip-bottom"
              data-tip="GitHub"
            >
              Login with <BsGithub className="text-2xl ml-1 inline" />
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

export default Login;
