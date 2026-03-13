import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request }) => {
    const { username, password } = await request.json();

    console.log(`${username}: ${password}`)

    return new Response();
}