import { createClient } from "@supabase/supabase-js";
import { Database } from "./types/database.types";

const apiUrl = import.meta.env.VITE_API_URL;
const anonKey = import.meta.env.VITE_ANON_KEY;

const supabaseClient = createClient<Database>(apiUrl, anonKey);

export default supabaseClient;
