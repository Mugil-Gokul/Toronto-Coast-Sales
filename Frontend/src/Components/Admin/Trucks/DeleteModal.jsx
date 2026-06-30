import { AlertTriangle, X } from "lucide-react";

const DeleteModal = ({ open, truck, onClose, onConfirm, loading }) => {
  if (!open) return null;

  return (
    <div
      onClick={onClose}
      className="
      fixed
      inset-0
      z-50
      flex
      items-center
      justify-center
      bg-black/50
      p-4
      backdrop-blur-sm
      "
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="
        w-full
        max-w-md
        overflow-hidden
        rounded-3xl
        bg-white
        shadow-2xl
        animate-in
        fade-in
        zoom-in-95
        duration-200
        "
      >
        {/* Header */}

        <div
          className="
          flex
          items-center
          justify-between
          border-b
          border-slate-100
          px-5
          py-5
          sm:px-6
          "
        >
          <div className="flex items-center gap-3">
            <div
              className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              bg-red-100
              "
            >
              <AlertTriangle size={24} className="text-red-600" />
            </div>

            <h2
              className="
              text-lg
              sm:text-xl
              font-bold
              text-slate-800
              "
            >
              Delete Truck
            </h2>
          </div>

          <button
            onClick={onClose}
            disabled={loading}
            className="
            rounded-xl
            p-2
            text-slate-500
            transition
            hover:bg-slate-100
            disabled:opacity-50
            "
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}

        <div className="px-5 py-6 sm:px-6">
          <p
            className="
            text-sm
            text-slate-600
            "
          >
            Are you sure you want to permanently delete this truck?
          </p>

          <div
            className="
            mt-4
            rounded-xl
            bg-slate-50
            p-4
            "
          >
            <h3
              className="
              font-semibold
              text-slate-800
              "
            >
              {truck?.title}
            </h3>

            <p
              className="
              mt-1
              text-sm
              text-slate-500
              "
            >
              {truck?.brand} {truck?.year}
            </p>
          </div>

          <div
            className="
            mt-5
            flex
            items-start
            gap-2
            rounded-xl
            border
            border-red-100
            bg-red-50
            p-4
            text-sm
            text-red-600
            "
          >
            <AlertTriangle size={18} />

            <span>This action cannot be undone.</span>
          </div>
        </div>

        {/* Footer */}

        <div
          className="
          flex
          flex-col-reverse
          gap-3
          border-t
          border-slate-100
          px-5
          py-5
          sm:flex-row
          sm:justify-end
          sm:px-6
          "
        >
          <button
            onClick={onClose}
            disabled={loading}
            className="
            rounded-xl
            border
            px-5
            py-2.5
            font-medium
            text-slate-700
            transition
            hover:bg-slate-100
            disabled:opacity-50
            "
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            disabled={loading}
            className="
            rounded-xl
            bg-red-600
            px-5
            py-2.5
            font-semibold
            text-white
            transition
            hover:bg-red-700
            disabled:cursor-not-allowed
            disabled:opacity-50
            "
          >
            {loading ? "Deleting..." : "Delete Truck"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
