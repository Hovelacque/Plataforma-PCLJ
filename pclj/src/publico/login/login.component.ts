import { Component, Injector } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponentBase } from '@shared/app-component-base';
import { SessionServiceProxyService } from '@shared/service-proxies/session/session-service-proxy.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends AppComponentBase {

  loginForm: FormGroup = null;

  constructor(
    public injector: Injector,
    private _router: Router,
    private formBuilder: FormBuilder,
    private _service: SessionServiceProxyService
  ) {
    super(injector);
    this.loginForm = this.formBuilder.group({
      usuario: ['', Validators.required],
      senha: ['', Validators.required]
    });
  }

  login(): void {
    this._service.login(this.loginForm.value.usuario, this.loginForm.value.senha)
      .subscribe(() => {
        this.appSession.refreshSession();
        this._router.navigate(['app']);
      });
  }
}
