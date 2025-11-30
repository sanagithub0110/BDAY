import { useState } from "react";
import { Play } from "lucide-react";

// Placeholder video URLs - USER WILL REPLACE THESE
const videos = [
  { id: 1, title: "What mesmerizing meant to me", url: "/song.mp4", thumbnail: "/thumb1.jpg"},
  { id: 2, title: "What peace meant to me", url: "/kanmani.mp4", thumbnail: "/thumb2.jpg" },
  { id: 3, title: "Can't get enough of this", url:"/dooron.mp4", thumbnail: "/thumb3.jpg" },
  { id: 4, title: "Favorite Singer", url: "/yay.mp4", thumbnail: "/thumb4.jpg" },
];

export const VideoPlayer = () => {
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 pt-24">
      {/* Ambient Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-[120px] animate-float" style={{ animationDelay: '1s' }} />
      </div>

      {/* Title */}
      <div className="text-center mb-12 gentle-fade relative z-10">
        <h1 className="text-5xl md:text-7xl font-elegant mb-4 text-foreground">
          Your Voice. MY SUKOON.
        </h1>
        <p className="text-lg font-body text-muted-foreground italic">
          Your voice has this chill that just settles everything.
        </p>
      </div>

      {/* Video Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl mb-8 gentle-fade relative z-10" style={{ animationDelay: '0.2s' }}>
        {videos.map((video, index) => (
          <div
            key={video.id}
            className="group relative bg-card/30 backdrop-blur-sm border border-primary/20 rounded-2xl overflow-hidden hover:shadow-glow-ambient transition-all duration-300 gentle-fade"
            style={{ animationDelay: `${0.1 * index}s` }}
          >
            {/* Thumbnail */}
            <div className="relative aspect-video overflow-hidden">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
              
              {/* Play Button Overlay */}
              <button
                onClick={() => setSelectedVideo(video.id)}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-16 h-16 bg-primary/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-glow-soft-blue group-hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 text-white ml-1" fill="white" />
                </div>
              </button>
            </div>

            {/* Video Info */}
            <div className="p-5">
              <h3 className="text-xl font-elegant text-foreground mb-1">{video.title}</h3>
              <div className="text-sm text-muted-foreground font-body">
                Click!
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Video Player Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-background/95 backdrop-blur-lg z-50 flex items-center justify-center p-4">
          <div className="w-full max-w-4xl gentle-zoom">
            <div className="bg-card/50 backdrop-blur-md border border-primary/20 rounded-2xl overflow-hidden shadow-glow-ambient">
              {/* Header */}
              <div className="bg-card/70 border-b border-primary/20 p-4 flex items-center justify-between">
                <h3 className="text-xl font-elegant">
                  {videos.find(v => v.id === selectedVideo)?.title}
                </h3>
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="px-4 py-2 bg-secondary/80 hover:bg-secondary text-white rounded-full font-body text-sm transition-all"
                >
                  Close
                </button>
              </div>

              {/* Video Container */}
              <div className="aspect-video bg-black flex items-center justify-center">
                {videos.find(v => v.id === selectedVideo)?.url ? (
                  <iframe
                    src={videos.find(v => v.id === selectedVideo)?.url}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <div className="text-center p-8">
                    <div className="text-6xl mb-4">📹</div>
                    <p className="text-lg font-body text-muted-foreground mb-2">
                      Video URL not set
                    </p>
                    <p className="text-sm text-muted-foreground/70">
                      Edit src/components/VideoPlayer.tsx to add video URLs
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
