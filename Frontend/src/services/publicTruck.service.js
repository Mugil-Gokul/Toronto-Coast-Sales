import Api from "../Components/Api";

export const getInventory = async (params = {}) => {
  const response = await Api.get("/trucks", {
    params,
  });

  return response.data;
};

export const getTruckDetails = async (id) => {
  const response = await Api.get(`/trucks/${id}`);

  return response.data;
};