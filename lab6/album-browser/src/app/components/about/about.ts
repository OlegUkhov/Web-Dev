import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  template: `
    <div class="page">
      <h1>About</h1>
      <p><strong>Student:</strong> Oleg</p>
      <p><strong>Course:</strong> Web Development</p>
      <p><strong>Lab:</strong> 6 Routing & HTTP</p>
      <p><strong>API:</strong> JSONPlaceholder (jsonplaceholder.typicode.com)</p>
      <p><strong>Technologies:</strong> Angular, HttpClient, RxJS, Router</p>
    </div>
  `,
  styles: [`
    .page { max-width: 500px; margin: 60px auto; }
    h1 { margin-bottom: 20px; }
    p { margin-bottom: 10px; color: #333; line-height: 1.6; }
  `]
})
export class AboutComponent {}
