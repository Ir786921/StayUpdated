import { NextResponse } from "next/server";
export async function POST(request) {
    const data = await request.json();
    console.log(data || "empty");
    
    return NextResponse.json({success:true,data:data})
}