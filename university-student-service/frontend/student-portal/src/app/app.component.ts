import {
  Component,
  HostListener,
  Inject,
  OnInit,
  PLATFORM_ID,
  signal,
} from '@angular/core';
import { MasterComponent } from './components/master/master.component';
import { LayoutComponent } from './components/layout/layout.component';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [MasterComponent, LayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'student-portal';
  isLeftSidebarCollapsed = signal<boolean>(false);
  screenWidth = signal<number>(0);

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  @HostListener('window:resize')
  onResize() {
    const width = window.innerWidth;
    this.screenWidth.set(width);

    if (width < 768) {
      this.isLeftSidebarCollapsed.set(true); // Collapse on small screens
    } else {
      this.isLeftSidebarCollapsed.set(false); // Expand on larger screens
    }
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.screenWidth.set(window.innerWidth);
      this.isLeftSidebarCollapsed.set(this.screenWidth() < 768);
    }
  }

  changeIsLeftSidebarCollapsed(isLeftSidebarCollapsed: boolean): void {
    this.isLeftSidebarCollapsed.set(isLeftSidebarCollapsed);
  }
}
