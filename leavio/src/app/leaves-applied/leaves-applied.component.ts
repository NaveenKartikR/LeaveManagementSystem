import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-leaves-applied',
  templateUrl: './leaves-applied.component.html',
  styleUrls: ['./leaves-applied.component.css']
})
export class LeavesAppliedComponent implements OnInit {

  leaveData: any[] = []

  constructor(private Auth: AuthService, private user: UserService) { }

  ngOnInit(): void {
    this.user.getYourLeaveData().subscribe(leaveData => {
      this.leaveData = leaveData["leave"]
      // console.log(this.leaveData)
    })
  }

}
