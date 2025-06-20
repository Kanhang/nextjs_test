

export async function GET () : Promise<Response> {
    return  Response.json({ message: 'Hello World from Server' });

}

export default GET; 