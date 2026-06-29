import { Upload, X } from "lucide-react";

const TruckImages = ({
  formData,
  setFormData,
}) => {
  const handleImages = (e) => {
    const files = Array.from(e.target.files);

    if (!files.length) return;

    setFormData((prev) => ({
      ...prev,
      images: [...prev.images, ...files],
    }));
  };

  const removeImage = (index) => {
    setFormData((prev) => ({
      ...prev,
      images: prev.images.filter(
        (_, i) => i !== index
      ),
    }));
  };

  return (
    <div className="rounded-2xl bg-white p-8 shadow-sm">

      <h2 className="mb-6 text-2xl font-bold text-slate-800">
        Truck Images
      </h2>

      {/* Upload */}

      <label className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 p-12 transition hover:border-orange-500 hover:bg-orange-50">

        <Upload
          size={42}
          className="mb-4 text-orange-500"
        />

        <p className="text-lg font-semibold">
          Click to upload images
        </p>

        <p className="mt-2 text-sm text-slate-500">
          JPG, PNG or WEBP
        </p>

        <input
          type="file"
          multiple
          accept="image/*"
          onChange={handleImages}
          className="hidden"
        />

      </label>

      {/* Preview */}

      {formData.images.length > 0 && (
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">

          {formData.images.map(
            (image, index) => (
              <div
                key={index}
                className="relative"
              >
                <img
                  src={URL.createObjectURL(image)}
                  alt=""
                  className="h-40 w-full rounded-xl object-cover"
                />

                <button
                  type="button"
                  onClick={() =>
                    removeImage(index)
                  }
                  className="absolute right-2 top-2 rounded-full bg-red-600 p-2 text-white"
                >
                  <X size={16} />
                </button>

              </div>
            )
          )}

        </div>
      )}

    </div>
  );
};

export default TruckImages;