import { useRef, useState } from "react";
import Color from "./constants/Color";
import MainSection from "./components/MainSection";

const gradients = [
  `radial-gradient(circle at top left, ${Color.pinkDark} 0%, ${Color.pinkLight} 50%)`,
  `radial-gradient(circle at top left, ${Color.blueDark} 0%, ${Color.blueLight} 50%)`,
  `radial-gradient(circle at top left, ${Color.chocolateDark} 0%, ${Color.chocolateLight} 50%)`,
  `radial-gradient(circle at top left, ${Color.greenDark} 0%, ${Color.greenLight} 50%)`,
];

function App() {
  const [index, setIndex] = useState(0);
  const [bgGradient, setBgGradient] = useState(gradients[0]);
  const [overlayGradient, setOverlayGradient] = useState(null);
  const overlayRef = useRef();

  const handleChange = (currInd) => {
    const nextIndex = currInd;
    const nextGradient = gradients[nextIndex];

    // Show overlay with next gradient
    setOverlayGradient(nextGradient);

    // Start fade-in animation
    setTimeout(() => {
      if (overlayRef.current) {
        overlayRef.current.classList.remove("opacity-0");
        overlayRef.current.classList.add("opacity-100");
      }
    }, 10);

    // After fade, update background and remove overlay
    setTimeout(() => {
      setBgGradient(nextGradient);
      setIndex(nextIndex);
      setOverlayGradient(null);
    }, 400); // match transition duration
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {/* Base background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: bgGradient,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Overlay background for fade-in */}
      {overlayGradient && (
        <div
          ref={overlayRef}
          className="absolute inset-0 z-10 opacity-0 transition-opacity duration-300"
          style={{
            backgroundImage: overlayGradient,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />
      )}

      {/* Foreground content */}
      <div className="relative z-20 h-full w-full">
        <MainSection
          index={index}
          setIndex={setIndex}
          handleChange={handleChange}
        />{" "}
      </div>
    </div>
  );
}

export default App;
