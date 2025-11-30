import { ChevronLeft, ChevronRight, Image, Clock, Sparkles, Video, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

type Scene = "gallery" | "countdown" | "scratch" | "videos" | "letter";

interface NavigationProps {
  currentScene: Scene;
  onSceneChange: (scene: Scene) => void;
}

const scenes: { id: Scene; label: string; icon: any }[] = [
  { id: "gallery", label: "Memories", icon: Image },
  { id: "countdown", label: "Countdown", icon: Clock },
  { id: "scratch", label: "Message", icon: Sparkles },
  { id: "videos", label: "Videos", icon: Video },
  { id: "letter", label: "Letter", icon: FileText },
];

export const Navigation = ({ currentScene, onSceneChange }: NavigationProps) => {
  const currentIndex = scenes.findIndex(s => s.id === currentScene);

  const goNext = () => {
    const nextIndex = (currentIndex + 1) % scenes.length;
    onSceneChange(scenes[nextIndex].id);
  };

  const goPrev = () => {
    const prevIndex = currentIndex === 0 ? scenes.length - 1 : currentIndex - 1;
    onSceneChange(scenes[prevIndex].id);
  };

  return (
    <>
      {/* Main Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-card/60 backdrop-blur-lg border-b border-primary/10">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo/Title */}
            <div className="flex items-center gap-3">
              <h1 className="text-xl font-elegant tracking-wide">
                Sumit's <span className="text-primary">Day</span>
              </h1>
            </div>

            {/* Scene Indicators */}
            <div className="flex items-center gap-2">
              {scenes.map((scene, idx) => {
                const Icon = scene.icon;
                return (
                  <button
                    key={scene.id}
                    onClick={() => onSceneChange(scene.id)}
                    className={`group relative px-3 py-2 rounded-xl transition-all duration-300 ${
                      currentScene === scene.id
                        ? 'bg-primary/20 text-primary shadow-glow-soft-blue'
                        : 'bg-card/30 text-muted-foreground hover:bg-card/50 hover:text-foreground'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity font-body">
                      {scene.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      {/* Side Navigation Arrows - More subtle */}
      <Button
        onClick={goPrev}
        variant="outline"
        size="icon"
        className="fixed left-4 top-1/2 -translate-y-1/2 z-40 w-12 h-12 rounded-full bg-card/50 backdrop-blur-md border-primary/10 hover:border-primary/30 hover:shadow-glow-soft-blue transition-all"
      >
        <ChevronLeft className="w-5 h-5" />
      </Button>

      <Button
        onClick={goNext}
        variant="outline"
        size="icon"
        className="fixed right-4 top-1/2 -translate-y-1/2 z-40 w-12 h-12 rounded-full bg-card/50 backdrop-blur-md border-primary/10 hover:border-primary/30 hover:shadow-glow-soft-blue transition-all"
      >
        <ChevronRight className="w-5 h-5" />
      </Button>

      {/* Scene Counter */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 px-4 py-2 bg-card/50 backdrop-blur-md border border-primary/10 rounded-full">
        <span className="text-sm font-body text-muted-foreground">
          {currentIndex + 1} <span className="text-primary/50 mx-1">/</span> {scenes.length}
        </span>
      </div>
    </>
  );
};
