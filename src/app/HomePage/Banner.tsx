const Banner = () => {
  return (
    <div>
      <div>
        <div
          className="hero min-h-[500px]"
          style={{
            backgroundImage:
              "url('https://i.ibb.co/m59wyvdY/vl-blog-left-bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="hero-overlay bg-opacity-60 "></div>
          <div className=" text-center text-neutral-content">
            <div className="hero-content flex-col lg:flex-row gap-10">
              <div className="text-center lg:text-left space-y-6">
                <h1 className="text-3xl lg:text-7xl font-bold ">
                  Our Causes Details
                </h1>
                <p className="text-md font-bold">
                  We invite you to join us, meet like-minded individuals, and
                  become part of a movement
                  <br /> that makes real, lasting change. Whether you attend,
                  volunteer, or help spread the word, <br />
                  your involvement is invaluable. Explore our upcoming events.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
