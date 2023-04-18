import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../login.service';
@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css'],
})
export class LoginComponent implements OnInit {
  namevalue: any = '';
  passwordvalue: any = '';
  retUrl: any = 'home';
  constructor(
    private service: LoginService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {}

  regform = this.fb.group(
    {
      namevalue: [, Validators.required],
      emailvalue: [, Validators.required],
      mobilevalue: [, Validators.required],
      passwordvalue: [, Validators.required],
      confirmpasswordvalue: [, Validators.required],
    }
    // {validator:confirmPasswordValidate('passwordvalue','confirmpasswordvalue'),}
  );
  ngOnInit() {
    this.route.queryParamMap.subscribe((parama) => {
      this.retUrl = parama.get('retUrl');
      console.log('LoginComponent/ngOnInit', this.retUrl);
    });
  }
  onLogin() {
    this.service.login(this.namevalue, this.passwordvalue).subscribe((data) => {
      alert('hi');
      console.log('return to' + this.retUrl);
      if (this.retUrl != null) {
        this.router.navigate([this.retUrl]);
      }
    });
  }
}
