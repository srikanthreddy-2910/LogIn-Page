import LeftContainer from "./LeftContainer";
import RightContainer from "./RightContainer";

export default function Main() {
  return (
    <main className="main-container flex flex-1 relative]">
      {/* Left Section */}
      <LeftContainer />

      {/* Right Section */}
      <RightContainer />
    </main>
  );
}
