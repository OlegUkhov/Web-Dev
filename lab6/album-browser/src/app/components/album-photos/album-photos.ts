import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumService } from '../../services/albumService';
import { Photo } from '../../models/photo.model';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="page">
      <button class="back-btn" (click)="router.navigate(['/albums', albumId])">Back to Album</button>
      <h1>Album #{{ albumId }} Photos</h1>

      <div *ngIf="loading">Loading...</div>
      <div *ngIf="error" class="error">{{ error }}</div>

      <div *ngIf="!loading && !error" class="grid">
        <div *ngFor="let photo of photos" class="photo-card">
          <img [src]="photo.thumbnailUrl" [alt]="photo.title" loading="lazy" />
          <p class="photo-title">{{ photo.title }}</p>
        </div>
      </div>

      <p *ngIf="!loading && !error && photos.length === 0">No photos found.</p>
    </div>
  `,
  styles: [`
    .page { max-width: 1000px; margin: 32px auto; padding: 0 16px; }
    .back-btn { background: none; border: none; color: #cc0000; cursor: pointer; font-size: 15px; margin-bottom: 16px; font-weight: bold; }
    h1 { margin-bottom: 20px; }
    .error { color: #cc0000; font-size: 14px; margin-top: 12px; }
    .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); gap: 12px; }
    .photo-card { background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 4px rgba(0,0,0,0.1); }
    .photo-card img { width: 100%; display: block; }
    .photo-title { padding: 6px 8px; font-size: 11px; color: #555; text-transform: capitalize; line-height: 1.3; }
  `]
})
export class AlbumPhotosComponent implements OnInit {
  photos: Photo[] = [];
  albumId = 0;
  loading = true;
  error: string | null = null;

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private albumService: AlbumService
  ) {}

  ngOnInit() {
    this.albumId = Number(this.route.snapshot.paramMap.get('id'));
    this.albumService.getAlbumPhotos(this.albumId).subscribe({
      next: (data) => {
        this.photos = data;
        this.loading = false;
      },
      error: () => {
        this.error = 'Failed to load photos. Please try again.';
        this.loading = false;
      }
    });
  }
}
