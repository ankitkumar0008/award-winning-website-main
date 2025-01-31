import AnimatedTitle, { AnimatedTitle2 } from "./AnimatedTitle";
import "./Contact.css";

const Contact = () => {
  const gridImages = ["/img/shanacoder.png"];
  const linkArray = ["https://shanacoder.com/"];

  const array2 = [
  "/img/PRO GAMING COLOUR.png",
    "/img/Kasnet.jpg", // Added Kasnet image
    // "/img/shanacoder.png"
  ];

  const array2links = [
    "",
    "https://kasnet.com/", // Added Kasnet link
    //"https://shanacoder.com/"
  ];

  const brand = [
    //"/img/shanacoder.png",
    "/img/wet&joyLogo.jpeg", // Added Kasnet image
    // "/img/shanacoder.png"
  ];

  const brandlinks = [
    //"https://shanacoder.com/",
    "https://www.lonavala.wetnjoy.in/?campaign=21473404301&content=705876793824&keyword=lonavala%20water%20park&gad_source=1&gclid=Cj0KCQiA4-y8BhC3ARIsAHmjC_EuwYMVOpc-s2-PNHmT6LyY7FI8ES0hJ19msAFFuj8Bi0B63VYEulkaAiN_EALw_wcB", // Added Kasnet link
    //"https://shanacoder.com/"
  ];


  return (
    <div  className="my-20 min-h-96 w-screen px-10">
      <div className="relative rounded-lg bg-black py-[20px] text-blue-50 -mx-10 sponser_padd ">
        {/* Title Section */}
        <div className="flex flex-col items-center text-center relative z-10 ">
          <p className="mb-5 font-general text-[10px] uppercase">Technobash</p>
          <AnimatedTitle
            title="our sponsors"
            className="special-font !md:text-[6.2rem] w-full font-zentry !text-5xl !font-black !leading-[.9]"
          />
        </div>
      </div>
      <div className="relative rounded-lg bg-black py-[20px] text-blue-50 -mx-10 sponser_padd min-h-96">
        {/* Title Section */}
        <div className="flex flex-col items-center text-center relative z-10 ">
          <AnimatedTitle2
            title="TITLE SPONSOR"
            className="special-font !md:text-[6.2rem] w-full font-zentry !text-5xl !font-black !leading-[.9] font-[400] text-[45px]"
          />
        </div>

        {/* Centered Image Section */}
        <div className="flex justify-center items-center mt-20 relative z-10 sponcer_img p-[40px] md:gap-[100px] flex-col md:flex-row gap-[50px]">
          {array2.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg border border-gray-700 shadow-lg max-w-xs "
            >
              <a href={array2links[index]} target="_blank">
                <img
                  src={image}
                  alt={`Grid ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="relative rounded-lg bg-black py-[20px] text-blue-50 -mx-10 sponser_padd min-h-96">
        {/* Title Section */}
        <div className="flex flex-col items-center text-center relative z-10 ">
          <AnimatedTitle2
            title="sponsors"
            className="special-font !md:text-[6.2rem] w-full font-zentry !text-5xl !font-black !leading-[.9] text-[14px]"
          />
        </div>
        {/* Array 3 links and imgs */}
        {/* Centered Image Section */}
        <div className="flex justify-center items-center mt-20 relative z-10 sponcer_img p-[40px] md:gap-[100px] flex-col md:flex-row gap-[50px]">
          {gridImages.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg border border-gray-700 shadow-lg max-w-xs"
            >
              <a href={linkArray[index]} target="_blank">
                <img
                  src={image}
                  alt={`Grid ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="relative rounded-lg bg-black py-[20px] text-blue-50 -mx-10 sponser_padd min-h-96">
        {/* Title Section */}
        <div className="flex flex-col items-center text-center relative z-10 ">
          <AnimatedTitle2
            title="BRAND SPONSOR"
            className="special-font !md:text-[6.2rem] w-full font-zentry !text-5xl !font-black !leading-[.9] font-[400] text-[45px]"
          />
        </div>
        {/* Array 3 links and imgs */}
        {/* Centered Image Section */}
        <div className="flex justify-center items-center mt-20 relative z-10 sponcer_img p-[40px] md:gap-[100px] flex-col md:flex-row gap-[50px]">
          {brand.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg border border-gray-700 shadow-lg max-w-xs"
            >
              <a href={brandlinks[index]} target="_blank">
                <img
                  src={image}
                  alt={`Grid ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;