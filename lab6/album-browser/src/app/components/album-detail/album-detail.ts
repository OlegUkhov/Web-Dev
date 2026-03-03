import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumService } from '../../services/albumService';
import { Album } from '../../models/album.model';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="page">
      <button class="back-btn" (click)="router.navigate(['/albums'])">Back</button>

      <div *ngIf="loading">Loading...</div>
      <div *ngIf="error" class="error">{{ error }}</div>

      <div *ngIf="album" class="card">
        <p class="meta">Album #{{ album.id }} · User {{ album.userId }}</p>
        <h1>{{ album.title }}</h1>

        <div class="edit-section">
          <label>Edit title:</label>
          <input [(ngModel)]="editTitle" class="input" />
          <button class="btn" (click)="save()" [disabled]="saving">
            {{ saving ? 'Saving...' : 'Save' }}
          </button>
          <span *ngIf="saved" class="ok">Saved</span>
          <span *ngIf="saveError" class="error">{{ saveError }}</span>
        </div>

        <button class="btn btn-photos" (click)="router.navigate(['/albums', album.id, 'photos'])">
          🖼️ View Photos
        </button>
      </div>
    </div>
  `,
  styles: [`
    .page { max-width: 600px; margin: 32px auto; padding: 0 16px; }
    .back-btn { background: none; border: none; color: #cc0000; cursor: pointer; font-size: 15px; margin-bottom: 20px; font-weight: bold; }
    .card { background: white; border-radius: 12px; padding: 24px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
    .meta { color: #aaa; font-size: 13px; margin-bottom: 8px; }
    h1 { font-size: 20px; text-transform: capitalize; margin-bottom: 24px; }
    .edit-section { display: flex; flex-direction: column; gap: 8px; margin-bottom: 20px; }
    label { font-weight: bold; font-size: 14px; color: #555; }
    .input { padding: 8px 12px; border: 1px solid #ddd; border-radius: 8px; font-size: 15px; }
    .btn { padding: 10px 20px; background: #cc0000; color: white; border: none; border-radius: 20px; cursor: pointer; font-weight: bold; width: fit-content; }
    .btn:disabled { opacity: 0.6; }
    .btn-photos { background: #e67e00; margin-top: 4px; }
    .ok { color: green; font-size: 14px; }
    .error { color: #cc0000; font-size: 14px; margin-bottom: 12px; }
  `]
})
export class AlbumDetailComponent implements OnInit {
  album: Album | null = null;
  editTitle = '';
  loading = true;
  saving = false;
  saved = false;
  error: string | null = null;
  saveError: string | null = null;

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private albumService: AlbumService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumService.getAlbum(id).subscribe({
      next: (data) => {
        this.album = data;
        this.editTitle = data.title;
        this.loading = false;
      },
      error: () => {
        this.error = 'Failed to load album. Please try again.';
        this.loading = false;
      }
    });
  }

  save() {
    if (!this.album) return;
    this.saving = true;
    this.saveError = null;
    this.albumService.updateAlbum({ ...this.album, title: this.editTitle }).subscribe({
      next: () => {
        this.album!.title = this.editTitle;
        this.saving = false;
        this.saved = true;
        setTimeout(() => this.saved = false, 2000);
      },
      error: () => {
        this.saving = false;
        this.saveError = 'Failed to save. Please try again.';
      }
    });
  }
}
