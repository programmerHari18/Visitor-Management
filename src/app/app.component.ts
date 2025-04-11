import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
  <main>
    <router-outlet />
  </main>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Visitor-Management';
}
