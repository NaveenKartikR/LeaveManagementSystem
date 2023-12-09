import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminComponent } from '../admin/admin.component';
import { AuthService } from '../auth.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-apply-leave',
  templateUrl: './apply-leave.component.html',
  styleUrls: ['./apply-leave.component.css']
})
export class ApplyLeaveComponent implements OnInit {

  name = ""
  email = ""

  constructor(private Auth: AuthService, private router: Router, private user: UserService) {
    this.user.getData().subscribe(data => {
      this.name = data.name
      this.email = data.email
    })
  }

  ngOnInit(): void { }

  applyLeave(event: any) {
    event?.preventDefault()
    const target = event.target
    const date = target.querySelector('#date').value
    const reason = target.querySelector('#reason').value
    // window.alert(this.email+"\n"+date+"\n"+reason)

    if(date === "" || reason === "") {
      window.alert("Fill both the fields")
    } else {
        // window.alert(this.email+"\n"+date+"\n"+reason)
        this.Auth.storeLeave(this.email, date, reason).subscribe(data => {
          if(data.success) {
            window.alert("Leave request sent")
            this.router.navigate(['dashboard'])
          } else {
            window.alert("Request failed. Try again")
          }
        })
      }
  }
}
