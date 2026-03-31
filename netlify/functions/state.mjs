import { getStore } from "@netlify/blobs";

const STORE_NAME = "choreschamp-state";

function getStateStore() {
  // Use strong consistency so all devices see updates immediately
  return getStore({ name: STORE_NAME, consistency: "strong" });
}

export default async (req) => {
  const store = getStateStore();

  if (req.method === "GET") {
    const data = await store.get("state", { type: "json" });
    return Response.json(data || { completions: {}, allowanceReleased: { sara: 0, sophia: 0 } });
  }

  if (req.method === "POST") {
    const body = await req.json();
    await store.setJSON("state", body);
    return Response.json({ ok: true });
  }

  return new Response("Method not allowed", { status: 405 });
};

export const config = {
  path: "/api/state",
};
