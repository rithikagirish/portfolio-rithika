import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Hls from "hls.js";
import { ChevronRight, Download, ArrowDown } from "lucide-react";
import WaveText from "@/components/ui/wave-text";
import resumeAsset from "@/assets/rithika-resume.pdf.asset.json";

const VIDEO_SRC =
  "https://customer-cbeadsgr09pnsezs.cloudflarestream.com/74cb72d57c6a6d6d7807693d02e6707b/manifest/video.m3u8";

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;

    if (Hls.isSupported()) {
      const hls = new Hls({
        enableWorker: true,
        lowLatencyMode: true,
      });

      hls.loadSource(VIDEO_SRC);
      hls.attachMedia(video);

      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(() => {
          // Autoplay failed silently
        });
      });

      hls.on(Hls.Events.ERROR, (_event, data) => {
        if (data.fatal) {
          switch (data.type) {
            case Hls.ErrorTypes.NETWORK_ERROR:
              hls.startLoad();
              break;
            case Hls.ErrorTypes.MEDIA_ERROR:
              hls.recoverMediaError();
              break;
            default:
              hls.destroy();
              break;
          }
        }
      });

      return () => {
        hls.destroy();
      };
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = VIDEO_SRC;
      video.addEventListener("loadedmetadata", () => {
        video.play().catch(() => {
          // Autoplay failed silently
        });
      });
    }
  }, []);

  const scrollToAbout = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.querySelector("#about");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative flex flex-col items-center justify-center px-4 md:px-8 pt-32 md:pt-40 pb-16 md:pb-24 overflow-hidden min-h-[600px]">
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 0, filter: "hue-rotate(220deg) saturate(1.4) brightness(0.35)" }}
      />

      {/* Dark overlay */}
      <div
        className="absolute inset-0 bg-background/70"
        style={{ zIndex: 1 }}
      />

      {/* Indigo gradient overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-background pointer-events-none"
        style={{ zIndex: 1 }}
      />

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent"
        style={{ zIndex: 1 }}
      />

      {/* Content */}
      <div className="relative flex flex-col items-center text-center" style={{ zIndex: 2 }}>
        {/* Announcement Badge */}
        <div className="inline-flex items-center gap-2 pl-4 pr-2 py-2 mb-8 text-sm text-muted-foreground bg-secondary/50 border border-border rounded-full font-heading">
          <span>Available for internships & full-time roles</span>
          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-secondary">
            <ChevronRight className="w-4 h-4" />
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tighter mb-6 font-heading">
          <WaveText text="G. Rithika" />
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-4">
          <WaveText text="AI/ML Engineer & Full-Stack Developer" staggerDelay={0.015} />
        </p>

        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mb-10">
          CS Engineering student with hands-on experience building LLM-powered systems, 
          deepfake detection pipelines, and production-ready web applications.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-12">
          <a
            href="mailto:rithika.girish25@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-primary hover:bg-primary/90 rounded-xl transition-colors font-heading"
          >
            Get in Touch
            <ChevronRight className="w-4 h-4" />
          </a>
          <a
            href={resumeAsset.url}
            download="G-Rithika-Resume.pdf"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-foreground bg-secondary hover:bg-secondary/80 border border-border rounded-xl transition-colors font-heading"
          >
            <Download className="w-4 h-4" />
            Download Resume
          </a>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToAbout}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Scroll to about section"
        >
          <span className="text-xs font-heading uppercase tracking-widest">Explore</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
