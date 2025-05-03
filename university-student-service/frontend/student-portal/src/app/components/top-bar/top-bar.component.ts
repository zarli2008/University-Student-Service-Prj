import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../model/interface/user';

@Component({
  selector: 'app-top-bar',
  imports: [],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss',
})
export class TopBarComponent {
  user: User;

  constructor(private userService: UserService) {
    this.user = this.userService.getUser();
  }
}
