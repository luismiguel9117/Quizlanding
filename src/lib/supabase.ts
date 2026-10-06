import { createClient } from '@supabase/supabase-js';

const rawUrl = 
  (import.meta as any).env?.VITE_SUPABASE_URL || 
  (import.meta as any).env?.NEXT_PUBLIC_SUPABASE_URL || 
  '';

const rawKey = 
  (import.meta as any).env?.VITE_SUPABASE_ANON_KEY || 
  (import.meta as any).env?.NEXT_PUBLIC_SUPABASE_ANON_KEY || 
  (import.meta as any).env?.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || 
  '';

// Detect whether valid Supabase credentials were provided
export const isSupabaseConfigured = Boolean(
  rawUrl && 
  rawKey && 
  rawUrl.startsWith('http') && 
  !rawUrl.includes('placeholder')
);

if (!isSupabaseConfigured) {
  console.warn(
    'Supabase URL or Anon Key is missing or invalid in environment variables. Running with safe fallback mode (localStorage).'
  );
}

// Fallback dummy URL and Key so createClient does not throw on module initialization
const supabaseUrl = isSupabaseConfigured ? rawUrl : 'https://placeholder.supabase.co';
const supabaseAnonKey = isSupabaseConfigured ? rawKey : 'placeholder-anon-key-safe-fallback';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

