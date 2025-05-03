import {
  Component,
  computed,
  HostListener,
  Inject,
  OnInit,
  PLATFORM_ID,
  signal,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { LeftSidebarComponent } from '../left-sidebar/left-sidebar.component';
import { TopBarComponent } from '../top-bar/top-bar.component';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-layout',
  imports: [HomeComponent, LeftSidebarComponent, TopBarComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent implements OnInit {
  title = 'student-portal';
  isLeftSidebarCollapsed = signal<boolean>(false);
  screenWidth = signal<number>(0);

  sizeClass = computed(() => {
    const collapsed = this.isLeftSidebarCollapsed();
    const width = this.screenWidth();

    if (collapsed === undefined || width === undefined) {
      return '';
    }

    return collapsed ? '' : width > 768 ? 'body-trimmed' : 'body-md-screen';
  });

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
