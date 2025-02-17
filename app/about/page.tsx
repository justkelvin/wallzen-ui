'use client'
import React from 'react'
import Link from 'next/link'

const TIMESTAMP = '2025-02-04 22:41:16'
const CURRENT_USER = 'justkelvin'

const features = [
    {
        title: 'High Quality Wallpapers',
        description: 'Curated collection of high-resolution wallpapers optimized for various devices and screen sizes.',
        icon: '🖼️'
    },
    {
        title: 'Advanced Search & Filtering',
        description: 'Find the perfect wallpaper using our powerful search and filtering system.',
        icon: '🔍'
    },
    {
        title: 'RESTful API',
        description: 'Full-featured API for developers to integrate WallZen into their applications.',
        icon: '⚡'
    },
    {
        title: 'Image Processing',
        description: 'Automatic generation of previews and optimized versions for different use cases.',
        icon: '🛠️'
    }
]

const stats = [
    { label: 'Wallpapers', value: '1,000+' },
    { label: 'API Requests', value: '100K+' },
    { label: 'Daily Users', value: '5K+' },
    { label: 'Categories', value: '25+' }
]

const techStack = [
    { name: 'Next.js 14', description: 'React framework for production' },
    { name: 'TypeScript', description: 'Type-safe JavaScript' },
    { name: 'Node.js', description: 'JavaScript runtime' },
    { name: 'Express', description: 'Web framework for Node.js' },
    { name: 'Sharp', description: 'High-performance image processing' },
    { name: 'Tailwind CSS', description: 'Utility-first CSS framework' }
]

export default function About() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="py-20 px-4 text-center bg-gradient-to-b from-black/50 to-transparent">
                <h1 className="text-5xl font-bold mb-6">About WallZen</h1>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                    WallZen is a modern wallpaper platform providing high-quality wallpapers
                    through an intuitive interface and robust API. Built with performance and
                    developer experience in mind.
                </p>
                <div className="mt-8 text-sm text-gray-400">
                    Last updated: {TIMESTAMP}
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-16 px-4 bg-black/30">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">Core Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="p-6 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                            >
                                <div className="text-4xl mb-4">{feature.icon}</div>
                                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                                <p className="text-gray-400">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                                <div className="text-gray-400">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tech Stack */}
            <section className="py-16 px-4 bg-black/30">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">Technology Stack</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {techStack.map((tech, index) => (
                            <div
                                key={index}
                                className="p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                            >
                                <h3 className="font-semibold mb-1">{tech.name}</h3>
                                <p className="text-sm text-gray-400">{tech.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* API Section */}
            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-6">Developer Friendly</h2>
                    <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                        WallZen provides a comprehensive RESTful API that allows developers to
                        integrate our wallpaper service into their applications.
                    </p>
                    <Link
                        href="/api-docs"
                        className="inline-block px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                    >
                        View API Documentation
                    </Link>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-16 px-4 bg-black/30">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-6">Created by</h2>
                    <div className="inline-flex items-center space-x-4 bg-white/5 px-6 py-3 rounded-full">
                        <span className="text-gray-300">@{CURRENT_USER}</span>
                        <Link
                            href={`https://github.com/${CURRENT_USER}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300 transition-colors"
                        >
                            GitHub Profile
                        </Link>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                    <p className="text-gray-300 mb-8">
                        Have questions or suggestions? Feel free to reach out or contribute to the project.
                    </p>
                    <div className="flex justify-center space-x-4">
                        <Link
                            href={`https://github.com/${CURRENT_USER}/wallzen`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                        >
                            GitHub Repository
                        </Link>
                        <Link
                            href={`mailto:contact@wallzen.com`}
                            className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                        >
                            Email Us
                        </Link>
                    </div>
                </div>
            </section>

            {/* Version Info */}
            <section className="py-8 px-4 text-center text-gray-500 text-sm">
                <p>Version 1.0.0 | Last deployed: {TIMESTAMP}</p>
            </section>
        </div>
    )
}