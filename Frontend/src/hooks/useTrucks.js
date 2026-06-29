import { useState, useEffect } from "react";
import { getTrucks } from "../services/truck.service";

const useTrucks = (query = {}) => {
  const [trucks, setTrucks] = useState([]);
  const [pagination, setPagination] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchTrucks = async () => {
    try {
      setLoading(true);

      const response = await getTrucks(query);

      setTrucks(response.trucks);
      setPagination(response.pagination);

      setError("");
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Something went wrong."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTrucks();
  }, [JSON.stringify(query)]);

  return {
    trucks,
    pagination,
    loading,
    error,
    refresh: fetchTrucks,
  };
};

export default useTrucks;