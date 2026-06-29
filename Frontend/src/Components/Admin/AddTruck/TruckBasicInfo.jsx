const TruckBasicInfo = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="rounded-2xl bg-white p-8 shadow-sm">

      <h2 className="mb-6 text-2xl font-bold text-slate-800">
        Basic Information
      </h2>

      <div className="grid gap-6 md:grid-cols-2">

        {/* Title */}

        <div>
          <label className="mb-2 block font-medium">
            Truck Title
          </label>

          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Volvo FH16 750"
            className="w-full rounded-xl border p-3 focus:border-orange-500 focus:outline-none"
          />
        </div>

        {/* Brand */}

        <div>
          <label className="mb-2 block font-medium">
            Brand
          </label>

          <input
            type="text"
            name="brand"
            value={formData.brand}
            onChange={handleChange}
            placeholder="Volvo"
            className="w-full rounded-xl border p-3 focus:border-orange-500 focus:outline-none"
          />
        </div>

        {/* Model */}

        <div>
          <label className="mb-2 block font-medium">
            Model
          </label>

          <input
            type="text"
            name="model"
            value={formData.model}
            onChange={handleChange}
            placeholder="FH16"
            className="w-full rounded-xl border p-3 focus:border-orange-500 focus:outline-none"
          />
        </div>

        {/* Year */}

        <div>
          <label className="mb-2 block font-medium">
            Year
          </label>

          <input
            type="number"
            name="year"
            value={formData.year}
            onChange={handleChange}
            placeholder="2024"
            className="w-full rounded-xl border p-3 focus:border-orange-500 focus:outline-none"
          />
        </div>

        {/* Price */}

        <div>
          <label className="mb-2 block font-medium">
            Price (CAD)
          </label>

          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="185000"
            className="w-full rounded-xl border p-3 focus:border-orange-500 focus:outline-none"
          />
        </div>

        {/* Mileage */}

        <div>
          <label className="mb-2 block font-medium">
            Mileage
          </label>

          <input
            type="number"
            name="mileage"
            value={formData.mileage}
            onChange={handleChange}
            placeholder="25000"
            className="w-full rounded-xl border p-3 focus:border-orange-500 focus:outline-none"
          />
        </div>

        {/* Location */}

        <div>
          <label className="mb-2 block font-medium">
            Location
          </label>

          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Toronto"
            className="w-full rounded-xl border p-3 focus:border-orange-500 focus:outline-none"
          />
        </div>

        {/* Status */}

        <div>
          <label className="mb-2 block font-medium">
            Status
          </label>

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full rounded-xl border p-3 focus:border-orange-500 focus:outline-none"
          >
            <option value="available">
              Available
            </option>

            <option value="sold">
              Sold
            </option>
          </select>
        </div>

      </div>

      {/* Description */}

      <div className="mt-6">

        <label className="mb-2 block font-medium">
          Description
        </label>

        <textarea
          name="description"
          rows="6"
          value={formData.description}
          onChange={handleChange}
          placeholder="Write a detailed truck description..."
          className="w-full rounded-xl border p-3 focus:border-orange-500 focus:outline-none"
        />

      </div>

    </div>
  );
};

export default TruckBasicInfo;