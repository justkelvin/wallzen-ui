'use client'
import { useState } from 'react'
import { Wallpaper } from '@/lib/types/wallpaper'
import {
    ArrowDownTrayIcon,
    HeartIcon,
    ArrowsPointingOutIcon,
    XMarkIcon,
    MagnifyingGlassMinusIcon,
    MagnifyingGlassPlusIcon
} from '@heroicons/react/24/outline'
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid'

interface WallpaperGridProps {
    wallpapers: Wallpaper[];
}

export default function WallpaperGrid({ wallpapers }: WallpaperGridProps) {
    const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});
    const [selectedWallpaper, setSelectedWallpaper] = useState<Wallpaper | null>(null);
    const [favorites, setFavorites] = useState<Set<string>>(new Set());
    const [zoomLevel, setZoomLevel] = useState(1);

    const handleImageError = (wallpaperId: string) => {
        setImageErrors(prev => ({ ...prev, [wallpaperId]: true }));
        console.error(`Failed to load image for wallpaper ${wallpaperId}`);
    };

    const getQualityLabel = (width: number) => {
        if (width >= 3840) return '4K';
        if (width >= 2560) return '2K';
        if (width >= 1920) return '1080p';
        return 'HD';
    };

    const handleDownload = async (wallpaper: Wallpaper) => {
        try {
            const response = await fetch(wallpaper.download_url);
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `${wallpaper.name}.${wallpaper.format}`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error('Download failed:', error);
        }
    };

    const toggleFavorite = (wallpaperId: string) => {
        setFavorites(prev => {
            const newFavorites = new Set(prev);
            if (newFavorites.has(wallpaperId)) {
                newFavorites.delete(wallpaperId);
            } else {
                newFavorites.add(wallpaperId);
            }
            return newFavorites;
        });
    };

    return (
        <>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {wallpapers.map((wallpaper) => (
                    <div
                        key={wallpaper.public_id}
                        className="relative aspect-[16/9] overflow-hidden rounded-lg bg-gray-800 group"
                    >
                        {/* Quality Label */}
                        <div className="absolute top-2 left-2 z-10">
                            <span className="px-2 py-1 rounded-full bg-black/50 text-white text-xs font-medium">
                                {getQualityLabel(wallpaper.width)}
                            </span>
                        </div>

                        {/* Image */}
                        {!imageErrors[wallpaper.public_id] ? (
                            <img
                                src={wallpaper.preview_url}
                                alt={wallpaper.name}
                                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                                onError={() => handleImageError(wallpaper.public_id)}
                            />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center text-gray-400">
                                Failed to load image
                            </div>
                        )}

                        {/* Action Buttons */}
                        <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="flex justify-center gap-4">
                                <button
                                    onClick={() => handleDownload(wallpaper)}
                                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                                    title="Download"
                                >
                                    <ArrowDownTrayIcon className="w-5 h-5" />
                                </button>
                                <button
                                    onClick={() => toggleFavorite(wallpaper.public_id)}
                                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                                    title="Favorite"
                                >
                                    {favorites.has(wallpaper.public_id) ? (
                                        <HeartSolidIcon className="w-5 h-5 text-red-500" />
                                    ) : (
                                        <HeartIcon className="w-5 h-5" />
                                    )}
                                </button>
                                <button
                                    onClick={() => setSelectedWallpaper(wallpaper)}
                                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                                    title="Maximize"
                                >
                                    <ArrowsPointingOutIcon className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {selectedWallpaper && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md bg-black/60">
                    <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-xl max-w-5xl w-full max-h-[90vh] overflow-hidden">
                        {/* Modal Header */}
                        <div className="absolute top-0 left-0 right-0 z-10 flex justify-between items-center p-4 bg-gradient-to-b from-black/50 to-transparent">
                            <div className="flex items-center gap-4">
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => setZoomLevel(z => Math.max(0.5, z - 0.1))}
                                        className="p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
                                    >
                                        <MagnifyingGlassMinusIcon className="w-5 h-5" />
                                    </button>
                                    <button
                                        onClick={() => setZoomLevel(z => Math.min(2, z + 0.1))}
                                        className="p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
                                    >
                                        <MagnifyingGlassPlusIcon className="w-5 h-5" />
                                    </button>
                                </div>
                                <span className="text-sm bg-black/50 px-3 py-1 rounded-full">
                                    {selectedWallpaper.width} × {selectedWallpaper.height}
                                </span>
                                <button
                                    onClick={() => handleDownload(selectedWallpaper)}
                                    className="px-4 py-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors flex items-center gap-2"
                                >
                                    <ArrowDownTrayIcon className="w-5 h-5" />
                                    <span>Download</span>
                                </button>
                            </div>
                            <button
                                onClick={() => {
                                    setSelectedWallpaper(null);
                                    setZoomLevel(1);
                                }}
                                className="p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
                            >
                                <XMarkIcon className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Modal Body */}
                        <div className="relative w-full h-[80vh] flex items-center justify-center p-4">
                            <img
                                src={selectedWallpaper.download_url}
                                alt={selectedWallpaper.name}
                                className="max-w-full max-h-full object-contain transition-transform duration-200"
                                style={{ transform: `scale(${zoomLevel})` }}
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}