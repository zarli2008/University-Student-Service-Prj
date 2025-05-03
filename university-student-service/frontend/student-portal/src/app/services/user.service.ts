import { Injectable } from '@angular/core';
import { User } from '../model/interface/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private user: User = {
    name: 'Florence',
    email: 'florence123@gmail.com',
    imageUrl: 'profilepic.png',
  };

  getUser(): User {
    return this.user;
  }

  constructor() {}
}
