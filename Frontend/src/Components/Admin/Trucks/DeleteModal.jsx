import { AlertTriangle, X } from "lucide-react";

const DeleteModal = ({
  open,
  truck,
  onClose,
  onConfirm,
  loading,
}) => {
  if (!open) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md rounded-2xl bg-white shadow-2xl"
      >
        {/* Header */}

        <div className="flex items-center justify-between border-b px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-red-100 p-2">
              <AlertTriangle
                size={24}
                className="text-red-600"
              />
            </div>

            <h2 className="text-xl font-bold text-slate-800">
              Delete Truck
            </h2>
          </div>

          <button
            onClick={onClose}
            className="rounded-lg p-2 transition hover:bg-slate-100"
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}

        <div className="px-6 py-6">
          <p className="text-slate-600">
            Are you sure you want to permanently delete
          </p>

          <h3 className="mt-3 text-lg font-semibold text-red-600">
            {truck?.title}
          </h3>

          <p className="mt-5 rounded-lg border border-red-100 bg-red-50 p-3 text-sm text-red-600">
            This action cannot be undone.
          </p>
        </div>

        {/* Footer */}

        <div className="flex justify-end gap-3 border-t px-6 py-5">
          <button
            onClick={onClose}
            disabled={loading}
            className="rounded-lg border px-5 py-2 transition hover:bg-slate-100 disabled:opacity-50"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            disabled={loading}
            className="rounded-lg bg-red-600 px-5 py-2 font-semibold text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "Deleting..." : "Delete Truck"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;