import { db } from "@vercel/postgres";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET() {
  const client = await db.connect();
  try {
    const { rows } = await client.sql`SELECT COUNT(*) FROM ment_tb;`;
    client.release;
    return NextResponse.json({ count: rows[0].count }, { status: 200 });
  } catch (error) {
    client.release;
    return NextResponse.json({ message: "error" }, { status: 500 }).headers.set(
      "Cache-Control",
      "no-cache"
    );
  }
}
