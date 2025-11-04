import React from 'react'

export default function ButtonForm({type, title}) {
    return (
        <div style={{
            marginTop: "8px"
        }}>
            <button style={{
                borderRadius: "5px",
                backgroundColor: "#3fa9bb",
                color: "#ffff",
                border: "none",
                padding: "14px",
                minWidth: "100px",
                fontSize: "16px"
            }} 
            type={type}>{title}</button>
        </div>
    )
}
