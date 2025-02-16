import spreadBgImg from "./spreadBgImg.jpg";

export default function LeftContainer() {
  return (
    <div className="left-container min-w-[60%] bg-gray-200 relative overflow-hidden">
      {/* Image */}
      <img
        src={spreadBgImg}
        alt="Placeholder"
        className="left-img w-full h-full object-cover"
      />

      {/* Text on Image */}
      <div
        className="container-text absolute inset-0 flex  items-center justify-center"
        style={{ transform: "translateY(24%)" }}
      >
        <h1 className="text-5xl px-16 font-bold text-[#FFFFFF] text-center animate-fade-in-up">
          Gather wisdom from us, cultivate the land, and feed the world
        </h1>
      </div>
    </div>
  );
}
