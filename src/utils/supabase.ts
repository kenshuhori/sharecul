import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_KEY);

interface SupabaseEq {
  column: string | number | symbol,
  value: string
}
export async function readAll (tablename: string) {
  let { data: results, error } = await supabase
    .from(tablename)
    .select('*')
  return results
};
export async function read (tablename: string, eq: SupabaseEq) {
  let { data: results, error } = await supabase
    .from(tablename)
    .select('*')
    .eq(eq.column, eq.value)
  return results
};
export async function upsertRow (tablename: string, values: Object) {
  const { data, error } = await supabase
    .from(tablename)
    .upsert([values])
  return data
};
