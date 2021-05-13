import { JobService } from '../../../app/services/job.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { User } from '../../models/user.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  mForm: FormGroup;
  isSent = false
  constructor(private router: Router, private fb: FormBuilder, private jobService: JobService) {

    this.mForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password: ['', [Validators.required, Validators.pattern(/^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{4,30}$/)]]
    })

  }
  name = ""
  email = ""
  password = ""
  rol = ""
  ngOnInit(): void {
  }

  login() {
    this.router.navigate(["/login"])
  }
  get f() {
    return this.mForm.controls
  }
  onSubmit() {

    const user: User = new User()
    if (this.password != "" && this.email != "" && this.name != "") {
      user.name = this.name
      user.email = this.email
      user.password = this.password

      console.log(user)

      this.jobService.registerUser(user).subscribe(
        (data) => {
          console.log(data)
          this.router.navigate(["/login"])
        },
        (error) => {
          console.log("Error:", error);
        }
      );
    }
  }

}
