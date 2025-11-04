"use client"

import { useRouter } from "next/navigation"



export default function Page() {

const router = useRouter()

const GetUser = (formData) => {
const name = formData.get("name")
const email = formData.get("email")
localStorage.setItem("user", JSON.stringify({ name, email }));
router.push("/")
}


  return (
    <div style={{
      backgroundImage: "linear-gradient(to right, #36d4a1, #2ec8a2, #14a3a9)",
      position: "absolute",
      top: "0",
      left: "0",
      width: "100vw",
      height: "100vh"
    }}>
      <form
        style={{
          background: "white",
          maxWidth: "600px",
          padding: "50px",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          gap: "20px",
          margin: "100px auto",
          borderRadius: "20px"
        }}
      action={GetUser}>
        <h2 style={{
          textAlign: "center",
          color: "#3fa9bb",
          margin: "0"
        }}>Registration</h2>
        <div>
          <label style={{
            display: "flex",
            gap: "20px",
            alignItems: "center"
          }}>
            <span style={{
              fontSize: "15px",
              color: "black",
              fontWeight: "600"
            }}>Name</span>
            <input placeholder="Tyler jones" style={{
            outline: "none",
            width: "250px",
            border: "none",
            backgroundColor: "#f3f3f3",
            padding: "5px",
            borderRadius: "5px",
            height: "24px",
            }} type="text" name="name" required />
          </label>
        </div>
        <div>
          <label>
            Email
            <input type="text" name="email" required />
          </label>
        </div>
         <div>
          <label>
            Date of Birth
            <input type="date" name="bday" />
          </label>
        </div>
        <div>
          <span>Gender</span>
          <label>
            <input type="radio" name="gemder" value={"male"} required /> Male
          </label>
          <label>
            <input type="radio" name="gemder" value={"female"} required /> Female
          </label>
        </div>
        <div>
          <label>
            City
            <input type="text" name="city" required />
          </label>
        </div>
        <div>
          <label>
            Country
            <input type="text" name="country" required />
          </label>
        </div>
        <div>
          <button type="submit">Confirm</button>
        </div>
      </form>
    </div>
  )
}
