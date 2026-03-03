import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AlbumService } from '../../services/albumService';
import { Album } from '../../models/album.model';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="page">
      <h1>Albums</h1>

      <div *ngIf="loading" class="loading">Loading...</div>
      <div *ngIf="error" class="error">{{ error }}</div>

      <ul *ngIf="!loading && !error" class="album-list">
        <li *ngFor="let album of albums" class="album-item">
          <span class="album-id">#{{ album.id }}</span>
          <span class="album-title" (click)="goTo(album.id)">{{ album.title }}</span>
          <button class="del-btn" (click)="delete(album.id)">🗑️</button>
        </li>
      </ul>

      <p *ngIf="!loading && !error && albums.length === 0">No albums found.</p>
    </div>
  `,
  styles: [`
    .page { max-width: 700px; margin: 32px auto; padding: 0 16px; }
    h1 { margin-bottom: 20px; }
    .loading { color: #888; }
    .error { color: #cc0000; font-size: 14px; margin-bottom: 12px; }
    .album-list { list-style: none; }
    .album-item {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 10px 14px;
      margin-bottom: 6px;
      background: white;
      border-radius: 8px;
      box-shadow: 0 1px 4px rgba(0,0,0,0.08);
    }
    .album-id { min-width: 40px; color: #aaa; font-size: 13px; font-weight: bold; }
    .album-title { flex: 1; cursor: pointer; color: #cc0000; font-weight: bold; text-transform: capitalize; }
    .album-title:hover { text-decoration: underline; }
    .del-btn { background: none; border: none; cursor: pointer; font-size: 16px; }
  `]
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];
  loading = true;
  error: string | null = null;

  constructor(private albumService: AlbumService, private router: Router) {}

  ngOnInit() {
    this.albumService.getAlbums().subscribe({
      next: (data) => {
        this.albums = data;
        this.loading = false;
      },
      error: () => {
        this.error = 'Failed to load albums. Please try again.';
        this.loading = false;
      }
    });
  }

  goTo(id: number) {
    this.router.navigate(['/albums', id]);
  }

  delete(id: number) {
    this.albumService.deleteAlbum(id).subscribe({
      next: () => {
        this.albums = this.albums.filter(a => a.id !== id);
      },
      error: () => {
        alert('Failed to delete album.');
      }
    });
  }
}
