create extension if not exists pgcrypto;

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  username text unique not null check (username ~ '^[a-z0-9_-]{3,32}$'),
  display_name text not null,
  avatar_url text,
  city text,
  state text,
  founder_role text,
  company_name text,
  startup_stage text,
  industry text,
  company_description text,
  problem_being_solved text,
  help_needed text,
  expertise_offered text,
  linkedin_url text,
  website_url text,
  open_to_collaboration boolean default false,
  is_public boolean default true,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists public.founder_applications (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete set null,
  payload jsonb not null,
  status text not null default 'submitted' check (status in ('submitted','under_review','accepted','declined','withdrawn')),
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists public.forum_posts (
  id uuid primary key default gen_random_uuid(),
  author_id uuid not null references public.profiles(id) on delete cascade,
  category text not null,
  title text not null check (char_length(title) between 8 and 180),
  body text not null check (char_length(body) between 20 and 20000),
  stage text,
  tags text[] default '{}',
  moderation_status text not null default 'active' check (moderation_status in ('active','hidden','under_review')),
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);
create index if not exists forum_posts_category_idx on public.forum_posts(category);
create index if not exists forum_posts_created_idx on public.forum_posts(created_at desc);
create index if not exists forum_posts_author_idx on public.forum_posts(author_id);

create table if not exists public.forum_comments (
  id uuid primary key default gen_random_uuid(),
  post_id uuid not null references public.forum_posts(id) on delete cascade,
  author_id uuid not null references public.profiles(id) on delete cascade,
  parent_id uuid references public.forum_comments(id) on delete cascade,
  body text not null check (char_length(body) between 1 and 8000),
  moderation_status text not null default 'active' check (moderation_status in ('active','hidden','under_review')),
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);
create index if not exists forum_comments_post_idx on public.forum_comments(post_id, created_at);

create table if not exists public.forum_bookmarks (
  user_id uuid not null references public.profiles(id) on delete cascade,
  post_id uuid not null references public.forum_posts(id) on delete cascade,
  created_at timestamptz default now(),
  primary key (user_id, post_id)
);

create table if not exists public.forum_reports (
  id uuid primary key default gen_random_uuid(),
  reporter_id uuid not null references public.profiles(id) on delete cascade,
  post_id uuid references public.forum_posts(id) on delete cascade,
  comment_id uuid references public.forum_comments(id) on delete cascade,
  reason text not null,
  status text not null default 'under_review' check (status in ('under_review','resolved','dismissed')),
  created_at timestamptz default now(),
  check ((post_id is not null) <> (comment_id is not null))
);

create table if not exists public.resource_items (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text unique not null,
  description text not null,
  category text not null,
  read_time text,
  publish_date date,
  author text,
  cover_image text,
  url text,
  status text not null default 'draft' check (status in ('draft','published','coming_soon')),
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

alter table public.profiles enable row level security;
alter table public.founder_applications enable row level security;
alter table public.forum_posts enable row level security;
alter table public.forum_comments enable row level security;
alter table public.forum_bookmarks enable row level security;
alter table public.forum_reports enable row level security;
alter table public.resource_items enable row level security;

create policy "Public active profiles readable" on public.profiles for select using (is_public = true);
create policy "Users update own profile" on public.profiles for update using (auth.uid() = id) with check (auth.uid() = id);
create policy "Users insert own profile" on public.profiles for insert with check (auth.uid() = id);

create policy "Applications insertable" on public.founder_applications for insert with check (user_id is null or auth.uid() = user_id);
create policy "Applicants read own applications" on public.founder_applications for select using (auth.uid() = user_id);

create policy "Public active posts readable" on public.forum_posts for select using (moderation_status = 'active');
create policy "Users create own posts" on public.forum_posts for insert with check (auth.uid() = author_id);
create policy "Users update own posts" on public.forum_posts for update using (auth.uid() = author_id) with check (auth.uid() = author_id);

create policy "Public active comments readable" on public.forum_comments for select using (moderation_status = 'active');
create policy "Users create own comments" on public.forum_comments for insert with check (auth.uid() = author_id);
create policy "Users update own comments" on public.forum_comments for update using (auth.uid() = author_id) with check (auth.uid() = author_id);

create policy "Users manage own bookmarks" on public.forum_bookmarks for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "Users insert reports" on public.forum_reports for insert with check (auth.uid() = reporter_id);
create policy "Users read own reports" on public.forum_reports for select using (auth.uid() = reporter_id);
create policy "Published resources readable" on public.resource_items for select using (status in ('published','coming_soon'));
