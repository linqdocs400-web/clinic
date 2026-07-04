import Inside1 from "../../assets/Inside1.jpeg";
import Inside2 from "../../assets/Inside2.jpeg";
import Inside3 from "../../assets/Inside3.jpeg";
import Inside4 from "../../assets/Inside4.jpeg";
import Inside5 from "../../assets/Inside5.jpeg";
import Inside6 from "../../assets/Inside6.jpeg";

const GALLERY = [Inside1, Inside2, Inside3, Inside4, Inside5, Inside6];

export function Gallery() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10 text-center">
        <div className="font-script text-2xl text-ink-soft">our space</div>

        <h2 className="font-display text-4xl sm:text-5xl text-ink mt-2">Inside the clinic.</h2>

        <div className="mt-12 lg:grid lg:grid-cols-4 gap-3 sm:gap-4 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex lg:grid lg:grid-cols-4 gap-3 sm:gap-4 min-w-max lg:min-w-0">
            {GALLERY.map((src, i) => (
              <div
                key={i}
                className={`overflow-hidden bg-ink/10 shrink-0 ${
                  i === 2
                    ? "row-span-2 aspect-[3/4] w-[200px] sm:w-[250px]"
                    : i === 5
                      ? "col-span-2 aspect-[3/2] w-[400px] sm:w-[500px]"
                      : "aspect-square w-[200px] sm:w-[250px]"
                }`}
              >
                <img
                  src={src}
                  alt={`Clinic Interior ${i + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover hover:scale-105 transition duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
