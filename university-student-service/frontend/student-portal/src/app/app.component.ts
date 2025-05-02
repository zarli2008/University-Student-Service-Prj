import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// @Component({
//   selector: 'app-root',
//   imports: [RouterOutlet],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.scss'
// })


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet], // ✅ include RouterModule here
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'student-portal zl edited';
}
