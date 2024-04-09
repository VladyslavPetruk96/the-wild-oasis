import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://hizpmwcuskdkodiiyxhh.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhpenBtd2N1c2tka29kaWl5eGhoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI2Nzk4ODYsImV4cCI6MjAyODI1NTg4Nn0.Ua1325bn7WhuSmsD6Q8354OEBWEOxXQj5PJ8LErcQMk';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
