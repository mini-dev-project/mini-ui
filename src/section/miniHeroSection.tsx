import MiniCarousel, { CarouselImageType } from "../ui/miniCarousel";

interface MiniHeroSectionProps {
  className?: string;
  children?: React.ReactNode;
  video?: string;
  image?: string[];
}

export default function MiniHeroSection({
  className = "",
  children,
  video,
  image,
}: MiniHeroSectionProps) {
  if (image && image.length > 1) {
    const imageData: CarouselImageType[] = image.map((imgSrc) => ({
      image: imgSrc,
      className: className,
      children: children,
    }));
    return (
      <section className={`relative w-full overflow-hidden ${className}`}>
        <MiniCarousel className={className} images={imageData} />
      </section>
    );
  }

  if (video) {
    return (
      <section className={`relative w-full overflow-hidden ${className}`}>
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={video}
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="relative z-10">{children}</div>
      </section>
    );
  }

  return;
}
