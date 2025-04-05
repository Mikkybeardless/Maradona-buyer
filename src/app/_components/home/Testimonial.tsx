import Carousel from "./Carousel";

export default function Testimonial() {
  return (
    <section
      id="testimonials"
      className="bg-white relative w-full mt-4 flex  sm:px-6 lg:px-8"
    >
      <div className="w-full flex  flex-col items-start py-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-[#040421] text-[32px] font-bold ">Testimonials</h2>
        <p className="mb-2 text-white">
          Here&apos;s what our top clients have to say about us
        </p>
        <div className="relative flex space-y-10 flex-col gap-[20rem] md:gap-0 md:flex-row w-full">
          <img
            src="home/testimonial.png"
            className="w-full h-96 object-cover rounded-md items-start"
            alt="testimonial main image"
          />
          <div className="absolute md:bottom-0 md:left-0 w-full md:w-1/2 px-5 py-4 text-white bg-black/50 backdrop-blur-sm">
            <h3 className="text-lg text-white font-semibold mb-2">
              Meet Our Team
            </h3>
            <p className="text-left text-white w-[60%]">
              Our dedicated professionals are committed to connecting you with
              the best distress sale deals on lands, houses, and cars. Together,
              we deliver excellence and trust
            </p>
          </div>
          <div className="w-full mt-10 relative">
            <Carousel />
          </div>
        </div>
      </div>
    </section>
  );
}
