"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const musicSchoolContent = [
  {
    title: "Personalized Music Training",
    description:
      "Unlock your potential with one-on-one music lessons tailored to your skill level and goals. Whether you're a beginner or an advanced musician, our expert instructors will guide you every step of the way.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--indigo-500),var(--pink-500))] text-white">
        Personalized Music Training
      </div>
    ),
  },
  {
    title: "Live Performances",
    description:
      "Gain real-world experience by performing live in front of audiences. Our school organizes regular concerts, recitals, and open mic events to help you build confidence and stage presence.",
    content: (
       <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--indigo-500),var(--pink-500))] text-white">
       Live Performances
      </div>
    ),
  },
  {
    title: "Studio Recording Access",
    description:
      "Step into a professional environment and record your own music in our state-of-the-art studio. Learn the basics of audio production and take home high-quality recordings of your progress.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--blue-500),var(--green-500))] text-white">
        Studio Recording Access
      </div>
    ),
  },
  {
    title: "Music Theory & Composition",
    description:
      "Master the language of music with comprehensive lessons in music theory, ear training, and composition. Our curriculum equips you to not only play but also understand and create music with depth and emotion.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-400))] text-white">
        Music Theory & Composition
      </div>
    ),
  },
];
 
function WhyChooseUs() {
  return (
    <div>
        <StickyScroll content={musicSchoolContent} />
    </div>
  )
}

export default WhyChooseUs