import connectMongoDB from "@/libs/mongodb";
import Item from "@/models/itemSchema";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";


export async function POST(request: NextRequest) {
    const { title, description, image, creator } = await request.json();
    await connectMongoDB();
    await Item.create({ title, description, image, creator});
    return NextResponse.json({ message: "Item added successfully" }, {status: 201})
}

export async function GET() {
    try {
        await connectMongoDB();
        const items = await Item.find();
        console.log(items);
        return NextResponse.json({ items }, { status: 200})
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Error", error }, { status: 500 })
    }
}