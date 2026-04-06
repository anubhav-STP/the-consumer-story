import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/lib/db";

export async function GET(req: NextRequest) {
  const region = req.nextUrl.searchParams.get("region");

  if (!region || !["IN", "US", "UK"].includes(region)) {
    return NextResponse.json({ error: "Valid region required (IN, US, UK)" }, { status: 400 });
  }

  try {
    const result = await getDb().execute({
      sql: "SELECT name FROM companies WHERE region = ? ORDER BY name ASC",
      args: [region],
    });

    const companies = result.rows.map((r) => r.name as string);
    return NextResponse.json({ companies });
  } catch (error) {
    console.error("Failed to fetch companies:", error);
    return NextResponse.json({ error: "Failed to fetch companies" }, { status: 500 });
  }
}
