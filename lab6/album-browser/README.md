# Album Browser

Web Development Lab 6 — Routing & HTTP

A multi-page Single Page Application (SPA) built with Angular that lets you browse, edit, and delete albums fetched from the JSONPlaceholder REST API.

## Features

- **6 configured routes** — home, about, albums list, album detail, album photos, and redirect
- **AlbumService** — centralized HTTP layer using Angular's `HttpClient`
- **CRUD operations** — Read albums & photos, Update album titles, Delete albums
- **Responsive photo grid** — hover overlay showing photo titles
- **Loading indicators** — shown while API requests are in flight
- **TypeScript interfaces** — `Album` and `Photo` models with no `any` types

## Project Structure

```
src/
  app/
    components/
      home/             # Static welcome page
      about/            # Static about page
      albums/           # Albums list with delete
      album-detail/     # Album detail with edit
      album-photos/     # Photo grid for an album
    models/
      album.model.ts    # Album interface
      photo.model.ts    # Photo interface
    services/
      album.service.ts  # All API communication
    app.routes.ts       # Route configuration
    app.config.ts       # App providers (Router, HttpClient)
    app.component.ts    # Root component with navbar
```

## Getting Started

### Prerequisites
- Node.js (v18+)
- Angular CLI (`npm install -g @angular/cli`)

### Installation

```bash
# Clone the repo
git clone <your-repo-url>
cd lab6/album-browser

# Install dependencies
npm install

# Start the dev server
ng serve
```

Open your browser at `http://localhost:4200`

## API

Uses [JSONPlaceholder](https://jsonplaceholder.typicode.com) — a free fake REST API:

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/albums` | List all albums |
| GET | `/albums/:id` | Get single album |
| GET | `/albums/:id/photos` | Get album photos |
| PUT | `/albums/:id` | Update album (simulated) |
| DELETE | `/albums/:id` | Delete album (simulated) |

> Note: PUT/DELETE are simulated — changes are reflected in the UI only and do not persist.

## Routes

| Path | Component | Description |
|------|-----------|-------------|
| `/` | → `/home` | Redirect |
| `/home` | HomeComponent | Welcome page |
| `/about` | AboutComponent | About page |
| `/albums` | AlbumsComponent | Albums list |
| `/albums/:id` | AlbumDetailComponent | Album detail + edit |
| `/albums/:id/photos` | AlbumPhotosComponent | Photo grid |
