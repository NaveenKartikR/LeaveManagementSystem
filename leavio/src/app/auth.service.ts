import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

interface myData {
  success: boolean,
  message: string
}

interface registerResponse {
  success: boolean,
  message: string
}

interface successType {
  success: boolean
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedInStatus = false

  constructor(private http: HttpClient) { }

  setLoggedIn(value: boolean) {
    this.loggedInStatus = value
  }

  get isLoggedIn() {
    return this.loggedInStatus
  }

  getUserDetails(email: string, password: string) {
    // post these details to API server return user info if correct
    return this.http.post<myData>('/api/login', {
      email,
      password
    })
  }

  registerUser(rollno: string, name: string, email: string, password: string, mobile:string, course:string) {
    return this.http.post<registerResponse>('/api/register', {
      rollno,
      name,
      email,
      password,
      mobile,
      course
    })
  }

  storeLeave(email: string, date: Date, reason: string) {
    return this.http.post<registerResponse>('/api/applyLeave', {
      email,
      date,
      reason
    })
  }

  storeLeaveStatus(email: string, date: string, reason: string, status: string) {
    return this.http.post<successType>('/api/leaveValidate', {
      email,
      date,
      reason,
      status
    })
  }
}
