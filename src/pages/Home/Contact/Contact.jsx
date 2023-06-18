import React from "react";

const Contact = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url("assets/restaurant.jpg")`,
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left text-white">
          <h1 className="lg:text-5xl text-2xl font-bold">Contact Us!</h1>
          <p className="py-6 px-10">
            For inquiries or reservations, please visit our website or give us a
            call. <br /> We look forward to hearing from you and sharing our
            love for exceptional <br /> meat and culinary experiences at The
            Butcher's Hub.
          </p>
        </div>
        <div className="text-center lg:hidden">
      <button className="btn glass">contact</button>
        </div>
        <div className="card glass flex-shrink-0 w-full max-w-sm shadow-2xl hidden lg:block">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white lg:text-lg">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white lg:text-lg">
                  Message
                </span>
              </label>
              <textarea
                placeholder="message"
                className="textarea textarea-bordered textarea-md w-full max-w-xs"
              ></textarea>
            </div>
            <div className="form-control mt-6">
              <button className="btn glass">Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
