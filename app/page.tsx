import WallpaperGrid from '@/components/ui/WallpaperGrid'
import { Wallpaper } from '@/lib/types/wallpaper'

// Temporary mock data
const mockWallpapers: Wallpaper[] = [
  {
    public_id: '1',
    name: 'Mountain Landscape',
    width: 3840,
    height: 2160,
    format: 'jpg',
    created_at: '2025-02-04',
    tags: ['nature', 'mountain'],
    colors: ['#2B2B2B', '#FFFFFF'],
    preview_url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    download_url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb'
  },
  // Add 3 more similar items with different IDs and images for testing
]

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Featured Wallpapers</h1>
      <WallpaperGrid wallpapers={mockWallpapers} />
    </main>
  )
}