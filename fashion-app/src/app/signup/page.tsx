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


const Signup = async ({ searchParams }: { searchParams: {error?: string }}) => {
    const session = await getSession();
    const user = session?.user;
    if (user) redirect("/profile");

    const errorMessage = searchParams?.error ? decodeURIComponent(searchParams.error) : null;

    if (errorMessage) {
      // Trigger an alert with the error message when the page loads
      if (typeof window !== 'undefined') {
        alert(errorMessage);
      }
    }

    return (
      <>
      
        <div className = "flex justify-center items-center min-h-screen">
          <div className = "bg-astra rounded-3xl shadow-lg flex flex-row justify-center items-center w-1/2.5 border border-b-8 border-black ">
            <div className = {"flex flex-col items-center p-10"}>
              <StyleLink isHome={true}/>
              <div className = "flex flex-row">
              <div className = "flex flex-col mt-10 mr-10">
              <form action={register}>
                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                <div> 
                  <h3 className = {`${grotesk.className}font-medium text-lg` }>First Name</h3>
                  <Input id="name" placeholder="Yevone" type="text" name="name" />
                  <h3 className = {`${grotesk.className} mt-5 font-medium text-lg` }>Last Name</h3>
                  <Input id="lastname" placeholder="Stein" type="text" name="lastname" />
                </div>
                <h3 className = {`${grotesk.className} mt-5 font-medium text-lg` }>Email Address</h3>
                <Input id="email" placeholder="yevone@gmail.com" type="email" name="email" />

                <h3 className = {`${grotesk.className} mt-5 font-medium text-lg` }>Password</h3>
                <Input id="password" placeholder="**********" type="password" name="password" />

                <button className="px-4 py-2 border flex gap-2 border-dark mt-5 rounded-lg text-slate-700 dark:text-slate-200 bg-dark dark:hover:bg-gray-700 hover:text-white transition duration-150">Sign Up</button>

              </form>
              </div>
              <div className = "flex flex-col">
              <div className={"h-[229px] w-[252px] bg-black border border-hidden overflow-hidden my-20"}>
                  <Image src={"/images/ExtraGroup.png"} alt="Dressing" width={252} height={229}/>
              </div>
              
              <p>
                Already have an account? <Link className = "hover:text-orange transition duration-150" href="/login">Login</Link>
              </p>
              </div>
              </div>
            </div>
          </div>
        </div>
      
      </>
    );
  }

  export default Signup;