import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
console.log('Anon key', anonKey)
const supabase = createClient('https://ijqoznneorbxabhkcgzl.supabase.co', anonKey)

export { supabase }
