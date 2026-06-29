import Api from "../Components/Api";

// Get all trucks
export const getTrucks = async (params = {}) => {
  const response = await Api.get("/trucks", {
    params,
  });

  return response.data;
};

// Get one truck
export const getTruck = async (id) => {
  const response = await Api.get(`/trucks/${id}`);

  return response.data;
};

// Create truck
export const createTruck = async (truckData) => {
  const response = await Api.post(
    "/trucks",
    truckData
  );

  return response.data;
};

// Update truck
export const updateTruck = async (
  id,
  truckData
) => {
  const response = await Api.put(
    `/trucks/${id}`,
    truckData
  );

  return response.data;
};

// Delete truck
export const deleteTruck = async (id) => {
  const response = await Api.delete(
    `/trucks/${id}`
  );

  return response.data;
};