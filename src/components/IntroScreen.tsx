import { useState } from "react";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface IntroScreenProps {
  onEnter: () => void;
}

export const IntroScreen = ({ onEnter }: IntroScreenProps) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleEnter = () => {
    setIsAnimating(true);
    setTimeout(() => {
      onEnter();
    }, 800);
  };

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-800 ${
        isAnimating ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Ambient Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] animate-float" style={{ animationDelay: '1s' }} />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full animate-particles"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-2xl">
        {/* Name with Shimmer */}
        <div className="relative mb-8 gentle-fade">
          <div className="absolute inset-0 bg-soft-gradient blur-3xl opacity-50" />
          <h1 className="relative text-6xl md:text-8xl font-elegant mb-4 bg-gradient-to-r from-primary via-foreground to-secondary bg-clip-text text-transparent">
            TO MY FAVORITE BKL, SUMIT
          </h1>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-shimmer" />
        </div>

        {/* Subtitle */}
        <div className="mb-12 gentle-fade" style={{ animationDelay: '0.3s' }}>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-card/50 backdrop-blur-sm border border-primary/20 rounded-full">
            <Sparkles className="w-4 h-4 text-primary" />
            <p className="text-lg md:text-xl font-body text-muted-foreground">
              An early birthday gift for you... (hehehehe)
            </p>
            <Sparkles className="w-4 h-4 text-secondary" />
          </div>
        </div>

        {/* Enter Button */}
        <div className="gentle-fade" style={{ animationDelay: '0.6s' }}>
          <Button
            onClick={handleEnter}
            size="lg"
            className="px-8 py-6 text-lg font-body bg-soft-gradient hover:shadow-glow-ambient transition-all duration-300 border border-primary/30 rounded-full"
          >
            LESSSGOOO!!!
          </Button>
        </div>

        {/* Subtle hint */}
        <p className="mt-8 text-sm text-muted-foreground/50 gentle-fade" style={{ animationDelay: '0.9s' }}>
          (Face pe smile toh rakh bbg)
        </p>
      </div>
    </div>
  );
};
