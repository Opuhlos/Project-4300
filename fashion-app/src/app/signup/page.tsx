import Image from "next/image";
import Button from "../components/Button"
import { grotesk } from '../components/Fonts';
import { useState } from 'react';
import StyleLink from '../components/StyleLink';
import { signIn } from "@/auth"
import Link from "next/link"
import { Input } from "../components/Input"
import { register } from "@/action/user";
import { getSession } from "@/libs/getSession";
import { redirect } from "next/navigation";
import { User } from "@/models/User";


const Signup = async () => {
    const session = await getSession();
    const user = session?.user;
    if (user) redirect("/profile");

    return (
      <>
      
        <div className = "flex justify-center items-center min-h-screen">
          <div className = "bg-astra rounded-3xl shadow-lg flex flex-row justify-center items-center w-1/2.5 border border-b-8 border-black ">
            <div className = {"flex flex-col items-center p-10"}>
              <StyleLink isHome={true}/>
              <div className={"h-[229px] w-[252px] bg-black border border-hidden overflow-hidden my-10"}>
                  <Image src={"/images/ExtraGroup.png"} alt="Dressing" width={252} height={229}/>
              </div>
              <form action={register}>
                <div>
                  <h3>First Name</h3>
                  <Input id="firstname" placeholder="Yevone" type="text" name="firstname" />
                  <h3>Last Name</h3>
                  <Input id="lastname" placeholder="Stein" type="text" name="lastname" />
                </div>
                <h3>Email Address</h3>
                <Input id="email" placeholder="yevone@gmail.com" type="email" name="email" />

                <h3>Password</h3>
                <Input id="password" placeholder="**********" type="password" name="password" />

                <button>Sign Up</button>

              </form>
              <form
                action={async () => {
                  "use server"
                  await signIn("google", { redirectTo: "/styles"})
                }}>
                <button className="px-4 py-2 border flex gap-2 border-dark  rounded-lg text-slate-700 dark:text-slate-200 bg-dark dark:hover:bg-gray-700 hover:text-white transition duration-150">
                  <Image className="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy"  width={24} height={24} alt="google logo"></Image>
                  <span>Signup with Google</span>
                </button>
              </form>
              <p>
                Already have an account? <Link href="/login">Login</Link>
              </p>
            
            </div>
          </div>
        </div>
      
      </>
    );
  }

  export default Signup;