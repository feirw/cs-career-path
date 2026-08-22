-- Schema για το CS Career Path.
-- Τρέξε το στο Supabase → SQL Editor. Είναι idempotent: μπορεί να ξανατρέξει.
--
-- Ο πίνακας submissions υπάρχει ήδη· περιλαμβάνεται εδώ για αναφορά και για
-- να μπορεί να στηθεί η βάση από το μηδέν.

create table if not exists public.submissions (
  id          text primary key,
  created_at  bigint not null,
  locale      text   not null,
  mode        text   not null default 'full',
  duration_ms bigint not null default 0,
  top_career  text   not null,
  top_match   integer not null,
  scores      jsonb  not null,
  traits      jsonb  not null,
  answers     jsonb  not null
);

create index if not exists idx_submissions_created on public.submissions (created_at);

-- Μετρητής εκκινήσεων, για το ποσοστό ολοκλήρωσης ανά τεστ.
create table if not exists public.starts (
  id         text primary key,
  created_at bigint not null,
  locale     text   not null,
  mode       text   not null default 'full'
);

create index if not exists idx_starts_created on public.starts (created_at);

-- Rate limiting για το login του admin.
create table if not exists public.login_attempts (
  id         bigserial primary key,
  ip         text    not null,
  attempt_at bigint  not null,
  success    boolean not null
);

create index if not exists idx_login_attempts_ip on public.login_attempts (ip, attempt_at);

-- RLS παντού. Η εφαρμογή μιλάει στη βάση ΜΟΝΟ με το service_role key από τον
-- server, το οποίο παρακάμπτει τα policies. Χωρίς policies για anon/authenticated,
-- κανείς δεν μπορεί να διαβάσει ή να γράψει με το δημόσιο anon key — ούτε να
-- κατεβάσει τις απαντήσεις άλλων.
alter table public.submissions    enable row level security;
alter table public.starts         enable row level security;
alter table public.login_attempts enable row level security;
