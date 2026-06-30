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
    <section className="bg-white py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}

        <div className="mb-10">

          <span className="rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-600">
            Vehicle Gallery
          </span>

          <h2 className="mt-5 text-4xl font-black text-slate-900">
            Explore Every Angle
          </h2>

          <p className="mt-4 max-w-3xl text-lg text-slate-600">
            Browse detailed photos of this truck to inspect its exterior
            and overall condition before scheduling a visit.
          </p>

        </div>

        {/* Main Image */}

        <div className="group relative overflow-hidden rounded-[32px]">

          <img
            src={selectedImage}
            alt={truck.title}
            className="h-[650px] w-full object-cover transition duration-500 group-hover:scale-105"
          />

          {/* Overlay */}

          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

          {/* Expand Button */}

          <button
            type="button"
            className="absolute right-6 top-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/90 backdrop-blur-md transition hover:bg-red-600 hover:text-white"
          >
            <Maximize2 size={22} />
          </button>

        </div>

        {/* Thumbnails */}

        {images.length > 1 && (
          <div className="mt-8 grid grid-cols-2 gap-5 md:grid-cols-4">

            {images.map((image, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setSelectedImage(image)}
                className={`overflow-hidden rounded-2xl border-4 transition-all duration-300 ${
                  selectedImage === image
                    ? "border-red-600"
                    : "border-transparent hover:border-red-300"
                }`}
              >
                <img
                  src={image}
                  alt={`${truck.title} ${index + 1}`}
                  className="h-40 w-full object-cover transition duration-300 hover:scale-110"
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