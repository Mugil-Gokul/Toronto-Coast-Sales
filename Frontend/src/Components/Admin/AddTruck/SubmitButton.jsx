const SubmitButton = ({
  loading,
  text,
}) => {
  return (
    <div className="flex justify-end">
      <button
        type="submit"
        disabled={loading}
        className="rounded-xl bg-orange-500 px-8 py-4 font-semibold text-white transition hover:bg-orange-600 disabled:opacity-60"
      >
        {loading
          ? "Please wait..."
          : text}
      </button>
    </div>
  );
};

export default SubmitButton;