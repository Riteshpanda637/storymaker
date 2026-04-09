"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

// All available photos from BIKASH & LIZARANI folder
const allPhotos = [
  "/BIKASH%20%26%20LIZARANI/Cover.jpg",
  "/BIKASH%20%26%20LIZARANI/06.jpg",
  "/BIKASH%20%26%20LIZARANI/07.jpg",
  "/BIKASH%20%26%20LIZARANI/08.jpg",
  "/BIKASH%20%26%20LIZARANI/DSC_5612-1.jpg",
  "/BIKASH%20%26%20LIZARANI/DSC_5618-1.jpg",
  "/BIKASH%20%26%20LIZARANI/DSC_5623-1.jpg",
  "/BIKASH%20%26%20LIZARANI/DSC_5649-1.jpg",
  "/BIKASH%20%26%20LIZARANI/DSC_5649-101.jpg",
  "/BIKASH%20%26%20LIZARANI/DSC_5664-1.jpg",
  "/BIKASH%20%26%20LIZARANI/DSC_57080.jpg",
  "/BIKASH%20%26%20LIZARANI/DSC_7604-1.jpg",
  "/BIKASH%20%26%20LIZARANI/DSC_7608-1.jpg",
  "/BIKASH%20%26%20LIZARANI/DSC_7609-1.jpg",
  "/BIKASH%20%26%20LIZARANI/DSC_7617-1.jpg",
  "/BIKASH%20%26%20LIZARANI/DSC_8201-1.jpg",
  "/BIKASH%20%26%20LIZARANI/DSC_8432-1.jpg",
  "/BIKASH%20%26%20LIZARANI/DSC_8434-1.jpg",
  "/BIKASH%20%26%20LIZARANI/DSC_8438-1.jpg",
  "/BIKASH%20%26%20LIZARANI/DSC_8440-1.jpg",
  "/BIKASH%20%26%20LIZARANI/DSC_8462-1.jpg",
  "/BIKASH%20%26%20LIZARANI/DSC_8491-1.jpg",
];

// Photos for the 3x3 layout (from homesecond folder)
const secondPhotos = [
  "/homesecond/DSC00863-1.jpg",
  "/homesecond/DSC00873-1.jpg",
  "/homesecond/DSC00881-1.jpg",
  "/homesecond/DSC00905-1.jpg",
  "/homesecond/DSC00915-1.jpg",
  "/homesecond/DSC00929-1.jpg",
  "/homesecond/DSC00933-1.jpg",
  "/homesecond/DSC00938-1.jpg",
  "/homesecond/DSC00939-1.jpg",
  "/homesecond/DSC00949-1.jpg",
  "/homesecond/DSC04610-1.jpg",
  "/homesecond/DSC04634-1.jpg",
];

// Shuffle array function
const shuffleArray = (array: string[]) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Get photos for the grid
const getGridPhotos = (count: number, is5x3: boolean) => {
  const source = is5x3 ? allPhotos : secondPhotos;
  const shuffled = shuffleArray([...source]);
  return shuffled.slice(0, count);
};

export default function IntroPage() {
  const router = useRouter();

  // Grid layout state: true = 5x3, false = 3x3
  const [is5x3Layout, setIs5x3Layout] = useState(true);
  const [currentPhotos, setCurrentPhotos] = useState<string[]>([]);
  const [nextPhotos, setNextPhotos] = useState<string[]>([]);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // 5x3 = 15 cells, center at index 7, so 14 photos
  // 3x3 = 9 cells, center at index 4, so 8 photos
  const getPhotoCount = (is5x3: boolean) => (is5x3 ? 14 : 8);
  const getCenterIndex = (is5x3: boolean) => (is5x3 ? 7 : 4);
  const getTotalCells = (is5x3: boolean) => (is5x3 ? 15 : 9);

  // Initialize photos on mount
  useEffect(() => {
    const initialCount = getPhotoCount(true); // Start with 5x3
    setCurrentPhotos(getGridPhotos(initialCount, true));
    setNextPhotos(getGridPhotos(8, false)); // Prepare for 3x3

    const loadTimer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(loadTimer);
  }, []);

  // Cycle between layouts every 10 seconds
  useEffect(() => {
    if (!isLoaded) return;

    const interval = setInterval(() => {
      setIsTransitioning(true);

      // After fade out, switch layout and photos
      setTimeout(() => {
        const newIs5x3 = !is5x3Layout;
        setIs5x3Layout(newIs5x3);

        // Set current photos for new layout
        const newCount = getPhotoCount(newIs5x3);
        setCurrentPhotos(nextPhotos.slice(0, newCount));

        // Prepare next photos for the opposite layout
        const nextCount = getPhotoCount(!newIs5x3);
        setNextPhotos(getGridPhotos(nextCount, !newIs5x3));

        setIsTransitioning(false);
      }, 1500);
    }, 5000);

    return () => clearInterval(interval);
  }, [isLoaded, is5x3Layout, nextPhotos]);

  const handleEnter = () => {
    router.push("/home");
  };

  const renderGridItem = (index: number) => {
    const centerIndex = getCenterIndex(is5x3Layout);

    // Center cell - Logo box
    if (index === centerIndex) {
      return (
        <div
          key="logo"
          className="logo-cell"
        >
          <div className="logo-wrapper">
            <Image
              src="/logo/1.svg"
              alt="StoryMaker Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <button onClick={handleEnter} className="enter-btn">
            Enter
          </button>
        </div>
      );
    }

    // Map grid index to photo index (skip center position)
    const photoIndex = index < centerIndex ? index : index - 1;
    const photo = currentPhotos[photoIndex];

    if (!photo) return <div key={index} className="bg-black" />;

    return (
      <div key={index} className="photo-cell">
        <div className="photo-layer opacity-100">
          <Image
            src={photo}
            alt={`Wedding photography portfolio by StoryMaker - image ${photoIndex + 1}`}
            fill
            sizes={is5x3Layout ? "(max-width: 768px) 33vw, 20vw" : "(max-width: 768px) 50vw, 33vw"}
            className="object-cover"
            priority={photoIndex < 6}
          />
        </div>
      </div>
    );
  };

  const totalCells = getTotalCells(is5x3Layout);
  const gridCells = Array.from({ length: totalCells }, (_, i) => i);

  return (
    <div
      className={`w-full h-screen overflow-hidden bg-black transition-opacity duration-1000 ${
        isLoaded ? "opacity-100" : "opacity-0"
      }`}
      role="main"
    >
      <h1 className="sr-only">StoryMaker — Premium Wedding Photography & Cinematography by Jaga Patro</h1>
      {/* Grid with transition */}
      <div
        className={`grid-container ${is5x3Layout ? "grid-5x3" : "grid-3x3"} ${
          isTransitioning ? "opacity-0" : "opacity-100"
        }`}
      >
        {gridCells.map((index) => renderGridItem(index))}
      </div>
    </div>
  );
}
