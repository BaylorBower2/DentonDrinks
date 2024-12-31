import { createClient } from '@supabase/supabase-js';
import type { Database } from '../database.types';
import { ENV } from '../config/env';

// Create Supabase client with proper configuration
export const supabase = createClient<Database>(
  ENV.PUBLIC_SUPABASE_URL,
  ENV.PUBLIC_SUPABASE_ANON_KEY,
  {
    auth: {
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: false
    },
    global: {
      headers: {
        'X-Client-Info': 'supabase-js/2.39.8'
      }
    }
  }
);

// Test connection and configuration
export async function testSupabaseConnection() {
  try {
    const { data, error } = await supabase
      .from('venues')
      .select('count')
      .limit(1);

    if (error) throw error;
    return { success: true, data };
  } catch (error) {
    console.error('Supabase connection test failed:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error' 
    };
  }
}