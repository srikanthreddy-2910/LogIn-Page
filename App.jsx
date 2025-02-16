import Main from "./MainContainer.jsx";
import Footer from "./Footer.jsx";

function App() {
  return (
    <div className="container flex flex-col min-h-[100vh] min-w-[100vw] relative">
      {/* Main container */}
      <Main />

      {/* Footer container */}
      <Footer />
    </div>
  );
}

export default App;
