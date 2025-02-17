export interface Tag {
    id: string;
    name: string;
    createdAt: Date;
}

export interface Color {
    id: string;
    hex: string;
    createdAt: Date;
}

export interface Wallpaper {
    id: string;
    publicId: string;
    name: string;
    width: number;
    height: number;
    format: string;
    previewUrl: string;
    downloadUrl: string;
    views: number;
    downloads: number;
    favorites: number;
    createdAt: Date;
    updatedAt: Date;
    tags: Tag[];
    colors: Color[];
}

export interface PaginatedResponse<T> {
    data: T[];
    pagination: {
        currentPage: number;
        totalPages: number;
        totalItems: number;
        itemsPerPage: number;
    };
}