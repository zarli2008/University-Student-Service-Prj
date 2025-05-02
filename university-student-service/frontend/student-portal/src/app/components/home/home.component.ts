import { Component, computed, input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  isLeftSidebarCollapsed = input<boolean>();
  screenWidth = input<number>();

  sizeClass = computed(() => {
    const collapsed = this.isLeftSidebarCollapsed();
    const width = this.screenWidth();

    if (collapsed === undefined || width === undefined) {
      return '';
    }

    return collapsed ? '' : width > 768 ? 'body-trimmed' : 'body-md-screen';
  });
}
