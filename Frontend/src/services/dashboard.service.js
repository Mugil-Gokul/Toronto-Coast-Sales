import Api from "../Components/Api";


export const getDashboardStats = async () => {

  const response = await Api.get(
    "/dashboard/stats"
  );

  return response.data;

};