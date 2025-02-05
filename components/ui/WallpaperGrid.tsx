import { Wallpaper } from '@/lib/types/wallpaper'

interface WallpaperGridProps {
    wallpapers: Wallpaper[]
}

export default function WallpaperGrid({ wallpapers }: WallpaperGridProps) {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {wallpapers.map((wallpaper) => (
                <div
                    key={wallpaper.public_id}
                    className="relative aspect-[16/9] overflow-hidden rounded-lg"
                >
                    <img
                        src={wallpaper.preview_url}
                        alt={wallpaper.name}
                        className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                    />
                </div>
            ))}
        </div>
    )
}