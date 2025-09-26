import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollingGallerySectionProps {
  title?: string;
  images: string[][];
}

const ScrollingGallerySection: React.FC<ScrollingGallerySectionProps> = ({
  title = "Digitalización en América Latina",
  images,
}) => {
  useEffect(() => {
    const additionalY = { val: 0 };
    let additionalYAnim: gsap.core.Tween | null = null;
    let offset = 0;
    const cols = gsap.utils.toArray<HTMLElement>(".col");

    cols.forEach((col, i) => {
      const items = Array.from(col.querySelectorAll(".image"));
 
      // duplicar imágenes
      items.forEach((image) => {
        const clone = image.cloneNode(true);
        col.appendChild(clone);
      });

      // animación infinita
      items.forEach((item) => {
        const columnHeight = (item as HTMLElement).parentElement!.clientHeight;
        const direction = i % 2 !== 0 ? "+=" : "-=";

        gsap.to(item, {
          y: direction + columnHeight / 2,
          duration: 20,
          repeat: -1,
          ease: "none",
          modifiers: {
            y: gsap.utils.unitize((y) => {
              if (direction === "+=") {
                offset += additionalY.val;
                y = (parseFloat(y) - offset) % (columnHeight * 0.5);
              } else {
                offset += additionalY.val;
                y = (parseFloat(y) + offset) % -Number(columnHeight * 0.5);
              }
              return y;
            }),
          },
        });
      });
    });

    const trigger = ScrollTrigger.create({
      trigger: "section",
      start: "top 50%",
      end: "bottom 50%",
      onUpdate: (self) => {
        const velocity = self.getVelocity();
        if (velocity > 0) {
          if (additionalYAnim) additionalYAnim.kill();
          additionalY.val = -velocity / 2000;
          additionalYAnim = gsap.to(additionalY, { val: 0 });
        }
        if (velocity < 0) {
          if (additionalYAnim) additionalYAnim.kill();
          additionalY.val = -velocity / 3000;
          additionalYAnim = gsap.to(additionalY, { val: 0 });
        }
      },
    });

    return () => {
      trigger.kill();
    };
  }, []);

  return (
    <section className="relative min-h-[500vh] flex flex-col justify-center bg-[#eee] overflow-hidden">
      <h1 className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center text-white text-4xl font-extrabold mix-blend-difference pointer-events-none z-50 text-center">
        {title}
      </h1>
      <div className="gallery flex w-full h-full fixed top-0 left-1/2 -translate-x-1/2">
        {images.map((colImages, colIndex) => (
          <div key={colIndex} className="col flex flex-col flex-1">
            {colImages.map((src, i) => (
              <div key={i} className="image p-4 filter saturate-0 hover:saturate-100">
                <img
                  src={src}
                  alt={`gallery-${colIndex}-${i}`}
                  className="w-full shadow-lg transition duration-300 ease-out"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ScrollingGallerySection;
