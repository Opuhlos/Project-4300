import Image from "next/image";
import Button from "../components/Button"
import { grotesk } from '../components/Fonts';
import { useState } from 'react';


export default function Home() {
    return (
      <form>
      <div className = "flex justify-center items-center min-h-screen bg-gray-100">
      <div className = "bg-astra rounded-3xl shadow-lg flex flex-row justify-center items-center w-1/3 border border-b-8 border-black ">
        <div className = "bg-astra rounded-3xl flex-col">
        <div className = "my-5 mx-10 mt-10">
          <label className = {`${grotesk.className} font-medium text-3xl` }>Login</label>
          <br></br>
        </div>
        <div className = "my-5 mx-10">
          <label className = {`${grotesk.className} font-medium text-lg`}>Username</label>
          <br></br>
          <input className = "rounded-md p-1.5 text-sm" type="text" id="name" name="name" required minlength="6" maxlength="20" size="35" 
          placeholder = "E.g. joeacme1"
          />
        </div>
        <div className = "my-5 mx-10">
          <label className = {`${grotesk.className} font-medium text-lg`}>Password</label>
          <br></br>
          <input className = "rounded-md p-1.5 text-sm" type="text" id="name" name="name" required minlength="6" maxlength="20" size="35" />
        </div>
        <div className = "my-5 mx-10 mb-10">
          <Button label = {"Create Account"} styles = {"mx-10 bg-dark text-sm text-white px-8 py-4 "} children = {""} handleClick = {""}/>
          <br></br>
        </div>
        </div>
      </div>
      </div>
      </form>
    );
  }