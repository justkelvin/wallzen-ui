'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/50 backdrop-blur-lg' : 'bg-transparent'
            }`}>
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="text-white font-bold text-xl">
                        WallZen
                    </Link>

                    {/* Navigation Pills */}
                    <div className="flex items-center space-x-4">
                        <Link
                            href="/api-docs"
                            className="px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm transition-colors"
                        >
                            API Docs
                        </Link>
                        <Link
                            href="/about"
                            className="px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm transition-colors"
                        >
                            About
                        </Link>
                        <Link
                            href="https://github.com/justkelvin/wallzen"
                            target="_blank"
                            className="px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm transition-colors"
                        >
                            GitHub
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}