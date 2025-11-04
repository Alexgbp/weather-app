import Link from 'next/link'
import React from 'react'

export default function Layout({ children }) {
    return (
        <div>
            <header>
                <div><Link href={"/"}>Back to main</Link></div>
            </header>
            <main>{children}</main>
            <footer>Footer</footer>
        </div>
    )
}
