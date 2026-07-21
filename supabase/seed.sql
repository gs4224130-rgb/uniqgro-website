insert into public.resource_items (title, slug, description, category, read_time, author, status)
values ('Founder Playbook 01: How to Validate a Startup Idea','validate-startup-idea','A practical guide to move from assumptions to evidence before you overbuild.','Idea Validation','12 min','UniqGro','coming_soon')
on conflict (slug) do nothing;
