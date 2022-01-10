import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_KEY);

export async function readAll (tablename, order) {
  let { data: results, error } = await supabase
    .from(tablename)
    .select('*')
    .order(order, { ascending: false });
  return results;
};
export async function read (tablename, select, eq) {
  let { data: results, error } = await supabase
    .from(tablename)
    .select(select)
    .eq(eq.column, eq.value);
  return results[0];
};
export async function upsertRow (tablename, values) {
  const { data, error } = await supabase
    .from(tablename)
    .upsert([values]);
  if (error) {
    throw error;
  }
  return data;
};
