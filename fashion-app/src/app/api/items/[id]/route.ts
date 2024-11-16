import connectMongoDB from "@/libs/mongodb";
import Item from "@/models/itemSchema";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

interface RouteParams {
    params: { id: string };
}

export async function PUT(request: NextRequest, { params }: RouteParams) {
    const {id} = params;
    const { title: title, description: description, image: image} = await request.json();
    await connectMongoDB();
    await Item.findByIdAndUpdate(id, {title, description, image});
    return NextResponse.json({ message: "Item Updated"}, { status: 200 });
}

export async function GET(request:NextRequest, { params }: RouteParams) {
    const {id} = params;
    await connectMongoDB();
    const item = await Item.findOne({ _id: id });
    return NextResponse.json({ item }, { status: 200});
}

