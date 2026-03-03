import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="page">
      <h1>Welcome</h1>
      <p>Browse albums fetched from the JSONPlaceholder API.</p>
      <a routerLink="/albums" class="btn">Browse Albums</a>
    </div>
  `,
  styles: [`
    .page { max-width: 600px; margin: 80px auto; text-align: center; }
    h1 { font-size: 28px; margin-bottom: 12px; }
    p { color: #555; margin-bottom: 24px; }
    .btn {
      display: inline-block;
      padding: 12px 28px;
      background: #cc0000;
      color: white;
      border-radius: 24px;
      text-decoration: none;
      font-weight: bold;
    }
    .btn:hover { background: #a00000; }
  `]
})
export class HomeComponent {}
