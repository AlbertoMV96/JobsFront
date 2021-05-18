import { JobService } from '../../../app/services/job.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { User } from '../../models/user.model';
import { Location } from '@angular/common';
import { SharedService } from 'src/app/services/shared.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Output() myEvent = new EventEmitter();

  email = ""
  password = ""
  mForm: FormGroup;
  isSent = false
  constructor(private router: Router, private fb: FormBuilder, private jobService: JobService, private sharedService: SharedService) {

    this.mForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password: ['', [Validators.required, Validators.pattern(/^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{4,30}$/)]]
    })
  }

  ngOnInit(): void {
    if(this.sharedService.getUsername()!=null && this.sharedService.getUsername()!=""){
      this.router.navigate(["/"])
    }
  }
  // signup() {
  //   this.router.navigate(["/register"])
  // }
  get f() {
    return this.mForm.controls
  }
  logged() {
    this.router.navigate(["/"])
  }
  onSubmit() {
    console.log("Enviar form")
    this.isSent = true
    if (this.mForm.invalid) {
      console.log("Login Invalido")
      return
    }
    const user: User = new User()
    console.log("Usuario y contraseña estan" + this.email + this.password);
    if (this.password != "" && this.email != "") {
      user.email = this.email
      user.password = this.password

      this.jobService.loginUser(user).subscribe(
        (data) => {
          localStorage.setItem('token', data.access_token)
          localStorage.setItem('username', data.username)
          this.router.navigate(["/"])
          //window.location.reload()
        },
        (error) => {
          console.log("Error:", error);
        }
      );
    }
    console.log("Login Valido", this.mForm.value)


  }

}
