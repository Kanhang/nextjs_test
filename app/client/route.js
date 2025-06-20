// must write in this order, without default


import { NextResponse } from 'next/server'

export async function GET (request) {
    return  NextResponse.json({ message: 'Hello World from Client' });

}
