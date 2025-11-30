import { useState } from "react";
import { IntroScreen } from "@/components/IntroScreen";
import { PhotoGallery } from "@/components/PhotoGallery";
import { CountdownTimer } from "@/components/CountdownTimer";
import { ScratchCard } from "@/components/ScratchCard";
import { VideoPlayer } from "@/components/VideoPlayer";
import { LetterPage } from "@/components/LetterPage";
import { Navigation } from "@/components/Navigation";

type Scene = "intro" | "gallery" | "countdown" | "scratch" | "videos" | "letter";

const Index = () => {
  const [currentScene, setCurrentScene] = useState<Scene>("intro");

  const renderScene = () => {
    switch (currentScene) {
      case "intro":
        return <IntroScreen onEnter={() => setCurrentScene("gallery")} />;
      case "gallery":
        return <PhotoGallery />;
      case "countdown":
        return <CountdownTimer />;
      case "scratch":
        return <ScratchCard />;
      case "videos":
        return <VideoPlayer />;
      case "letter":
        return <LetterPage />;
      default:
        return <IntroScreen onEnter={() => setCurrentScene("gallery")} />;
    }
  };

  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      {/* Navigation - only show after intro */}
      {currentScene !== "intro" && (
        <Navigation currentScene={currentScene} onSceneChange={setCurrentScene} />
      )}

      {/* Scene Container */}
      <main className="relative z-10 min-h-screen">
        {renderScene()}
      </main>
    </div>
  );
};

export default Index;
