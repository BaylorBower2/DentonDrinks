import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  return new Response(
    JSON.stringify({ status: 'ok' }),
    { 
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    }
  );
};