import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  rollno = "Getting your rollno..."
  name = "Getting your name..."
  email = "Getting your email..."
  mobile = "Getting your mobile..."
  course = "Getting your course..."

  constructor(private user: UserService, private router: Router) { }

  ngOnInit(): void {
    this.user.getData().subscribe(data => {
      if(data.status) {
        this.rollno = data.rollno
        this.name = data.name
        this.email = data.email
        this.mobile = data.mobile
        this.course = data.course
      } else {
        this.router.navigate(['logout'])
      }
    })
  }
}
