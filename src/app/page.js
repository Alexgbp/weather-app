"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter()
 const [user, setUser] = useState(null)
 const [value, setValue] = useState("")
 const [result, setResult] = useState(null)
 const [loading, setLoading] = useState(false)

  useEffect(() => {
  const data = JSON.parse(localStorage.getItem("user"))
  try {
    if(!data){
      router.replace("/authorize")
      return
    }
  } catch (error) {
    console.log("Error");
  } finally{
       setUser(data)
  }
  }, [router]);


const getValue = async() => {
  const req = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${value}`)
  const respn = await req.json()
  const lat = respn.results[0].latitude
  const lon = respn.results[0].longitude
  return {lat, lon}
}

const getTemperature = async () =>{
  setLoading(true)
  try {
    const data = await getValue()
  const getData =  await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${data.lat}&longitude=${data.lon}&hourly=temperature_2m&daily=temperature_2m_max,precipitation_sum&timezone=Europe/Moscow`)
  const weather = await getData.json()
  setResult(weather)
  setValue("")
  } catch (error) {
    console.log(error);
  } finally{
    setLoading(false)
  }
}


  return (
    <div>
      <div>Weather app</div>
      {loading && <span>loading</span>}
      {result && (
        <span>Погода на {result.daily.time[0]} - {Math.floor(result.daily.temperature_2m_max[0])}</span>
      )}
       <span>Welcome: {user?.name}</span>
      <button onClick={() => {
        localStorage.removeItem("user")
        router.replace("/authorize")
      }}>Log out</button>
      <input value={value} onChange={(e) => {
        setValue(e.target.value)
      }} />
      <button onClick={getTemperature}>Get</button>
    </div>
  );
}
