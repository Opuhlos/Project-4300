import connectMongoDB from "@/libs/mongodb";
import Item from "@/models/itemSchema";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

interface RouteParams {
    params: { id: string };
}

// getting the items by creator id
// this can be configured later on to account for user id or something
export async function GET(request:NextRequest, { params }: RouteParams) {
    try {
        const {id} = params;
        console.log(id);
        await connectMongoDB();
        const items = await Item.find({ creator: id });
        return NextResponse.json({ items }, { status: 200});
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Error", error }, { status: 500 })
    }
}

// deleting an item associated with the user in profile page
export async function DELETE(request: NextRequest, {params}: RouteParams) {
    const { id } = params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return NextResponse.json({message: "Invalid ID format"}, {status: 400})
    }
    await connectMongoDB();
    const deletedItem = await Item.findByIdAndDelete(id);
    if (!deletedItem) {
        return NextResponse.json({ message: "Item not found"}, {status: 404});
    }
    return NextResponse.json({ message: "Item deleted" }, {status: 200});
}