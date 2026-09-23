"use client";

import ChooseUs from "../src/components/home/ChooseUs";
import FindTutor from "../src/components/home/FindTutor";
import Hero from "../src/components/home/Hero";
import TopTutor from "../src/components/home/TopTutor";

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      <Hero></Hero>
      <TopTutor></TopTutor>
      <ChooseUs></ChooseUs>
      <FindTutor></FindTutor>
    </div>
  );
}
