import connectMongoDB from "@/libs/mongodb";
import Item from "@/models/itemSchema";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

// Creating the items
export async function POST(request: NextRequest) {
    const { title, description, image, email, name } = await request.json();
    await connectMongoDB();
    await Item.create({ title, description, image, email, name});
    return NextResponse.json({ message: "Item added successfully" }, {status: 201})
}

// Gets all the items
/**export async function GET() {
    try {
        await connectMongoDB();
        const items = await Item.find();
        return NextResponse.json({ items }, { status: 200})
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Error", error }, { status: 500 })
    }
}*/

export async function GET(request:NextRequest) {
    try {
        await connectMongoDB();
        
        const url = new URL(request.url);
        const query = url.searchParams.get('q');

        let filter = {};
        if (query) {
            filter = { title: { $regex: query, $options: 'i'}};
        }
        
        const items = await Item.find(filter).exec();
        return new Response(JSON.stringify({ items }), { status: 200 });
    } catch (error) {
        console.error("Error fetching items:", error);
        return new Response("Failed to fetch items", {status: 500});
    }
}