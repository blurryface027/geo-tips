-- 1. Create Tables
create table public.regions (
  id uuid default gen_random_uuid() primary key,
  name text not null unique,
  created_at timestamp with time zone default now()
);

create table public.countries (
  id uuid default gen_random_uuid() primary key,
  name text not null unique,
  region_id uuid references public.regions(id) on delete cascade,
  is_active boolean default true,
  created_at timestamp with time zone default now()
);

create table public.categories (
  id uuid default gen_random_uuid() primary key,
  name text not null unique,
  slug text not null unique, -- e.g. 'bollard', 'sign'
  created_at timestamp with time zone default now()
);

-- Adjusted hints table to match your stable Sidebar/Forms
create table public.hints (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  description text,
  image_url text,
  image_size text default 'medium', -- 'small', 'medium', or 'large'
  category_id text not null, -- Adjusted to take strings like 'bollard'
  country text,              -- Adjusted to take strings like 'Botswana'
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

-- 2. Enable Realtime
alter publication supabase_realtime add table public.hints;

-- 3. Storage Setup (CRITICAL FOR IMAGES)
insert into storage.buckets (id, name, public) 
values ('hints', 'hints', true)
on conflict (id) do nothing;

create policy "Storage allow all reads" 
on storage.objects for select using (bucket_id = 'hints');

create policy "Storage allow all inserts" 
on storage.objects for insert with check (bucket_id = 'hints');

create policy "Storage allow all updates" 
on storage.objects for update using (bucket_id = 'hints');

create policy "Storage allow all deletes" 
on storage.objects for delete using (bucket_id = 'hints');

-- 4. Sample Seed Data
insert into public.regions (name) values 
  ('Western Europe'), 
  ('Eastern Europe'), 
  ('Nordics'), 
  ('Baltics'), 
  ('Latin America'), 
  ('North America'), 
  ('South & South-East Asia'), 
  ('Rest of Asia'), 
  ('Oceania'), 
  ('Africa'), 
  ('Middle East')
on conflict do nothing;

insert into public.categories (name, slug) values 
  ('Language', 'language'),
  ('Sign', 'sign'),
  ('Bollard', 'bollard'),
  ('Chevron', 'chevron'),
  ('Guardrail', 'guardrail'),
  ('Pole', 'pole'),
  ('Road Markings', 'road-markings'),
  ('Vegetation', 'vegetation'),
  ('Pavement', 'pavement'),
  ('Architecture', 'architecture'),
  ('Road Numbering', 'road-numbering'),
  ('Place Name', 'place-name'),
  ('Telephone', 'telephone'),
  ('Company', 'company'),
  ('License Plate', 'license-plate'),
  ('Car Meta', 'car-meta')
on conflict do nothing;

-- 5. RLS Policies
alter table public.hints enable row level security;
create policy "Allow public read hints" on public.hints for select using (true);
create policy "Allow public insert hints" on public.hints for insert with check (true);
create policy "Allow public update hints" on public.hints for update using (true);
create policy "Allow public delete hints" on public.hints for delete using (true);

alter table public.regions enable row level security;
create policy "Allow public read regions" on public.regions for select using (true);

alter table public.countries enable row level security;
create policy "Allow public read countries" on public.countries for select using (true);

alter table public.categories enable row level security;
create policy "Allow public read categories" on public.categories for select using (true);

-- (Run this if you get errors about tables already existing)
-- drop table if exists public.hints cascade;
-- drop table if exists public.countries cascade;
-- drop table if exists public.regions cascade;
-- drop table if exists public.categories cascade;

-- Run this to add image_size to an existing hints table:
alter table public.hints add column if not exists image_size text default 'medium';
