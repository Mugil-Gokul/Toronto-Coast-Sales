import Api from "../Components/Api";

export const getInventory = async (params) => {
  const response = await Api.get("/trucks", {
    params,
  });

  return response.data;
};