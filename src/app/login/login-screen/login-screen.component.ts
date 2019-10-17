import {Component, OnDestroy, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '@shared/services/login.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss']
})
export class LoginScreenComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;
  loginErrorMessage: string;
  isPending: boolean;
  userUrl: string;
  subscription: Subscription = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private loginService: LoginService
  ) {
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.userUrl = this.route.snapshot.queryParams.userUrl || '/';
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSubmit() {
    this.loginForm.markAllAsTouched();
    if (this.loginForm.valid) {
      this.isPending = true;
      this.subscription.add(this.login());
    }
  }

  private login(): Subscription {
    return this.loginService.login(this.loginForm.value.username, this.loginForm.value.password)
      .subscribe(
        response => {
          this.router.navigate([this.userUrl]);
        },
        error => {
          this.loginErrorMessage = error;
          this.isPending = false;
        }
      );
  }

  get username(): AbstractControl {
    return this.loginForm.get('username');
  }

  get password(): AbstractControl {
    return this.loginForm.get('password');
  }
}
