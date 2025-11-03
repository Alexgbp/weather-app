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
    <div>
      <div>
        <h1>Registration</h1>
      </div>
      <form action={GetUser}>
        <div>
          <label>
            Name
            <input type="text" name="name" />
          </label>
        </div>
        <div>
          <label>
            Email
            <input type="text" name="email" />
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
            <input type="text" name="city"  />
          </label>
        </div>
        <div>
          <label>
            Country
            <input type="text" name="country"  />
          </label>
        </div>
        <div>
          <button type="button">Cancel</button>
          <button type="submit">Confirm</button>
        </div>
      </form>
    </div>
  )
}
