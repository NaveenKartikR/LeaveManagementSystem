import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private Auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  loginUser(event: any) {
    event?.preventDefault()
    const target = event.target
    const username = target.querySelector('#username').value
    const password = target.querySelector('#password').value

    if(username === "auth01.lms@gmail.com" && password === "LeaveMS$01") {
      this.Auth.setLoggedIn(true)
      this.router.navigate(['admin'])
    } else {
      this.Auth.getUserDetails(username, password).subscribe(data => {
        if(data.success) {
          this.router.navigate(['dashboard'])
          this.Auth.setLoggedIn(true)
        } else {
          window.alert("Invalid Credentials")
        }
      })
    }
    // console.log(username, password)
  }

}
