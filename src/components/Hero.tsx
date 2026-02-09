export const Hero = () => {
  return (
    <section id="home" className="relative w-full bg-black">
      {/* Video Container - Responsive Aspect Ratio */}
      <div className="relative w-full aspect-video md:h-screen md:aspect-auto">
        <iframe
          src="https://player.vimeo.com/video/1160218630?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1&background=1"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
          className="absolute top-0 left-0 w-full h-full object-cover"
          title="Company Presentation"
        ></iframe>

        {/* Optional: Dark overlay if needed for nav visibility, though user asked for "no content overlay" on the video itself */}
        {/* <div className="absolute inset-0 bg-black/10 pointer-events-none" /> */}
      </div>
    </section>
  );
};
