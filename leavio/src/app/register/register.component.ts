import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  registerUser(event: any) {
    event?.preventDefault()
    const errors = []
    const target = event.target
    const rollno = target.querySelector('#rollno').value
    const name = target.querySelector('#name').value
    const email = target.querySelector('#email').value
    const password = target.querySelector('#password').value
    const cpassword = target.querySelector('#cpassword').value
    const mobile = target.querySelector('#mobile').value
    const course = target.querySelector('#course').value
    // window.alert(email)

    if(password != cpassword) {
      window.alert("Passwords do not match")
      errors.push("Passwords do not match")
    }

    // more validation

    if(errors.length === 0) {
      this.auth.registerUser(rollno, name, email, password, mobile, course).subscribe(data => {
        // console.log(data)
        if(data.success) {
          window.alert("Registered")
          this.router.navigate(['dashboard'])
        }
      })
    }
    // console.log(email, password)
  }

}
