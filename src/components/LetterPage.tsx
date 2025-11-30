// Letter content - USER WILL REPLACE THIS
const letterContent = `SUMUUUUUUU 🎀,

Today does not mark your birthday—yet. But it does mark another day where I sit and think - “Wow… how is this one person so effortlessly special?”

I wanted to write this before your day comes, because honestly, you deserve more than just a single birthday message. You deserve a whole build-up, a whole pre-celebration, a whole soft-launch of love. (koi aur karne wali bhi nahi hai na 😂)

Sooooo tera birthday aane se pehleee, tujhe kuch batana tha:  
you are genuinely one of the rarest and dumbest humans I have ever met.  
Not because of grand gestures or loud moments or your lame actions,  
but because of who you are when no one is looking—  
kind, patient, funny, dumb, crazy, weird  
and warm in a world that can be pretty cold.

I know I could have done more, made things fancier or more perfect — but this, whatever it is, is all heart. All yours.  
Because you hold a place in my life that is bigger than anything I can type in one letter.

You mean a lot to me in a "hey, you occupy space in my heart and it is permanent, forever and always" way.  
Like, I will fight the world for you (aur tujhe pata hai kar bhi lungi hehe).  

As your birthday gets closer, I just want you to know how deeply appreciated you are— not just for who you are to others, but who you are to me.

So here is to the days leading up to your day, to all the moments we have shared, and to all the ones waiting for us.

You are special.  
You are important.  
You are lovable.  
You matter.  
And I am endlessly grateful for you.

With way too much fondness,    
SANAAAAAAAA 🎃

P.S. I still think words fall short. And next time pakka kuch accha banaungi.
`;

export const LetterPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center p-4 pt-24 pb-20">
      
      {/* Ambient Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-[120px] animate-float" />
        <div
          className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-[120px] animate-float"
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/20 rounded-full animate-particles"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Title */}
      <div className="text-center mb-12 gentle-fade relative z-10">
        <h1 className="text-5xl md:text-7xl font-elegant mb-4 text-foreground">
          A Letter for You
        </h1>
        <p className="text-lg font-body text-muted-foreground italic">
          From the heart
        </p>
      </div>

      {/* Letter Container */}
      <div
        className="w-full max-w-4xl relative z-10 gentle-fade"
        style={{ animationDelay: "0.2s" }}
      >
        <div className="relative bg-card/40 backdrop-blur-xl border border-primary/20 rounded-3xl shadow-glow-ambient overflow-hidden">
          
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-soft-gradient opacity-20" />

          {/* Letter Content */}
          <div className="relative p-8 md:p-12">
            <div className="prose prose-invert max-w-none">
              <div className="whitespace-pre-wrap text-foreground font-handwritten leading-relaxed text-lg md:text-2xl">
                {letterContent}
              </div>
            </div>
          </div>

          {/* Decorative lines */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />
        </div>
      </div>

      
      
    </div>
  );
};