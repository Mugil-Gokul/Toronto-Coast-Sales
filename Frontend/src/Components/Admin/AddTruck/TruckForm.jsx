import TruckBasicInfo from "./TruckBasicInfo";
import TruckSpecifications from "./TruckSpecifications";
import TruckFeatures from "./TruckFeatures";
import TruckImages from "./TruckImages";
import SubmitButton from "./SubmitButton";

const TruckForm = ({
  formData,
  setFormData,
  handleSubmit,
  loading,
  error,
  submitText,
}) => {
  return (
    <>
      {error && (
        <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-red-600">
          {error}
        </div>
      )}

      <form
        className="space-y-8"
        onSubmit={handleSubmit}
      >
        <TruckBasicInfo
          formData={formData}
          setFormData={setFormData}
        />

        <TruckSpecifications
          formData={formData}
          setFormData={setFormData}
        />

        <TruckFeatures
          formData={formData}
          setFormData={setFormData}
        />

        <TruckImages
          formData={formData}
          setFormData={setFormData}
        />

        <SubmitButton
          loading={loading}
          text={submitText}
        />
      </form>
    </>
  );
};

export default TruckForm;