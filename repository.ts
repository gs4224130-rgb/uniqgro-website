import { demoPosts, type ForumPost } from '../../data/forum'
import { isSupabaseConfigured } from '../../config/env'
import { supabase } from './client'

export async function listForumPosts(): Promise<ForumPost[]> {
  if (!isSupabaseConfigured || !supabase) return demoPosts
  const { data, error } = await supabase.from('forum_posts').select('id,title,category,stage,body,created_at,tags,profiles(display_name)').eq('moderation_status','active').order('created_at',{ascending:false})
  if (error) throw error
  return (data ?? []).map((row:any)=>({ id:row.id, title:row.title, category:row.category, stage:row.stage ?? '', excerpt:(row.body ?? '').slice(0,180), author:row.profiles?.display_name ?? 'Founder', comments:0, created:row.created_at, tags:row.tags ?? [] }))
}

export async function submitFounderApplication(payload: unknown) {
  if (!isSupabaseConfigured || !supabase) return { demo:true, id:'demo-application' }
  const { data, error } = await supabase.from('founder_applications').insert({ payload }).select('id').single()
  if (error) throw error
  return { demo:false, id:data.id }
}
