import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'node_modules/rxjs/dist/types';

interface myData {
  status: boolean,
  rollno: string,
  name: string,
  email: string,
  mobile: string,
  course: string
}

// interface leaveData {
//   status: boolean;
//   email: string,
//   date: string,
//   reason: string,
//   approved: boolean
// }

interface isLoggedIn {
  status: boolean
}

interface quoteStatus {
  success: boolean
}

interface logoutStatus {
  success: boolean
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get<myData>('/api/data')
  }

  getLeaveData() {
    return this.http.get<any>('/api/leaveData')
  }

  getYourLeaveData() {
    return this.http.get<any>('/api/yourLeaveData')
  }

  isLoggedIn(): Observable<isLoggedIn> {
    return this.http.get<isLoggedIn>('/api/isloggedin')
  }

  logout() {
    return this.http.get<logoutStatus>('/api/logout')
  }
}
