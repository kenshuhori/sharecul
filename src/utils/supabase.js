import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_KEY);

export async function readAll (tablename) {
  let { data: results, error } = await supabase
    .from(tablename)
    .select('*');
  return results;
};
export async function read (tablename, eq) {
  let { data: results, error } = await supabase
    .from(tablename)
    .select('*')
    .eq(eq.column, eq.value);
  return results;
};
export async function upsertRow (tablename, values) {
  const { data, error } = await supabase
    .from(tablename)
    .upsert([values]);
  return data;
};
