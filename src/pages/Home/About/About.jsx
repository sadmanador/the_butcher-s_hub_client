import React from "react";

const About = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url("assets/night.jpg")`,
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 lg:text-5xl text-2xl font-bold">About</h1>
          <img className="w-36 mx-auto rounded-xl" src="assets/logo.jpg" alt="" />
          <div className="mb-5 text-lg">
            <p>
              The Butcher's Hub is a team of skilled chefs and meat enthusiasts
              based in California, USA. Our love for high-quality,
              locally-sourced meat and exceptional culinary experiences is what
              sets us apart. We take great pride in sourcing only the finest
              cuts from trusted suppliers and using our expertise in butchery
              and cooking to create delicious, mouth-watering dishes.
            </p>
            <p className="my-4">
              At The Butcher's Hub, we are committed to sustainability and
              ethical practices, and we believe in educating our customers about
              responsible meat consumption. Our focus on community extends
              beyond our kitchen, as we strive to share our passion for food and
              inspire others to appreciate the art of cooking.
            </p>
            <p>
              At The Butcher's Hub, we are more than just a restaurant - we are
              a community of food lovers who are committed to sharing our
              passion for exceptional cuisine and responsible meat consumption.
            </p>
          </div>
          <button className="btn glass normal-case">Keep In Touch</button>
        </div>
      </div>
    </div>
  );
};

export default About;
