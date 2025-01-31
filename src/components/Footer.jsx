import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import "./footer.css";
import AnimatedTitle from "./AnimatedTitle";

// Define social links for each card
const courseDetails = [
  {
    //1
    title: "Website Developer",
    imgSrc: "./img/ankit.png", // Replace with your actual image path or URL
    linkText: "Ankit Kumar", // Custom text
    contactLink: "mailto:ankitkumar867903@gmail.com", // Link to redirect
    socialLinks: [
      { href: "https://www.linkedin.com/in/ankit-kumar-8585b6228/", icon: <FaLinkedin /> },
      { href: "https://github.com/ankitkumar0008", icon: <FaGithub /> },
      { href: "https://www.instagram.com/ankit00080/", icon: <FaInstagram /> },
    ],
  },
  {
    //2
    title: "Website Team Head",
    imgSrc: "./img/Aditya.png", // Replace with your actual image path or URL
    linkText: "Aditya Chaudhari", // Custom text
    contactLink: "mailto:adityakchaudhari@gmail.com", // Link to redirect
    socialLinks: [
      { href: "https://www.linkedin.com/in/aditya-chaudhari-5829a8259/", icon: <FaLinkedin /> },
      { href: "https://github.com/AdityaChaudhari15", icon: <FaGithub /> },
      { href: "https://www.instagram.com/adii4real?igsh=OHVka2xpMzEzZnJi", icon: <FaInstagram /> },
    ],
  },
  {
    //3
    title: "Graphic Designer",
    imgSrc: "./img/Manas.png", // Replace with your actual image path or URL
    linkText: "Manas Suryawanshi", // Custom text
    contactLink: "mailto:Manassuryawanshi29@gmail.com", // Link to redirect
    socialLinks: [
      { href: "https://linkedin.com/in/ankit3", icon: <FaLinkedin /> },
      { href: "https://github.com/manassuryawanshi", icon: <FaGithub /> },
      { href: "https://www.instagram.com/manassuryawanshi_?igsh=aWd2OWM1YnV0M3Ey", icon: <FaInstagram /> },
    ],
  },
  {
    //4
    title: "Website Developer",
    imgSrc: "./img/Hrishikesh.png", // Replace with your actual image path or URL
    linkText: "Hrishikesh Alabnur", // Custom text
    contactLink: "mailto:hrishikesh3248@gmail.com", // Link to redirect
    socialLinks: [
      { href: "https://www.linkedin.com/in/hrishikesh-alabnur-407269233?", icon: <FaLinkedin /> },
      { href: "https://github.com/RishiDevs3248", icon: <FaGithub /> },
      { href: "https://www.instagram.com/rishi__0204?igsh=MTlscXg1ejl0enM1cA==", icon: <FaInstagram /> },
    ],
  },
  {
    //5
    title: "Website Team head",
    imgSrc: "./img/Siddhantt.png", // Replace with your actual image path or URL
    linkText: "Siddhant Herale", // Custom text
    contactLink: "mailto:heralesiddhant@gmail.com", // Link to redirect
    socialLinks: [
      { href: "www.linkedin.com/in/siddhant-herale-56a322230", icon: <FaLinkedin /> },
      { href: "https://github.com/Parasid17", icon: <FaGithub /> },
      { href: "https://www.instagram.com/siddhantherale_17?igsh=MXJ6NTh5YWlhdjN2Nw==", icon: <FaInstagram /> },
    ],
  },
  {
    //6
    title: "Designer",
    imgSrc: "./img/Shantanu.png", // Replace with your actual image path or URL
    linkText: "Shantanu Bhandakkar", // Custom text
    contactLink: "mailto:shantanubhandakkar2@gmail.com", // Link to redirect
    socialLinks: [
      { href: "https://in.linkedin.com/in/shantanu-bhandakkar-7840a7253", icon: <FaLinkedin /> },
      { href: "https://github.com/shantanu768", icon: <FaGithub /> },
      { href: "https://www.instagram.com/_shantanu.who?igsh=bTg4NHY4ZHlmZm1j", icon: <FaInstagram /> },
    ],
  },
  {
    //7
    title: "Research Team",
    imgSrc: "./img/Vaishnavi.png", // Replace with your actual image path or URL
    linkText: "Vaishnavi Kamble", // Custom text
    contactLink: "mailto:vaishnavikamble57248@gmail.com", // Link to redirect
    socialLinks: [
      { href: "https://www.linkedin.com/in/vaishnavi-kamble-4490a1253", icon: <FaLinkedin /> },
      { href: "https://github.com/Uservai", icon: <FaGithub /> },
      { href: "https://www.instagram.com/vai.sh._?igsh=MTlxeHdqcWFncGdpdQ==", icon: <FaInstagram /> },
    ],
  },
  {
    //8
    title: "Research Team",
    imgSrc: "./img/Kalpesh.png", // Replace with your actual image path or URL
    linkText: "Kalpesh Sonawane", // Custom text
    contactLink: "mailto:sonawanekalpesh68@gmail.com", // Link to redirect
    socialLinks: [
      { href: "https://www.linkedin.com/in/kalpesh-sonawane-06a630252", icon: <FaLinkedin /> },
      { href: "https://github.com/Kalpesh2004", icon: <FaGithub /> },
      { href: "https://www.instagram.com/p/DAysobDgvkE/?igsh=ZDRodW95ODZyOWdq", icon: <FaInstagram /> },
    ],
  },
  {
    //9
    title: "Research Team",
    imgSrc: "./img/Hetavi.png", // Replace with your actual image path or URL
    linkText: "Hetavi Manani", // Custom text
    contactLink: "mailto:mananihetvi@gmail.com", // Link to redirect
    socialLinks: [
      { href: "https://www.linkedin.com/in/hetavi-manani-11b795234?", icon: <FaLinkedin /> },
      { href: "https://github.com/HetaviManani", icon: <FaGithub /> },
      { href: "https://www.instagram.com/hetviii_manani?igsh=MTRxNmRkeXA2N3d5bg==", icon: <FaInstagram /> },
    ],
  },
];

