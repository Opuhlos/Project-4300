import connectMongoDB from "@/libs/mongodb";
import Item from "@/models/itemSchema";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

interface RouteParams {
    params: { id: string };
}

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