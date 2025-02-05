'use client'
import { useEffect, useState } from 'react'
import WallpaperGrid from '@/components/ui/WallpaperGrid'
import { Wallpaper } from '@/lib/types/wallpaper'
import { api } from '@/lib/api'

export default function Home() {
  const [wallpapers, setWallpapers] = useState<Wallpaper[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchWallpapers = async () => {
      try {
        const data = await api.getWallpapers()
        setWallpapers(data)
      } catch (error) {
        console.error('Error fetching wallpapers:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchWallpapers()
  }, [])

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Featured Wallpapers</h1>
      {loading ? (
        <div className="text-center">Loading...</div>
      ) : (
        <WallpaperGrid wallpapers={wallpapers} />
      )}
    </main>
  )
}