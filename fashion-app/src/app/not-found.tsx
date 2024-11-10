"use client";

import { useRouter } from 'next/navigation'

import Navigation from "./components/Navigation"
import { grotesk } from "./components/Fonts";
import Button from "./components/Button";

export default function NotFound() {
  const router = useRouter();
 
  const handleReturnClick = () => {
      router.push('/');
  };


    return (
      <div className="min-h-screen flex flex-col justify-center">
        
        <div className={`${grotesk.className} flex flex-col gap-y-2 items-center`}>
          <h1 className="text-8xl text-darkerOrange font-bold"> 404</h1>
          <h2 className="text-3xl text-darkerOrange font-bold"> There was a problem</h2>
          <p>We could not find the page you were looking for</p>
          <Button label={"Return Home"} styles={"text-sm w-1/12 px-[10px] py-[10px] bg-dark hover:bg-darkerOrange hover:text-dark text-white"} children={""} handleClick={handleReturnClick} />
        </div>

      </div>
    );
  }