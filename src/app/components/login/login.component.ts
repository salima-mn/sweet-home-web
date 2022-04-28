import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthModel } from 'src/app/models/auth.model';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  isSuccess: boolean = false;
  activatedAccount: boolean = false;
  showAlertError: any = false;
  showAlertSuccess: any = false;
  auth: AuthModel = new AuthModel('', '');
  message = 'Mauvaise adresse e-mail ou mauvais mot de passe';
  messageSuccess = 'Das Passwort wurde erfolgreich geändert';
  viewPassword: boolean = false;

  redirectUrl: string = `/main-profile`;
  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    localStorage.clear();
    console.log("token : ",localStorage.getItem("token"))
  }

  onFormSubmit() {
    const auth = new AuthModel(this.auth.userPassword, this.auth.username);
    this.login(auth);
  }

  changeViewPassword() {
    this.viewPassword = !this.viewPassword;
  }

  private login(auth: AuthModel) {
    this.authService.signIn(auth).subscribe(
      (response) => {
        localStorage.setItem('token', response.token);
        localStorage.setItem('current-user-id', response.id);
        localStorage.setItem('current-user-role', response.roles[0]);
        this.router.navigateByUrl(this.redirectUrl);
      },
      (error) => {
        this.showAlertError = true;
      }
    );
  }
}
