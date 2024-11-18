'use server';

import connectMongoDB from "@/libs/mongodb";
import { User } from "@/models/User";
import Item from "@/models/itemSchema"
import { redirect } from "next/navigation";
import { hash } from "bcryptjs";
import { CredentialsSignin } from "next-auth";
import { signIn } from "@/auth";
import { getSession } from "@/libs/getSession";

const login = async (formData: FormData) => {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
        await signIn("credentials", {
            redirect: false,
            callbackUrl: "/",
            email,
            password,
        });
    } catch (error) {
        const err = error as CredentialsSignin;
        return err.cause;
    }
    redirect("/");

};

const register = async (formData: FormData) => {
    const name = formData.get("name") as string;
    const lastName = formData.get("lastname") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if(!name || !lastName || !email || !password) {
        throw new Error("Please fill all fields");
    }

    await connectMongoDB();

    const existingUser = await User.findOne({email});
    if(existingUser) {
        throw new Error("User already exists");
    }
    
    const hashedPassword = await hash(password, 10);

    await User.create({ name, lastName, email, password: hashedPassword });
    console.log("User created successfully");
    redirect('/login');
};

const createItem = async (formData: FormData) => {
    const title = formData.get("title") as string;
    const image = formData.get("image") as string;
    const description = formData.get("description") as string;
    const session = await getSession();
    const userEmail = session?.user?.email;
    const userName = session?.user?.name;
    const password = formData.get("password") as string;

    if(!title || !image || !description ) {
        throw new Error("Please fill all fields");
    }

    await connectMongoDB();

    
    await Item.create({ title, image, description, email: userEmail, name: userName });
    console.log("Item created successfully");
    redirect('/profile');
};

const fetchAllCreatorItems = async () => {
    await connectMongoDB();

    const session = await getSession();
    const user = session?.user;

    const items = await Item.findById(user?.name) 
}

const getUser = async () => {
    await connectMongoDB();
    const session = await getSession();
    const user = session?.user;
    return user?.email;
}

export { register, login, fetchAllCreatorItems, getUser, createItem };