'use client'
import { useEffect, useState } from 'react'
import WallpaperGrid from '@/components/ui/WallpaperGrid'
import { Wallpaper } from '@/lib/types/wallpaper'
import { api } from '@/lib/api'

export default function Home() {
  const [wallpapers, setWallpapers] = useState<Wallpaper[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchWallpapers = async () => {
      try {
        const data = await api.getWallpapers()
        console.log('Fetched wallpapers:', data) // Add logging
        setWallpapers(data)
      } catch (error) {
        console.error('Error fetching wallpapers:', error)
        setError('Failed to load wallpapers')
      } finally {
        setLoading(false)
      }
    }

    fetchWallpapers()
  }, [])

  if (error) {
    return <div className="text-center text-red-500 mt-8">{error}</div>
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Featured Wallpapers</h1>
      {loading ? (
        <div className="text-center">Loading...</div>
      ) : wallpapers.length > 0 ? (
        <WallpaperGrid wallpapers={wallpapers} />
      ) : (
        <div className="text-center text-gray-500">No wallpapers found</div>
      )}
    </main>
  )
}