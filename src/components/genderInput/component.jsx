import React from 'react'

export default function GenderInput({male, female}) {
    return (
        <div style={{
                display: "flex",
                gap: "10px"
        }}>
            <label>
                <input type="radio" name="gender" value={"male"} required /> {male}
            </label>
            <label>
                <input type="radio" name="gender" value={"female"} required /> {female}
            </label>
        </div>
    )
}
