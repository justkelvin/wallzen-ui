'use client'
import React from 'react'
import ReactMarkdown from 'react-markdown'

const TIMESTAMP = '2025-02-04 22:13:48'
const CURRENT_USER = 'justkelvin'

export default function ApiDocs() {
    const documentation = `
# WallZen API Documentation
**Version:** 1.0.0
**Last Updated:** ${TIMESTAMP}

## Base URL
\`\`\`
http://localhost:3001/api
\`\`\`

## Authentication
Currently, the API is open and doesn't require authentication.

## Response Format
All endpoints return responses in the following format:

\`\`\`json
{
  "data": [], // Array of items or single item
  "pagination": {
    "current_page": 1,
    "total_pages": 10,
    "total_items": 100,
    "items_per_page": 10
  },
  "timestamp": "${TIMESTAMP}",
  "requested_by": "${CURRENT_USER}"
}
\`\`\`

## Rate Limiting
- API Endpoints: 100 requests per 15 minutes
- Download Endpoints: 30 downloads per 15 minutes

## Core Endpoints

### List Wallpapers
\`GET /wallpapers\`

Retrieve a paginated list of wallpapers.

**Query Parameters:**
- \`page\` (optional): Page number (default: 1)
- \`limit\` (optional): Items per page (default: 20)

**Example Request:**
\`\`\`bash
curl http://localhost:3001/api/wallpapers?page=1&limit=10
\`\`\`

### Get Specific Wallpaper
\`GET /wallpapers/:id\`

Retrieve details for a specific wallpaper.

**Example Request:**
\`\`\`bash
curl http://localhost:3001/api/wallpapers/17dfbd085973197275da379829d7b955
\`\`\`

## Discovery Features

### Random Wallpapers
\`GET /wallpapers/random\`

Get random wallpaper(s).

**Query Parameters:**
- \`count\` (optional): Number of wallpapers to return (default: 1, max: 10)

**Example Request:**
\`\`\`bash
curl http://localhost:3001/api/wallpapers/random?count=5
\`\`\`

### Search Wallpapers
\`GET /wallpapers/search\`

Search wallpapers by name or tags.

**Query Parameters:**
- \`query\` (required): Search term
- \`page\` (optional): Page number (default: 1)
- \`limit\` (optional): Items per page (default: 20)

**Example Request:**
\`\`\`bash
curl http://localhost:3001/api/wallpapers/search?query=nature&page=1&limit=20
\`\`\`

### Filter Wallpapers
\`GET /wallpapers/filter\`

Filter wallpapers by various criteria.

**Query Parameters:**
- \`tags\` (optional): Comma-separated list of tags
- \`colors\` (optional): Comma-separated list of colors (hex codes)
- \`min_width\` (optional): Minimum width in pixels
- \`max_width\` (optional): Maximum width in pixels
- \`min_height\` (optional): Minimum height in pixels
- \`max_height\` (optional): Maximum height in pixels
- \`format\` (optional): File format (jpg, png, etc.)
- \`page\` (optional): Page number (default: 1)
- \`limit\` (optional): Items per page (default: 20)

**Example Requests:**
\`\`\`bash
# Filter by tags
curl http://localhost:3001/api/wallpapers/filter?tags=nature,landscape

# Filter by resolution
curl http://localhost:3001/api/wallpapers/filter?min_width=1920&min_height=1080

# Filter by format
curl http://localhost:3001/api/wallpapers/filter?format=jpg

# Filter by colors
curl http://localhost:3001/api/wallpapers/filter?colors=ff5733,2196f3
\`\`\`

## Statistics

### Popular Wallpapers
\`GET /wallpapers/popular\`

Get most downloaded wallpapers.

**Query Parameters:**
- \`page\` (optional): Page number (default: 1)
- \`limit\` (optional): Items per page (default: 20)

**Example Request:**
\`\`\`bash
curl http://localhost:3001/api/wallpapers/popular
\`\`\`

## Image Processing

### Get Preview
\`GET /wallpapers/:id/preview\`

Get an optimized preview image of a wallpaper.

**Example Request:**
\`\`\`bash
curl http://localhost:3001/api/wallpapers/17dfbd085973197275da379829d7b955/preview
\`\`\`

### Download Wallpaper
\`GET /wallpapers/:id/download\`

Download the original wallpaper file. Subject to rate limiting.

**Example Request:**
\`\`\`bash
curl http://localhost:3001/api/wallpapers/17dfbd085973197275da379829d7b955/download
\`\`\`

## Health Check

### API Status
\`GET /health\`

Check the API status.

**Example Request:**
\`\`\`bash
curl http://localhost:3001/api/health
\`\`\`

**Example Response:**
\`\`\`json
{
  "status": "ok",
  "timestamp": "${TIMESTAMP}",
  "version": "1.0.0",
  "service": "wallzen-api",
  "wallpapers_count": 42
}
\`\`\`

## Error Handling

### Error Response Format
\`\`\`json
{
  "error": "Error message here",
  "timestamp": "${TIMESTAMP}"
}
\`\`\`

### Common HTTP Status Codes
- \`200\`: Success
- \`400\`: Bad Request
- \`404\`: Not Found
- \`429\`: Too Many Requests
- \`500\`: Internal Server Error

## Data Types

### Wallpaper Object
\`\`\`typescript
interface Wallpaper {
  public_id: string;
  name: string;
  width: number;
  height: number;
  format: string;
  created_at: string;
  tags: string[];
  colors: string[];
  preview_url: string;
  download_url: string;
  views: number;
  downloads: number;
  favorites: number;
}
\`\`\`

## Best Practices
1. Use pagination parameters to limit response size
2. Implement rate limiting in your applications
3. Cache responses when appropriate
4. Handle errors gracefully
`

    return (
        <div className="container mx-auto px-4 py-8 max-w-4xl">
            <div className="prose prose-invert prose-pre:bg-gray-800 prose-pre:text-gray-100 prose-code:text-gray-100 prose-headings:text-white prose-strong:text-white prose-a:text-blue-400 max-w-none">
                <ReactMarkdown>{documentation}</ReactMarkdown>
            </div>
        </div>
    )
}