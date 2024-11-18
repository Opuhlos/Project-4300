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
    const firstName = formData.get("firstname") as string;
    const lastName = formData.get("lastname") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if(!firstName || !lastName || !email || !password) {
        throw new Error("Please fill all fields");
    }

    await connectMongoDB();

    const existingUser = await User.findOne({email});
    if(existingUser) {
        throw new Error("User already exists");
    }
    
    const hashedPassword = await hash(password, 10);

    await User.create({ firstName, lastName, email, password: hashedPassword });
    console.log("User created successfully");
    redirect('/login');
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

export { register, login, fetchAllCreatorItems, getUser };