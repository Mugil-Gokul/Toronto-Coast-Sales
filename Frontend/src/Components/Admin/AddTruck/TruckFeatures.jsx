import { useState } from "react";
import { Plus, X } from "lucide-react";

const TruckFeatures = ({
  formData,
  setFormData,
}) => {
  const [feature, setFeature] = useState("");

  const addFeature = () => {
    const value = feature.trim();

    if (!value) return;

    // Prevent duplicates
    if (formData.features.includes(value)) {
      setFeature("");
      return;
    }

    setFormData((prev) => ({
      ...prev,
      features: [...prev.features, value],
    }));

    setFeature("");
  };

  const removeFeature = (index) => {
    setFormData((prev) => ({
      ...prev,
      features: prev.features.filter(
        (_, i) => i !== index
      ),
    }));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addFeature();
    }
  };

  return (
    <div className="rounded-2xl bg-white p-8 shadow-sm">

      <h2 className="mb-6 text-2xl font-bold text-slate-800">
        Truck Features
      </h2>

      {/* Input */}

      <div className="flex gap-3">

        <input
          type="text"
          value={feature}
          onChange={(e) =>
            setFeature(e.target.value)
          }
          onKeyDown={handleKeyDown}
          placeholder="Add feature..."
          className="flex-1 rounded-xl border p-3 focus:border-orange-500 focus:outline-none"
        />

        <button
          type="button"
          onClick={addFeature}
          className="flex items-center gap-2 rounded-xl bg-orange-500 px-6 text-white hover:bg-orange-600"
        >
          <Plus size={18} />

          Add
        </button>

      </div>

      {/* Feature List */}

      {formData.features.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-3">

          {formData.features.map(
            (item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2"
              >
                <span>{item}</span>

                <button
                  type="button"
                  onClick={() =>
                    removeFeature(index)
                  }
                  className="text-red-500 hover:text-red-700"
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

export default TruckFeatures;