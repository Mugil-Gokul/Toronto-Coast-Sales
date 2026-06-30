import { useEffect, useState } from "react";
import { getInventory } from "../services/publicTruck.service";

const useInventory = (query = {}) => {
  const [trucks, setTrucks] = useState([]);
  const [pagination, setPagination] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchInventory = async () => {
    try {
      setLoading(true);

      const response = await getInventory(query);

      setTrucks(response.trucks);
      setPagination(response.pagination);

      setError("");
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Failed to load inventory."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInventory();
  }, [JSON.stringify(query)]);

  return {
    trucks,
    pagination,
    loading,
    error,
    refresh: fetchInventory,
  };
};

export default useInventory;