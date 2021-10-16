declare namespace NodeJS {
  interface ProcessEnv {
    readonly SUPABASE_URL: string;
    readonly SUPABASE_KEY: string;
  }
}
