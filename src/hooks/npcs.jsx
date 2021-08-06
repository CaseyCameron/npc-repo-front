import { useState, useEffect } from "react";
import { getAllNpcs } from "../utils/npcs-api";

export const useNpcs = () => {
  const [loading, setLoading] = useState(true);
  const [npcs, setNpcs] = useState([]);

  useEffect(() => {
    getAllNpcs()
      .then(setNpcs)
      .finally(() => setLoading(false));
  }, []);
  return { loading, npcs }
}