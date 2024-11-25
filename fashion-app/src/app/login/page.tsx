import Image from "next/image";
import Button from "../components/Button"
import { grotesk } from '../components/Fonts';
import { useState } from 'react';
import StyleLink from '../components/StyleLink';
import { auth, signIn } from "@/auth"
import { Input } from "../components/Input";
import Link from "next/link";
import { login } from "@/action/user";
import { redirect } from "next/navigation";
import { getSession } from "@/libs/getSession";

const Login = async () => {
  const session = await getSession();
  const user = session?.user;
  if(user) redirect('/profile');

    return (
      
      <div className = "flex justify-center items-center min-h-screen">
      <div className = "bg-astra rounded-3xl shadow-lg flex flex-row justify-center items-center w-1/2.5 border border-b-8 border-black ">
        <div className = {"flex flex-col items-center p-10"}>
          <StyleLink isHome={true}/>
          <div className = "flex flex-row">
          <div className = "flex flex-col justify-center mt-10 mr-10">
          <form action={ login }>
            <h3 className = {`${grotesk.className}font-medium text-lg` }>Email Address</h3>
            <Input id="email" placeholder="yevone@gmail.com" type="email" name="email" />

            <h3 className = {`${grotesk.className}font-medium mt-5 text-lg` }>Password</h3>
            <Input id="password" placeholder="**********" type="password" name="password" />

            <button className="px-4 py-2 border flex gap-2 border-dark mt-20 mb-2 rounded-lg text-slate-700 dark:text-slate-200 bg-dark dark:hover:bg-gray-700 hover:text-white transition duration-150">Login</button>

            <p>Don't have an account? <Link  className = "hover:text-orange transition duration-150" href="/signup">Sign Up</Link></p>
          </form>
          </div>
          <div className = "flex flex-col justify-center">
          <div className={"h-[229px] w-[252px] bg-black border border-hidden overflow-hidden my-2"}>
              <Image src={"/images/ExtraGroup.png"} alt="Dressing" width={252} height={229}/>
          </div>
          <form
            action={async () => {
              "use server"
              await signIn("google", { redirectTo: "/profile" })
          }}>
            <button className="px-4 py-2 border flex gap-2 border-dark rounded-lg text-slate-700 dark:text-slate-200 bg-dark dark:hover:bg-gray-700 hover:text-white transition duration-150">
              <Image className="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy"  width={24} height={24} alt="google logo"></Image>
              <span>Login with Google</span>
            </button>
          </form>
          </div>
          </div>
        </div>
      </div>
      </div>
      
    );
  }
export default Login;