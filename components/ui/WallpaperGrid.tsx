import { useState } from 'react';
import { Wallpaper } from '@/lib/types/wallpaper';

interface WallpaperGridProps {
    wallpapers: Wallpaper[];
}

export default function WallpaperGrid({ wallpapers }: WallpaperGridProps) {
    const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

    const handleImageError = (wallpaperId: string) => {
        setImageErrors(prev => ({ ...prev, [wallpaperId]: true }));
        console.error(`Failed to load image for wallpaper ${wallpaperId}`);
    };

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {wallpapers.map((wallpaper) => (
                <div
                    key={wallpaper.public_id}
                    className="relative aspect-[16/9] overflow-hidden rounded-lg bg-gray-800"
                >
                    {!imageErrors[wallpaper.public_id] ? (
                        <img
                            src={wallpaper.preview_url}
                            alt={wallpaper.name}
                            className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                            onError={() => handleImageError(wallpaper.public_id)}
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-400">
                            Failed to load image
                        </div>
                    )}
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2">
                        <p className="text-sm text-white truncate">{wallpaper.name}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}