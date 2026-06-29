const TruckSpecifications = ({
  formData,
  setFormData,
}) => {
  const handleSpecificationChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      specifications: {
        ...prev.specifications,
        [name]: value,
      },
    }));
  };

  return (
    <div className="rounded-2xl bg-white p-8 shadow-sm">

      <h2 className="mb-6 text-2xl font-bold text-slate-800">
        Specifications
      </h2>

      <div className="grid gap-6 md:grid-cols-2">

        {/* Engine */}

        <div>
          <label className="mb-2 block font-medium">
            Engine
          </label>

          <input
            type="text"
            name="engine"
            value={formData.specifications.engine}
            onChange={handleSpecificationChange}
            placeholder="16L Turbo Diesel"
            className="w-full rounded-xl border p-3 focus:border-orange-500 focus:outline-none"
          />
        </div>

        {/* Transmission */}

        <div>
          <label className="mb-2 block font-medium">
            Transmission
          </label>

          <input
            type="text"
            name="transmission"
            value={formData.specifications.transmission}
            onChange={handleSpecificationChange}
            placeholder="Automatic"
            className="w-full rounded-xl border p-3 focus:border-orange-500 focus:outline-none"
          />
        </div>

        {/* Fuel */}

        <div>
          <label className="mb-2 block font-medium">
            Fuel Type
          </label>

          <input
            type="text"
            name="fuel"
            value={formData.specifications.fuel}
            onChange={handleSpecificationChange}
            placeholder="Diesel"
            className="w-full rounded-xl border p-3 focus:border-orange-500 focus:outline-none"
          />
        </div>

        {/* Horsepower */}

        <div>
          <label className="mb-2 block font-medium">
            Horsepower
          </label>

          <input
            type="text"
            name="horsepower"
            value={formData.specifications.horsepower}
            onChange={handleSpecificationChange}
            placeholder="750 HP"
            className="w-full rounded-xl border p-3 focus:border-orange-500 focus:outline-none"
          />
        </div>

        {/* Color */}

        <div className="md:col-span-2">
          <label className="mb-2 block font-medium">
            Color
          </label>

          <input
            type="text"
            name="color"
            value={formData.specifications.color}
            onChange={handleSpecificationChange}
            placeholder="White"
            className="w-full rounded-xl border p-3 focus:border-orange-500 focus:outline-none"
          />
        </div>

      </div>

    </div>
  );
};

export default TruckSpecifications;