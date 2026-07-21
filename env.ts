export const env = {
  supabaseUrl: import.meta.env.VITE_SUPABASE_URL || '',
  supabaseAnonKey: import.meta.env.VITE_SUPABASE_ANON_KEY || '',
  siteUrl: import.meta.env.VITE_SITE_URL || 'https://www.uniqgro.com',
  contactEmail: import.meta.env.VITE_CONTACT_EMAIL || '',
  whatsapp: import.meta.env.VITE_WHATSAPP_NUMBER || '',
  instagram: import.meta.env.VITE_INSTAGRAM_URL || '',
  linkedin: import.meta.env.VITE_LINKEDIN_URL || '',
}
export const isSupabaseConfigured = Boolean(env.supabaseUrl && env.supabaseAnonKey)
