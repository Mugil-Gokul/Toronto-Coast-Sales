import { useEffect, useState } from "react";
import { Maximize2 } from "lucide-react";

const TruckGallery = ({ truck }) => {
  const images =
    truck?.images?.length > 0
      ? truck.images
      : [
          "https://placehold.co/1400x900/e2e8f0/64748b?text=No+Image+Available",
        ];

  const [selectedImage, setSelectedImage] = useState(images[0]);

  useEffect(() => {
    setSelectedImage(images[0]);
  }, [truck]);

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Heading */}

        <div className="mb-8 sm:mb-10">

          <span className="rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-600">
            Vehicle Gallery
          </span>

          <h2 className="mt-5 text-3xl font-black text-slate-900 sm:text-4xl">
            Explore Every Angle
          </h2>

          <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Browse detailed photos of this truck to inspect its exterior
            and overall condition before scheduling a visit.
          </p>

        </div>

        {/* Main Image */}

        <div className="group relative overflow-hidden rounded-3xl">

          <img
            src={selectedImage}
            alt={truck.title}
            className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-96 lg:h-[650px]"
          />

          {/* Overlay */}

          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

          {/* Expand Button */}

          <button
            type="button"
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white/90 backdrop-blur-md transition hover:bg-red-600 hover:text-white sm:right-6 sm:top-6 sm:h-14 sm:w-14 sm:rounded-2xl"
          >
            <Maximize2 size={20} />
          </button>

        </div>

        {/* Thumbnails */}

        {images.length > 1 && (
          <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-8 sm:gap-5 md:grid-cols-4">

            {images.map((image, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setSelectedImage(image)}
                className={`overflow-hidden rounded-2xl border-2 transition-all duration-300 sm:border-4 ${
                  selectedImage === image
                    ? "border-red-600"
                    : "border-transparent hover:border-red-300"
                }`}
              >
                <img
                  src={image}
                  alt={`${truck.title} ${index + 1}`}
                  className="h-24 w-full object-cover transition duration-300 hover:scale-110 sm:h-32 lg:h-40"
                />
              </button>
            ))}

          </div>
        )}

      </div>
    </section>
  );
};

export default TruckGallery;