import { createClient } from "@supabase/supabase-js";

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

interface SupabaseEq {
  column: string | number | symbol,
  value: string
}
exports.readAll = async function (tablename: string) {
  let { data: results, error } = await supabase
    .from(tablename)
    .select('*')
  return results
};
exports.read = async function (tablename: string, eq: SupabaseEq) {
  let { data: results, error } = await supabase
    .from(tablename)
    .select('*')
    .eq(eq.column, eq.value)
  return results
};
exports.upsertRow = async function (tablename: string, values: Object) {
  const { data, error } = await supabase
    .from(tablename)
    .upsert([values])
  return data
};
