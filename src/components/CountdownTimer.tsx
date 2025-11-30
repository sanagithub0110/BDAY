import { useState, useEffect } from "react";

export const CountdownTimer = () => {
  const targetDate = new Date("2025-12-03T00:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const TimeBlock = ({ value, label }: { value: number; label: string }) => (
    <div className="relative group">
      <div className="relative bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 md:p-10 min-w-[100px] md:min-w-[140px] shadow-glow-ambient hover:shadow-glow-soft-blue transition-all duration-300">
        {/* Number */}
        <div className="text-5xl md:text-7xl font-elegant text-center mb-2 text-foreground">
          {String(value).padStart(2, '0')}
        </div>
        
        {/* Label */}
        <div className="text-xs md:text-sm font-body text-center text-muted-foreground capitalize">
          {label}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 pt-24">
      {/* Ambient Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-[100px] animate-float" />
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-secondary/5 rounded-full blur-[100px] animate-float" style={{ animationDelay: '1.5s' }} />
      </div>

      {/* Title */}
      <div className="text-center mb-12 gentle-fade relative z-10">
        <p className="text-xl md:text-2xl font-elegant text-muted-foreground mb-4 italic">
          The clock is ticking… your birthday is almost here! Yayyyyy 🥳
        </p>
        <h1 className="text-5xl md:text-7xl font-elegant mb-2 text-foreground">
          December 3rd it issssss
        </h1>
      </div>

      {/* Countdown Display */}
      <div className="flex flex-wrap gap-4 md:gap-6 justify-center mb-12 gentle-fade relative z-10" style={{ animationDelay: '0.2s' }}>
        <TimeBlock value={timeLeft.days} label="Days" />
        <div className="flex items-center text-3xl md:text-5xl font-elegant text-muted-foreground">•</div>
        <TimeBlock value={timeLeft.hours} label="Hours" />
        <div className="flex items-center text-3xl md:text-5xl font-elegant text-muted-foreground">•</div>
        <TimeBlock value={timeLeft.minutes} label="Minutes" />
        <div className="flex items-center text-3xl md:text-5xl font-elegant text-muted-foreground">•</div>
        <TimeBlock value={timeLeft.seconds} label="Seconds" />
      </div>
    </div>
  );
};
