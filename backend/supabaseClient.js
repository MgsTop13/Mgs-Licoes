import { createClient } from '@supabase/supabase-js'
import fetch from "node-fetch"

import dotenv from "dotenv";
dotenv.config();

const supabaseUrl = process.env.url
const supabaseKey = process.env.key

export const supabase = createClient(
        supabaseUrl, supabaseKey,
)
