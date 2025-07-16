export async function GET(request) {
    return new Response(JSON,stringify({message: "Hello World, New API !"}),{
        status: 200,
        Headers: {
            "Content-Type": "application/json"
        }
    });
}