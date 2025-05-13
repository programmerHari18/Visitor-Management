import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  drawerVisible = false;
  currentPath = '';

  constructor(private router: Router, private message: NzMessageService) {
    this.currentPath = this.router.url;
  }

  handleLogout(): void {
    localStorage.removeItem('token');
    this.message.success('Logout successful!');
    this.router.navigate(['/login']);
  }

  toggleDrawer(): void {
    this.drawerVisible = !this.drawerVisible;
  }
}
