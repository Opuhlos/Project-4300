import Image from "next/image";
import Button from "../components/Button"
import { grotesk } from '../components/Fonts';
import { useState } from 'react';


export default function Home() {
    return (
      <form>
      <div className = "flex justify-center items-center min-h-screen">
      <div className = "bg-astra rounded-3xl shadow-lg flex flex-row justify-center items-center w-1/2.5 border border-b-8 border-black ">
        <div className = "bg-astra rounded-3xl flex-col">
        <div className = "my-5 mx-10 mt-10">
          <label className = {`${grotesk.className} font-medium text-3xl` }>Sign Up</label>
          <br></br>
        </div>
        <div className = "my-5 mx-10">
          <label className = {`${grotesk.className} font-medium text-lg` }>Name</label>
          <br></br>
          <input className = "rounded-md p-1.5 text-sm" type="text" id="name" name="name" required minlength="6" maxlength="20" size="35" 
          placeholder = "E.g. Joe Acme"
          />
        </div>
        <div className = "my-5 mx-10">
          <label className = {`${grotesk.className} font-medium text-lg`}>Email</label>
          <br></br>
          <input className = "rounded-md p-1.5 text-sm" type="text" id="email" name="email" required minlength="6" maxlength="20" size="35"
          placeholder = "E.g. joe@acme.com"
          />
        </div>
        <div className = "my-5 mx-10">
          <label className = {`${grotesk.className} font-medium text-lg`}>Username</label>
          <br></br>
          <input className = "rounded-md p-1.5 text-sm" type="text" id="username" name="username" required minlength="6" maxlength="20" size="35" 
          placeholder = "E.g. joeacme1"
          />
        </div>
        <div className = "my-5 mx-10">
          <label className = {`${grotesk.className} font-medium text-lg`}>Password</label>
          <br></br>
          <input className = "rounded-md p-1.5 text-sm" type="text" id="password" name="password" required minlength="6" maxlength="20" size="35" />
        </div>
        <div className = "my-5 mx-10 mb-10">
          <label className = {`${grotesk.className} font-extralight text-xs text-gray-600`}>Minimum 6 characters, at least 1 letter and one</label>
          <br></br>
          <label className = {`${grotesk.className} font-extralight text-xs text-gray-600`}> number</label>
          <br></br>
        </div>
        </div>
        <div className = {"flex flex-col justify-center p-10 mt-[-60px]"}>
        <div className={"h-[229px] w-[252px] bg-black border border-hidden overflow-hidden my-10"}>
             <Image src={"/images/ExtraGroup.png"} alt="Dressing" width={252} height={229}/>
        </div>
        <Button label = {"Create Account"} styles = {"mx-10 bg-dark text-sm text-white px-8 py-4 "} children = {""} handleClick = {""}/>
        </div>
      </div>
      </div>
      </form>
    );
  }