const FooterWithCourses = () => {
  return (
    <footer id="contact" className="footer w-screen bg-[#5542ff] text-black">
      <div className="container mx-auto flex flex-col gap-12 px-4 py-8">
        <AnimatedTitle
          title="Website Development Team"
          className="special-font !md:text-[6.2rem] w-full font-zentry !text-5xl !font-black !leading-[.9]"
        />

        {/* Courses Section */}
        <div className="ag-courses_box flex flex-wrap gap-6">
          {courseDetails.map((course, index) => (
            <div key={index} className="ag-courses_item">
              <div className="ag-courses-item_link">
                <div className="ag-courses-item_bg"></div>
                <div className="ag-courses-item_title">{course.title}</div>
                <img
                  src={course.imgSrc}
                  alt={course.title}
                  className="course-image"
                />
                <div className="email_div">
                  <a
                    href={course.contactLink} // Link to the desired URL
                    target="_blank"
                    rel="noopener noreferrer"
                    className="email_div_text"
                  >
                    {course.linkText} {/* Display custom text */}
                  </a>
                </div>
              </div>
              {/* Social Icons */}
              <div className="social-icons">
                {course.socialLinks.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white transition-colors duration-500 ease-in-out hover:text-yellow-400"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Content Section */}
        <div className="footer-content flex justify-between items-center text-white">
          <p className="text-white text-sm md:text-2xl font-light tyre">© Technobash 2025. All rights reserved</p>

          {/* Single Instagram Link */}
          <div className="text-lg izaat">
            <a
              href="https://www.instagram.com/technobash_2k25?igsh=ODVkYTJpeHNnZjg="
              target="_blank"
              rel="noopener noreferrer"
              className="text-black transition-colors duration-500 ease-in-out hover:text-white utar \\cursor-pointer"
            >
              <FaInstagram />
            </a>
          </div>


          {/* <a
            href="#privacy-policy"
            className="text-sm font-light hover:underline tyre"
          >
            Privacy Policy
          </a> */}
        </div>
      </div>
    </footer>
  );
};

export default FooterWithCourses;
