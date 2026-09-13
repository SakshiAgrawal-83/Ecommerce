export async function GET() {

    return new Response("Hello, Next.js developer!", {
        status: 200,
    });
}

export async function POST() {
    return new Response("Hello, Next.js!", {
        status: 200,
    });
}   