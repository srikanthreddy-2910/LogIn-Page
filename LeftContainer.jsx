import spreadBgImg from "../assets/spreadBgImg.jpg";

export default function LeftContainer() {
  return (
    <div className="left-container min-w-[60%] bg-gray-200 relative">
      {/* Image */}
      <img
        src={spreadBgImg}
        alt="Placeholder"
        className="left-img w-[100%] h-[100%] object-fill"
      />

      {/* Text on Image */}
      <div className="container-text absolute inset-0 flex flex-col items-center justify-start pt-112">
        <h1 className="text-4xl px-24 font-bold text-[#FFFFFF] text-center animate-fade-in-up">
          Gather wisdom from us, cultivate the land, and feed the world
        </h1>
      </div>
    </div>
  );
}
