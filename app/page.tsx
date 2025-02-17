'use client'
import { useEffect, useState } from 'react'
import WallpaperGrid from '@/components/ui/WallpaperGrid'
import { Wallpaper } from '@/lib/types/wallpaper'
import { wallpaperApi } from '@/lib/api'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

export default function Home() {
  const [wallpapers, setWallpapers] = useState<Wallpaper[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [searchQuery, setSearchQuery] = useState('')
  const [isSearching, setIsSearching] = useState(false)

  useEffect(() => {
    const fetchWallpapers = async () => {
      try {
        setLoading(true)
        let response

        if (isSearching) {
          response = await wallpaperApi.searchWallpapers(searchQuery, page)
        } else {
          response = await wallpaperApi.getWallpapers(page)
        }

        setWallpapers(response.data)
        setTotalPages(response.pagination.totalPages)
      } catch (error) {
        console.error('Error fetching wallpapers:', error)
        setError('Failed to load wallpapers')
      } finally {
        setLoading(false)
      }
    }

    fetchWallpapers()
  }, [page, isSearching]) // Removed searchQuery dependency

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      setPage(1)
      setIsSearching(true)
    } else {
      setIsSearching(false)
    }
  }

  if (error) {
    return <div className="text-center text-red-500 mt-8">{error}</div>
  }

  return (
    <main className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center bg-gradient-to-b from-black/5 to-transparent mb-8">
        <div className="text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Discover Amazing Wallpapers
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Find the perfect wallpaper for your desktop or mobile device.
          </p>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto flex gap-2">
            <div className="relative flex-1">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search wallpapers..."
                className="w-full px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 focus:outline-none focus:border-white/40 transition-colors"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <MagnifyingGlassIcon className="w-5 h-5 text-gray-400" />
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Wallpaper Grid Section */}
      {loading ? (
        <div className="flex items-center justify-center min-h-[200px]">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
        </div>
      ) : wallpapers.length > 0 ? (
        <>
          <WallpaperGrid wallpapers={wallpapers} />

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-8 flex justify-center gap-4">
              <button
                onClick={() => setPage(p => Math.max(1, p - 1))}
                disabled={page === 1}
                className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Previous
              </button>
              <div className="px-4 py-2 rounded-full bg-white/10">
                Page {page} of {totalPages}
              </div>
              <button
                onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Next
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="text-center text-gray-500 py-12">
          <p className="text-xl">No wallpapers found</p>
          {searchQuery && (
            <p className="mt-2">
              Try adjusting your search query or browse our collection
            </p>
          )}
        </div>
      )}
    </main>
  )
}