import { useQuery } from "@tanstack/react-query";
import { supabase } from "../services/supabaseClient";

async function fetchSkills() {
  try {
    const { data, error } = await supabase
      .from("Skills")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) throw error;

    return data;
  } catch (err) {
    console.error("Fetch Posts Error: ", err.message || err);
    throw err;
  }
}

export default function useSkills() {
  const {
    data: posts,
    isLoading,
    error,
    refetch,
  } = useQuery({ queryKey: ["Skills"], queryFn: fetchSkills, staleTime: 1000 * 60 * 5,});
  return {
    posts,
    isLoading,
    error,
    refetch,
  };
}
