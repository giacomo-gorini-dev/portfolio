import { useQuery } from "@tanstack/react-query";
import { supabase } from "../services/supabaseClient";

async function fetchPosts() {
  try {
    const { data, error } = await supabase
      .from("Posts")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) throw error;

    return data;
  } catch (err) {
    console.error("Fetch Posts Error: ", err.message || err);
    throw err;
  }
}

export default function usePosts() {
  const {
    data: posts,
    isLoading,
    error,
    refetch,
  } = useQuery({ queryKey: ["Posts"], queryFn: fetchPosts });
  return {
    posts,
    isLoading,
    error,
    refetch,
  };
}
