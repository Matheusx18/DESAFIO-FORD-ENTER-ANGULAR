import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './menu.html',
  styleUrl: './menu.css'
})
export class MenuComponent {
  isCollapsed = false;

  constructor(private router: Router) {}

  toggleMenu(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  onLogout(): void {
    this.router.navigate(['/login']);
  }
}