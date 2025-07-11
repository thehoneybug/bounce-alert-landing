
-- Add new columns to the form_submissions table
ALTER TABLE public.form_submissions 
ADD COLUMN phone_number text,
ADD COLUMN webhook_url text;

-- Update the campaigns column to be more specific for email volume
-- (keeping existing column name but changing the data it stores)
