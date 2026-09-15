import { useEffect, useState } from "react";
import type { CarouselApi } from "@/components/ui/carousel";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

type Testimonial = {
  quote: string;
  author: string;
  role: string;
};

export function TestimonialCarousel({ testimonials }: { testimonials: Testimonial[] }) {
  const [api, setApi] = useState<CarouselApi>();
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!api) return;
    setSelected(api.selectedScrollSnap());
    api.on("select", () => setSelected(api.selectedScrollSnap()));
  }, [api]);

  return (
    <div>
      <Carousel setApi={setApi} opts={{ align: "start", loop: true }}>
        <CarouselContent>
          {testimonials.map((t) => (
            <CarouselItem key={t.author} className="sm:basis-1/2 lg:basis-1/3">
              <figure className="flex h-full flex-col justify-between border-t border-border pt-6">
                <blockquote className="font-display text-lg italic leading-snug text-foreground">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 text-sm">
                  <span className="font-medium text-foreground">{t.author}</span>
                  <span className="block text-muted-foreground">{t.role}</span>
                </figcaption>
              </figure>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="mt-8 flex items-center gap-2">
        {testimonials.map((t, i) => (
          <button
            key={t.author}
            type="button"
            aria-label={`Ver depoimento ${i + 1}`}
            onClick={() => api?.scrollTo(i)}
            className={`h-1.5 rounded-full transition-all ${
              i === selected ? "w-6 bg-primary" : "w-1.5 bg-border"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
