// must write in this order, without default

export async function GET() : Promise<Response>{
    return Response.json({message : "Hello World from Client"});
}

export default GET;