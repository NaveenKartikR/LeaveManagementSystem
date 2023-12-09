import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-credentials',
  templateUrl: './user-credentials.component.html',
  styleUrls: ['./user-credentials.component.css']
})
export class UserCredentialsComponent implements OnInit {
  name = ""
  email = ""

  constructor(private user: UserService) {
      this.user.getData().subscribe(data => {
      this.name = data.name
      this.email = data.email
    })
  }

  ngOnInit(): void {
  }

}
