export default function page() {
  return (
    <div>
      <div>
        <h1>Registration</h1>
      </div>
      <form action="">
        <div>
          <label>
            Name
            <input type="text" />
          </label>
        </div>
        <div>
          <label>
            Email
            <input type="text" />
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
