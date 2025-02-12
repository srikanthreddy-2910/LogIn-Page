import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";
import { useState } from "react";

function App() {
  return (
    <div className="container flex flex-col min-h-[100%] min-w-[100%]">
      {/* Main container */}
      <Main />

      {/* Footer container */}
      <Footer />
    </div>
  );
}

export default App;
