import { NextResponse } from "next/server";
import data from "@/db/data.json";
export async function GET() {
  return NextResponse.json({
    data,
  });
}
