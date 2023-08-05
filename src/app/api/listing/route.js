import { NextResponse } from "next/server";
import data from "./DataTerbaru.json";

export async function GET() {
  return NextResponse.json(data);
}
