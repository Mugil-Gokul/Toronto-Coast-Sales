import { useEffect, useState } from "react";

import {
  getDashboardStats
} from "../services/dashboard.service";


const useDashboard = () => {

  const [stats,setStats] = useState(null);

  const [recentTrucks,setRecentTrucks] =
    useState([]);

  const [loading,setLoading] =
    useState(true);

  const [error,setError] =
    useState("");


  const fetchDashboard = async () => {

    try {

      setLoading(true);


      const response =
        await getDashboardStats();


      setStats(
        response.data.stats
      );


      setRecentTrucks(
        response.data.recentTrucks
      );


      setError("");


    } catch(err){

      setError(
        err.response?.data?.message ||
        "Failed to load dashboard"
      );

    } finally {

      setLoading(false);

    }

  };


  useEffect(()=>{

    fetchDashboard();

  },[]);



  return {
    stats,
    recentTrucks,
    loading,
    error,
    refresh: fetchDashboard,
  };

};


export default useDashboard;