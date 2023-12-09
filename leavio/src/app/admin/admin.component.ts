import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  leaveData: any[] = []

  constructor(private Auth: AuthService, private user: UserService, private router: Router) { }

  ngOnInit(): void {
    this.user.getLeaveData().subscribe(leaveData => {
      this.leaveData = leaveData["leave"]
      // console.log(this.leaveData)
    })
  }

  validate(index: number, stat: string) {
    // window.alert(this.leaveData[index].email+"\n"+this.leaveData[index].date+"\n"+this.leaveData[index].reason+"\n"+stat)
    this.Auth.storeLeaveStatus(this.leaveData[index].email, this.leaveData[index].date, this.leaveData[index].reason, stat).subscribe(data => {
      if(data.success) {
        this.user.getLeaveData().subscribe(leaveData => {
          this.leaveData = leaveData["leave"]
        })
      } else {
        window.alert("Approval not reflected. Try again")
      }
    })
  }

}
