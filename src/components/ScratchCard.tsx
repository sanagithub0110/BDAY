import { useRef, useState, useEffect } from "react";

const message = `
YOU ARE LOVABLE.

THANK YOU FOR CHOOSING TO STAY.

YOU MEAN THE WORLD TO ME.

YOUR PRESENCE MAKES EVERYTHING LIGHTER.

YOU ARE ONE OF MY FAVORITE HUMANS.

I LOVE YOU SM BKL 😘
`;



export const ScratchCard = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isScratching, setIsScratching] = useState(false);
  const [scratchProgress, setScratchProgress] = useState(0);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, "hsl(220, 35%, 45%)");
    gradient.addColorStop(0.5, "hsl(210, 25%, 50%)");
    gradient.addColorStop(1, "hsl(0, 45%, 45%)");

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "rgba(255, 255, 255, 0.1)";
    for (let i = 0; i < 1000; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      ctx.fillRect(x, y, 1, 1);
    }

    ctx.font = "24px 'Dancing Script', cursive";
    ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
    ctx.textAlign = "center";
    ctx.fillText("✨ Scratch to reveal ✨", canvas.width / 2, canvas.height / 2);
  }, []);

  const scratch = (
    e:
      | React.MouseEvent<HTMLCanvasElement>
      | React.TouchEvent<HTMLCanvasElement>
  ) => {
    if (!isScratching) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    let x, y;

    if ("touches" in e) {
      x = e.touches[0].clientX - rect.left;
      y = e.touches[0].clientY - rect.top;
    } else {
      x = e.clientX - rect.left;
      y = e.clientY - rect.top;
    }

    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(x, y, 30, 0, Math.PI * 2);
    ctx.fill();

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let transparent = 0;

    for (let i = 3; i < imageData.data.length; i += 4) {
      if (imageData.data[i] === 0) transparent++;
    }

    const progress =
      (transparent / (imageData.data.length / 4)) * 100;

    setScratchProgress(progress);

    if (progress > 70 && !isRevealed) {
      setIsRevealed(true);
      canvas.style.opacity = "0";
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 pt-24">

      {/* Ambient Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-[100px] animate-float" />
        <div
          className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-secondary/5 rounded-full blur-[100px] animate-float"
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      {/* Title */}
      <div className="text-center mb-12 gentle-fade relative z-10">
        <h1 className="text-4xl md:text-6xl font-elegant mb-4 text-foreground">
          AAPKI LIYE KUCH ACCHA
        </h1>
        <p className="text-lg font-body text-muted-foreground">
          Scratch to reveal what's written 😈
        </p>
      </div>

      {/* Scratch Card */}
      <div
        className="relative w-full max-w-2xl aspect-[2/1] gentle-fade"
        style={{ animationDelay: "0.3s" }}
      >
        <div className="absolute inset-0 bg-card/50 backdrop-blur-md border border-primary/20 rounded-2xl overflow-hidden shadow-glow-ambient">

          {/* Hidden Message */}
          <div className="absolute inset-0 flex items-center justify-center p-8">
            <p className="text-2xl md:text-4xl font-handwritten text-center text-foreground leading-relaxed">
              {message}
            </p>
          </div>

          {/* Scratch Canvas */}
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full cursor-pointer transition-opacity duration-1000"
            onMouseDown={() => setIsScratching(true)}
            onMouseUp={() => setIsScratching(false)}
            onMouseMove={scratch}
            onTouchStart={() => setIsScratching(true)}
            onTouchEnd={() => setIsScratching(false)}
            onTouchMove={scratch}
          />
        </div>

        {/* Progress Bar */}
        {scratchProgress > 0 && scratchProgress < 70 && (
          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-64">
            <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-full p-2">
              <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-soft-gradient transition-all duration-300"
                  style={{ width: `${scratchProgress}%` }}
                />
              </div>
            </div>
          </div>
        )}

        {/* Reveal Sparkles */}
        {isRevealed && (
          <div className="absolute -inset-4 pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-primary/50 rounded-full animate-particles"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 0.5}s`,
                }}
              />
            ))}
          </div>
        )}
      </div>

    </div>
  );
};
