import { NextResponse } from "next/server";

const SITES = [
  { id: "express", url: "https://expressanalytics.com" },
  { id: "api_ea", url: "http://api.ea.net/" },
];

async function checkSite(url: string) {
  const started = Date.now();

  try {
    const res = await fetch(url, { method: "HEAD" });
    const time = Date.now() - started;

    return {
      ok: res.ok,
      status: res.status,
      responseTimeMs: time,
    };
  } catch (err: any) {
    return {
      ok: false,
      status: null,
      responseTimeMs: null,
      error: err.message,
    };
  }
}

export async function GET() {
  const checks = await Promise.all(
    SITES.map(async (site) => ({
      id: site.id,
      url: site.url,
      ...(await checkSite(site.url)),
    }))
  );

  return NextResponse.json({
    timestamp: new Date().toISOString(),
    checks,
  });
}
