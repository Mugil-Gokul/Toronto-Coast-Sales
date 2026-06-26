import React, { useState } from "react";
import { Maximize2 } from "lucide-react";

const truckImages = [
  "https://images.unsplash.com/photo-1501706362039-c6e80948f11f?w=1400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?w=1400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=1400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=1400&auto=format&fit=crop",
];

const TruckGallery = () => {
  const [selectedImage, setSelectedImage] = useState(truckImages[0]);

  return (
    <section className="bg-white py-20">
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
            View high-quality images of the truck before scheduling your
            visit or requesting additional information.
          </p>
        </div>

        {/* Main Image */}
        <div className="group relative overflow-hidden rounded-[32px]">
          <img
            src={selectedImage}
            alt="Truck"
            className="h-[650px] w-full object-cover transition duration-500 group-hover:scale-105"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

          {/* Expand Button */}
          <button className="absolute right-6 top-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/90 backdrop-blur-md transition hover:bg-red-600 hover:text-white">
            <Maximize2 size={22} />
          </button>
        </div>

        {/* Thumbnails */}
        <div className="mt-8 grid grid-cols-2 gap-5 md:grid-cols-4">
          {truckImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(image)}
              className={`overflow-hidden rounded-2xl border-4 transition-all duration-300 ${
                selectedImage === image
                  ? "border-red-600"
                  : "border-transparent hover:border-red-300"
              }`}
            >
              <img
                src={image}
                alt={`Truck ${index + 1}`}
                className="h-40 w-full object-cover transition duration-300 hover:scale-110"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TruckGallery;