import {createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";

export async function middleware(req){
    const res  = NextResponse.next();
    const supabase = createMiddlewareClient({ req,res});
     const responce = await supabase.auth.getSession();
    return res;
}