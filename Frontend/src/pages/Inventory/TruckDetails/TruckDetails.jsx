import { useParams } from "react-router-dom";

import useTruckDetails from "../../../hooks/useTruckDetails";

import TruckHero from "./TruckHero";
import TruckGallery from "./TruckGallery";
import TruckOverview from "./TruckOverview";
import TruckSpecifications from "./TruckSpecifications";
import TruckFeatures from "./TruckFeatures";
import TruckDescription from "./TruckDescription";
import RelatedInventory from "./RelatedInventory";

import GetInTouch from "../../../Components/GetInTouch";

const TruckDetails = () => {
  const { id } = useParams();

  const {
    truck,
    loading,
    error,
  } = useTruckDetails(id);

  if (loading) {
    return (
      <section className="py-32 text-center">
        <h2 className="text-2xl font-semibold">
          Loading truck...
        </h2>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-32 text-center">
        <h2 className="text-2xl text-red-600">
          {error}
        </h2>
      </section>
    );
  }

  if (!truck) {
    return (
      <section className="py-32 text-center">
        <h2 className="text-2xl">
          Truck not found.
        </h2>
      </section>
    );
  }

  return (
    <>
      <TruckHero truck={truck} />

      <TruckGallery truck={truck} />

      <TruckOverview truck={truck} />

      <TruckSpecifications truck={truck} />

      <TruckFeatures truck={truck} />

      <TruckDescription truck={truck} />

      <RelatedInventory truck={truck} />

      <GetInTouch />
    </>
  );
};

export default TruckDetails;