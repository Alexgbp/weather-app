"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter()
 const [user, setUser] = useState(null)

  useEffect(() => {
  const data = JSON.parse(localStorage.getItem("user"))
  try {
  
  } catch (error) {
    console.log("Error");
  } finally{
       setUser(data)
  }
  }, [router]);

console.log(user);
  return (
    <div>
      <div>Weather app</div>
       <span>Welcome: {user?.name}</span>
      <button onClick={() => {
        localStorage.removeItem("user")
        setUser(null)
        router.replace("/authorize")
      }}>Log out</button>
    </div>
  );
}
