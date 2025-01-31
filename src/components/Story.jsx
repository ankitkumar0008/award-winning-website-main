import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import Button from "./Button";
import AnimatedTitle from "./AnimatedTitle";
import "./Story.css";

const FloatingImage = () => {
  const frameRef = useRef(null);

  const [departmenthead, setDepartmenthead] = useState(
    Array.from({ length: 14 }, (_, i) => `/img/departmenthead-${i + 1}.jpeg`)
  );

  const [eventCoord, setEventCoord] = useState(
    Array.from({ length: 7 }, (_, i) => `/img/eventCoord-${i + 1}.jpeg`)
  );

  const [eventTeam, setEventTeam] = useState(
    Array.from({ length: 11 }, (_, i) => `/img/t${i + 1}.jpeg`)
  );

  const [isLoading, setIsLoading] = useState(false);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const element = frameRef.current;

    if (!element) return;

    const rect = element.getBoundingClientRect();
    const xPos = clientX - rect.left;
    const yPos = clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((yPos - centerY) / centerY) * -10;
    const rotateY = ((xPos - centerX) / centerX) * 10;

    gsap.to(element, {
      duration: 0.3,
      rotateX,
      rotateY,
      transformPerspective: 500,
      ease: "power1.inOut",
    });
  };

  const handleMouseLeave = () => {
    const element = frameRef.current;

    if (element) {
      gsap.to(element, {
        duration: 0.3,
        rotateX: 0,
        rotateY: 0,
        ease: "power1.inOut",
      });
    }
  };

  return (
    <div className="layer">
      <div id="story" className="min-h-dvh w-screen bg-black text-blue-50">
        <div className="flex size-full flex-col items-center py-10 pb-24">
          {/* <p className="font-general text-sm uppercase md:text-[10px]">
            the multiversal ip world
          </p> */}

          <div className="relative size-full">
            <AnimatedTitle
              title="Our technobash </br> team "
              containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
            />

            {/* <div className="story-img-container">
              <div className="story-img-mask">
                <div className="story-img-content">
                  <div className="flex flex-row overflow-hidden w-auto">
                    <img
                      ref={frameRef}
                      onMouseMove={handleMouseMove}
                      onMouseLeave={handleMouseLeave}
                      onMouseUp={handleMouseLeave}
                      onMouseEnter={handleMouseLeave}
                      alt="entrance.webp"
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      {/* Department Heads Section */}
      <div className="firstheading">
        <AnimatedTitle
          title="Department Heads"
          containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
        />
      </div>
      <div className="stock-ticker">
        <ul>
          {departmenthead.map((image, index) => (
            <li key={index}>
              <img
                src={image}
                alt={`gallery-${index + 1}.webp`}
                className="w-60 h-60 object-cover rounded-lg shadow-lg Rishi_img"
              />
            </li>
          ))}
        </ul>

        <ul>
          {departmenthead.map((image, index) => (
            <li key={index}>
              <img
                src={image}
                alt={`gallery-${index + 1}.webp`}
                className="w-60 h-60 object-cover rounded-lg shadow-lg Rishi_img"
              />
            </li>
          ))}
        </ul>
      </div>

      {/* Event Coordinators Section */}
      <div className="firstheading2">
        <AnimatedTitle
          title="Event co<b>-</b>ordinators"
          containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
        />
      </div>
      <div className="stock-ticker2">
        <ul>
          {eventCoord.map((image, index) => (
            <li key={index}>
              <img
                src={image}
                alt={`gallery-${index + 1}.webp`}
                className="w-60 h-60 object-cover rounded-lg shadow-lg Rishi_img"
              />
            </li>
          ))}
        </ul>

        <ul>
          {eventCoord.map((image, index) => (
            <li key={index}>
              <img
                src={image}
                alt={`gallery-${index + 1}.webp`}
                className="w-60 h-60 object-cover rounded-lg shadow-lg Rishi_img"
              />
            </li>
          ))}
        </ul>
      </div>

      {/* faculty coordinators Section */}
      <div className="firstheading3">
        <AnimatedTitle
          title="faculty coordinators"
          containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
        />
      </div>
      <div className="stock-ticker3">
        <ul>
          {eventTeam.map((image, index) => (
            <li key={index}>
              <img
                src={image}
                alt={`t${index + 1}.webp`}
                className="w-60 h-60 object-cover rounded-lg shadow-lg Rishi_img"
              />
            </li>
          ))}
        </ul>

        <ul>
          {eventTeam.map((image, index) => (
            <li key={index}>
              <img
                src={image}
                alt={`t${index + 1}.webp`}
                className="w-60 h-60 object-cover rounded-lg shadow-lg Rishi_img"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FloatingImage;
