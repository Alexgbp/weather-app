import React from 'react'

export default function InputComponent({inpuTitle, type, name}) {
    return (
        <div>
            <label style={{
                display: "flex",
                gap: "20px",
                alignItems: "center"
            }}>
                <input 
                placeholder={inpuTitle} 
                style={{
                    outline: "none",
                    width: "250px",
                    border: "none",
                    backgroundColor: "#f3f3f3",
                    padding: "5px 0 5px 10px",
                    borderRadius: "5px",
                    height: "24px",
                }} type={type} name={name} required />
            </label>
        </div>
    )
}
