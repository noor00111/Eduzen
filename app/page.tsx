"use client";

import AboutSection from "../src/components/home/AboutSection";
import ChooseUs from "../src/components/home/ChooseUs";
import FindTutor from "../src/components/home/FindTutor";
import Hero from "../src/components/home/Hero";
import SubjectCategories from "../src/components/home/SubjectCategories";
import Testimonials from "../src/components/home/Testimonials";
import TopTutor from "../src/components/home/TopTutor";

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-hidden bg-body-500 text-brand-900">
      <Hero></Hero>
      <AboutSection></AboutSection>
      <FindTutor></FindTutor>
      <SubjectCategories></SubjectCategories>
      <TopTutor></TopTutor>
      <ChooseUs></ChooseUs>
      <Testimonials></Testimonials>
    </div>
  );
}
