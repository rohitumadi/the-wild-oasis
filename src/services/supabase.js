import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://zhuugbftktetyidomcpn.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpodXVnYmZ0a3RldHlpZG9tY3BuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDYxNzYyMDMsImV4cCI6MjAyMTc1MjIwM30.lM-0Hy65cQfT9Z35dgkwcv3c_utI_jcrPeylzCuM038";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
