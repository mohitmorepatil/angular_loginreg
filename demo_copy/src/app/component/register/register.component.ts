import { Component, OnInit, OnChanges } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray, NgForm } from '@angular/forms';
import { CustomValidatorsService } from '../../services/custom-validators.service';
import { Observable,Subscriber } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../../services/user.service';
import { UserReg } from '../../models/user-reg';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],

})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  formControls=this.registerForm.controls;
  submitted = false;
  user: UserReg;
  emailpatten:'/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/';
  userDetails: Array<UserReg> = [];
  constructor(private formBuilder: FormBuilder, private customValidatorsService: CustomValidatorsService, private httpClient: HttpClient, private userService: UserService) {
    //debugger;
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, this.customValidatorsService.validatePass]],
    });
  }

  ngOnInit() {
    //debugger;
    //this.resetForm();
  }

  /*resetForm(form?: NgForm) {
    debugger;
    form.reset();
    if (form != null) {
      this.user = {
        username: '',
        email: '',
        password: ''
      }
    }

  }*/

  register(form: NgForm) {
   // debugger;
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      alert('invalid');
      return false;
    }

    this.userService.create(form.value).subscribe((data: Array<UserReg>) => {
      debugger;
      this.userDetails = data;

    })
     



  }


  

}
