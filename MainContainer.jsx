import LeftContainer from "./LeftContainer";
import RightContainer from "./RightContainer";
import { useState } from "react";

export default function Main() {
  return (
    <main className="main-container flex flex-1 min-h-[87.5vh]">
      {/* Left Section (60%) */}
      <LeftContainer />

      {/* Right Section (40%) */}
      <RightContainer />
    </main>
  );
}
